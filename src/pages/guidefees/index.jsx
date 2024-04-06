import React, { useState, useEffect } from "react";
import { saveAs } from "file-saver";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  pdf,
} from "@react-pdf/renderer";
import Logo from "./logo.png";

// parks data
const parksData = [
  { name: "Aberdare National Park", rate: 52, kidsRate: 26, guideFees: 1530 },
  { name: "Amboseli National Park", rate: 60, kidsRate: 35, guideFees: 1890 },
  {
    name: "Boat Ride and Crescent Island Walking Safari",
    rate: 0,
    kidsRate: 0,
    guideFees: 1500,
    crescentIsland: 3000, // multiply by number
  },
  { name: "Giraffe Center", rate: 15, kidsRate: 15, guideFees: 0 },
  { name: "Hells Gate National Park", rate: 30, kidsRate: 30, guideFees: 1330 },
  { name: "Kora National Park", rate: 60, kidsRate: 35, guideFees: 1530 },
  {
    name: "Lake Nakuru National Park",
    rate: 60,
    kidsRate: 35,
    guideFees: 1890,
  },
  {
    name: "Masai Mara National Reserve",
    rate: 80,
    kidsRate: 45,
    guideFees: 2000,
  },
  { name: "Masai Village", rate: 0, kidsRate: 0, guideFees: 1000 },
  { name: "Meru National Park", rate: 60, kidsRate: 35, guideFees: 1530 },
  {
    name: "Mount Elgon National Park",
    rate: 30,
    kidsRate: 30,
    guideFees: 1330,
  },
  {
    name: "Mount Longonot National Park",
    rate: 30,
    kidsRate: 30,
    guideFees: 1330,
  },
  { name: "Nairobi National Park", rate: 60, kidsRate: 35, guideFees: 1890 },
  {
    name: "Oldonyo Sabuk National Park",
    rate: 30,
    kidsRate: 30,
    guideFees: 1330,
  },
  { name: "Ol Pejeta Conservancy", rate: 90, kidsRate: 90, guideFees: 2900 },
  { name: "Samburu National Reserve", rate: 70, kidsRate: 45, guideFees: 1500 },
  { name: "Solio Ranch", rate: 92, kidsRate: 92, guideFees: 1600 },
  { name: "Tsavo East National Park", rate: 52, kidsRate: 35, guideFees: 1530 },
  { name: "Tsavo West National Park", rate: 52, kidsRate: 35, guideFees: 1530 },
];

// guides data
const guides = [
  { name: "Omari Mulatya", plateNumber: "KDJ 107G" },
  { name: "Abdi Isaac", plateNumber: "KDJ 106G" },
  { name: "Amy Hussein", plateNumber: "KCU 080H" },
  { name: "Nicodemus", plateNumber: "KCU 079H" },
  { name: "Raymond", plateNumber: "KCW 671H" },
  { name: "Lazarus", plateNumber: "KAY 246Q" },
  { name: "Martin", plateNumber: "KCU 050H" },
  { name: "Zakaria", plateNumber: "KDJ 451E" },
  { name: "Charles", plateNumber: "KDM 114D" },
];

const GuideFees = () => {
  const [travellerGroup, setTravellerGroup] = useState("");
  const [numberOfAdults, setNumberOfAdults] = useState(1);
  const [numberOfKids, setNumberOfKids] = useState(0);
  const [parkDetails, setParkDetails] = useState([
    { parkName: "", numberOfDays: "" },
  ]);

  const pax = numberOfAdults + numberOfKids;

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedGuide, setSelectedGuide] = useState("");
  const [cartonsOfWater, setCartonsOfWater] = useState(2);

  const [logoBytes, setLogoBytes] = useState("");

  const dailyRate = 3500;
  const companyName = "African Grand Expeditions";

  useEffect(() => {
    const loadLogoImage = async () => {
      const response = await fetch(Logo);
      const logoBlob = await response.blob();
      const reader = new FileReader();
      reader.onloadend = () => {
        const logoBase64 = reader.result;
        setLogoBytes(logoBase64);
      };
      reader.readAsDataURL(logoBlob);
    };

    loadLogoImage();
  }, []);

  const calculateTotalAmount = () => {
    const duration = new Date(endDate) - new Date(startDate);
    const oneDay = 86400000; // One day in milliseconds, add it to offset the number of days +ve by 1

    const totalDays = (duration + oneDay) / (1000 * 3600 * 24);

    let totalAmount = dailyRate * totalDays;
    let parkFees = 0;

    parkDetails.forEach((park) => {
      const parkData = parksData.find((p) => p.name === park.parkName);
      if (parkData) {
        parkFees +=
          parkData.rate * park.numberOfDays * numberOfAdults +
          parkData.kidsRate * park.numberOfDays * numberOfKids;

        if (parkData.name === "Boat Ride and Crescent Island Walking Safari") {
          totalAmount += parkData.guideFees + parkData.crescentIsland * pax;
        } else if (parkData.name === "Masai Village") {
          totalAmount += parkData.guideFees * pax;
        } else {
          totalAmount += parkData.guideFees * park.numberOfDays;
        }
      }
    });

    totalAmount += cartonsOfWater * 400;

    return { parkFees, totalAmount }; // Return an object containing both parkFees and totalAmount
  };

  const startDateFormatted = new Date(startDate).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
  const endDateFormatted = new Date(endDate).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });

  const generatePDF = async () => {
    const today = new Date().toLocaleDateString("en-GB");

    const totalDays =
      (new Date(endDate) - new Date(startDate) + 86400000) / (1000 * 3600 * 24);

    const calculatedAmount = calculateTotalAmount();

    const invoiceData = {
      today,
      companyName,
      travellerGroup,
      numberOfAdults,
      numberOfKids,
      pax,
      startDate,
      endDate,
      totalDays,
      startDateFormatted,
      endDateFormatted,
      selectedGuide,
      parkDetails,
      parkFees: calculatedAmount.parkFees,
      totalAmount: calculatedAmount.totalAmount,
    };

    const Invoice = () => (
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.header}>
            <Image src={logoBytes} style={styles.logo} />

            <Text style={styles.title}>
              {invoiceData.numberOfKids > 0
                ? `${invoiceData.travellerGroup} - ${
                    invoiceData.numberOfAdults
                  } Adults, ${invoiceData.numberOfKids} ${
                    invoiceData.numberOfKids > 1 ? "Children" : "Child"
                  }`
                : `${invoiceData.travellerGroup} ${invoiceData.numberOfAdults}pax`}
            </Text>

            <Text style={styles.invoiceInfo}>
              Guide: {invoiceData.selectedGuide}
            </Text>
            <Text
              style={[styles.invoiceInfo, { marginTop: 4, marginBottom: 4 }]}
            >
              Issued on {invoiceData.today}
            </Text>
          </View>

          <Text
            style={{
              fontWeight: "bold",
              marginLeft: "5pt",
              fontSize: "16pt",
            }}
          >
            PARK FEES
          </Text>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <Text
                style={[styles.bigcolumnHeader, { flex: 3, color: "white" }]}
              >
                Park
              </Text>
              <Text
                style={[styles.columnHeader, { flex: 1, textAlign: "center" }]}
              >
                Pax
              </Text>
              <Text
                style={[styles.columnHeader, { flex: 1, textAlign: "center" }]}
              >
                Fee
              </Text>
              <Text
                style={[styles.columnHeader, { flex: 1, textAlign: "center" }]}
              >
                Total
              </Text>
            </View>

            {invoiceData.parkDetails.map((park, index) => (
              <View
                style={[
                  styles.tableRow,
                  index % 2 !== 0 && styles.oddRow, // Apply oddRow style to odd rows
                ]}
                key={index}
              >
                <Text style={{ flex: 3 }}>
                  Park Fees: {park.parkName} - {park.numberOfDays} days
                </Text>
                <Text style={{ flex: 1, textAlign: "center" }}>
                  {invoiceData.numberOfKids > 0 &&
                  parksData.find((p) => p.name === park.parkName)?.rate !==
                    parksData.find((p) => p.name === park.parkName)?.kidsRate
                    ? `${invoiceData.numberOfAdults}, ${invoiceData.numberOfKids}`
                    : invoiceData.numberOfAdults +
                      invoiceData.numberOfKids}{" "}
                </Text>
                <Text style={{ flex: 1, textAlign: "center" }}>
                  {invoiceData.numberOfKids > 0 &&
                  parksData.find((p) => p.name === park.parkName)?.rate !==
                    parksData.find((p) => p.name === park.parkName)
                      ?.kidsRate ? (
                    <Text>
                      <Text>
                        ${parksData.find((p) => p.name === park.parkName)?.rate}
                      </Text>
                      ,
                      <Text>
                        {" "}
                        $
                        {
                          parksData.find((p) => p.name === park.parkName)
                            ?.kidsRate
                        }
                      </Text>
                    </Text>
                  ) : (
                    <Text>
                      ${parksData.find((p) => p.name === park.parkName)?.rate}
                    </Text>
                  )}
                </Text>
                <Text style={{ flex: 1, textAlign: "center" }}>
                  {parksData.find((p) => p.name === park.parkName)?.rate *
                    park.numberOfDays *
                    invoiceData.numberOfAdults +
                    parksData.find((p) => p.name === park.parkName)?.kidsRate *
                      park.numberOfDays *
                      invoiceData.numberOfKids}
                </Text>
              </View>
            ))}

            <View
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                flexDirection: "row",

                marginTop: "20pt",
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  marginRight: "5pt",
                  fontSize: "20pt",
                }}
              >
                Total:
              </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  textAlign: "center",
                  fontSize: "20pt",
                  marginRight: "20pt",
                }}
              >
                ${" "}
                {invoiceData.parkFees
                  ? invoiceData.parkFees.toLocaleString()
                  : ""}
              </Text>
            </View>
          </View>

          {/* ---------------------------------------------- */}

          <Text
            style={{
              fontWeight: "bold",
              marginLeft: "5pt",
              fontSize: "16pt",
            }}
          >
            GUIDE FEES
          </Text>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <Text
                style={[styles.bigcolumnHeader, { flex: 3, color: "white" }]}
              >
                Trip Details
              </Text>
              <Text
                style={[styles.columnHeader, { flex: 1, textAlign: "center" }]}
              >
                ---
              </Text>
              <Text
                style={[styles.columnHeader, { flex: 1, textAlign: "center" }]}
              >
                Fee
              </Text>
              <Text
                style={[styles.columnHeader, { flex: 1, textAlign: "center" }]}
              >
                Total
              </Text>
            </View>

            <View style={[styles.tableRow, styles.oddRow]}>
              <Text style={{ flex: 3 }}>
                Allowance: {invoiceData.startDateFormatted} -{" "}
                {invoiceData.endDateFormatted}
              </Text>
              <Text style={{ flex: 1, textAlign: "center" }}>
                {invoiceData.totalDays} days
              </Text>
              <Text style={{ flex: 1, textAlign: "center" }}>{dailyRate}</Text>
              <Text style={{ flex: 1, textAlign: "center" }}>
                {dailyRate * invoiceData.totalDays}
              </Text>
            </View>

            {invoiceData.parkDetails.map((park, index) => (
              <View
                style={[
                  styles.tableRow,
                  index % 2 !== 0 && styles.oddRow, // Apply oddRow style to odd rows
                ]}
                key={index}
              >
                <Text style={{ flex: 3 }}>Guide Fees: {park.parkName}</Text>
                <Text style={{ flex: 1, textAlign: "center" }}>
                  {park.parkName ===
                    "Boat Ride and Crescent Island Walking Safari" ||
                  park.parkName === "Masai Village"
                    ? `${invoiceData.pax} pax`
                    : `${park.numberOfDays} days`}
                </Text>

                <Text style={{ flex: 1, textAlign: "center" }}>
                  {park.parkName ===
                  "Boat Ride and Crescent Island Walking Safari"
                    ? `${
                        parksData.find((p) => p.name === park.parkName)
                          ?.guideFees
                      }, ${
                        parksData.find((p) => p.name === park.parkName)
                          ?.crescentIsland
                      }`
                    : parksData.find((p) => p.name === park.parkName)
                        ?.guideFees}
                </Text>

                <Text style={{ flex: 1, textAlign: "center" }}>
                  {park.parkName ===
                  "Boat Ride and Crescent Island Walking Safari"
                    ? parksData.find((p) => p.name === park.parkName)
                        ?.guideFees +
                      invoiceData.pax *
                        parksData.find((p) => p.name === park.parkName)
                          ?.crescentIsland
                    : park.parkName === "Masai Village"
                    ? invoiceData.pax *
                      parksData.find((p) => p.name === park.parkName)?.guideFees
                    : park.numberOfDays *
                      parksData.find((p) => p.name === park.parkName)
                        ?.guideFees}
                </Text>
              </View>
            ))}

            {/* Add the cartons of water row */}
            <View
              style={[
                styles.tableRow,
                invoiceData.parkDetails.length % 2 !== 0 && styles.oddRow,
              ]}
            >
              <Text style={{ flex: 3 }}>Cartons of Water</Text>
              <Text style={{ flex: 1, textAlign: "center" }}>
                {cartonsOfWater}
              </Text>
              <Text style={{ flex: 1, textAlign: "center" }}>400</Text>
              <Text style={{ flex: 1, textAlign: "center" }}>
                {cartonsOfWater * 400}
              </Text>
            </View>

            <View
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                flexDirection: "row",

                marginTop: "20pt",
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  marginRight: "5pt",
                  fontSize: "20pt",
                }}
              >
                Total:
              </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  textAlign: "center",
                  fontSize: "20pt",
                  marginRight: "20pt",
                }}
              >
                Ksh{" "}
                {invoiceData.totalAmount
                  ? invoiceData.totalAmount.toLocaleString()
                  : ""}
              </Text>
            </View>
          </View>

          <View style={styles.footer}>
            <View
              style={{ ...styles.footerColumn, borderRight: "1px solid grey" }}
            >
              <Text>Kogo Star Plaza</Text>
              <Text>PO BOX 18112-00100</Text>
            </View>
            <View
              style={{ ...styles.footerColumn, borderRight: "1px solid grey" }}
            >
              <Text>+254 742 207 599</Text>
              <Text>safaris@africangrandexpeditions.com</Text>
            </View>
            <View style={styles.footerColumn}>
              <Image src={logoBytes} style={styles.footerLogo} />
            </View>
          </View>
        </Page>
      </Document>
    );

    const pdfBlob = await pdf(<Invoice />).toBlob();
    saveAs(pdfBlob, `${travellerGroup} Guide Fees.pdf`);
  };

  const generateInvoice = () => {
    // generate the invoice pdf file
    generatePDF();

    //   // save the data to db
    //   // createInvoice(invoiceData)
    //   //   .then((invoiceId) => {
    //   //     console.log("Invoice created:", invoiceId);
    //   //     // Do something after the invoice is created
    //   //   })
    //   //   .catch((error) => {
    //   //     console.error("Error creating invoice:", error);
    //   //     // Handle the error appropriately
    //   //   });
  };

  const handleAddPark = () => {
    setParkDetails([...parkDetails, { parkName: "", numberOfDays: "" }]);
  };

  const handleRemovePark = (index) => {
    const updatedParkDetails = [...parkDetails];
    updatedParkDetails.splice(index, 1);
    setParkDetails(updatedParkDetails);
  };

  const handleParkNameChange = (index, e) => {
    const updatedParkDetails = [...parkDetails];
    updatedParkDetails[index].parkName = e.target.value;
    setParkDetails(updatedParkDetails);
  };

  const handleNumberOfDaysChange = (index, e) => {
    const updatedParkDetails = [...parkDetails];
    updatedParkDetails[index].numberOfDays = e.target.value;
    setParkDetails(updatedParkDetails);
  };

  const isFormFilled =
    travellerGroup !== "" &&
    numberOfAdults > 0 &&
    numberOfKids >= 0 &&
    startDate !== "" &&
    endDate !== "" &&
    parkDetails.every(
      (park) => park.parkName !== "" && park.numberOfDays !== ""
    );

  return (
    <div className="flex flex-col items-center">
      <img src={Logo} alt="Logo" className="w-20 h-20 mb-3 mt-4" />
      <h1 className="text-2xl font-bold mb-4">Guide Fees</h1>

      <form className="w-full max-w-md mx-auto">
        <div className="mb-4 lg:col-span-1">
          <label htmlFor="travellerGroup" className="block font-bold mb-1">
            Name of Group:
          </label>
          <input
            id="travellerGroup"
            type="text"
            value={travellerGroup}
            onChange={(e) => setTravellerGroup(e.target.value)}
            className="w-full border border-gray-300 rounded py-1 px-2"
          />
        </div>
        <div className="lg:flex grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="mb-4 lg:col-span-1">
            <label htmlFor="numberOfAdults" className="block font-bold mb-1">
              Adults:
            </label>
            <input
              id="numberOfAdults"
              type="number"
              min="1"
              value={numberOfAdults}
              onChange={(e) => setNumberOfAdults(Number(e.target.value))}
              className="w-full border border-gray-300 rounded py-1 px-2"
            />
          </div>

          <div className="mb-4 lg:col-span-1">
            <label htmlFor="numberOfKids" className="block font-bold mb-1">
              Kids:
            </label>
            <input
              id="numberOfKids"
              type="number"
              min="1"
              value={numberOfKids}
              onChange={(e) => setNumberOfKids(Number(e.target.value))}
              className="w-full border border-gray-300 rounded py-1 px-2"
            />
          </div>

          <div className="mb-4 lg:col-span-1">
            <label htmlFor="cartonsOfWater" className="block font-bold mb-1">
              Water:
            </label>
            <input
              id="cartonsOfWater"
              type="number"
              min="1"
              value={cartonsOfWater}
              onChange={(e) => setCartonsOfWater(Number(e.target.value))}
              className="w-full border border-gray-300 rounded py-1 px-2"
            />
          </div>
        </div>

        <div className="lg:flex grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="mb-4 lg:col-span-1">
            <label htmlFor="startDate" className="block font-bold mb-1">
              Start Date:
            </label>
            <input
              id="startDate"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full border border-gray-300 rounded py-1 px-2"
            />
          </div>

          <div className="mb-4 lg:col-span-1">
            <label htmlFor="endDate" className="block font-bold mb-1">
              End Date:
            </label>
            <input
              id="endDate"
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full border border-gray-300 rounded py-1 px-2"
            />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="guide" className="block font-bold mb-1">
            Guide:
          </label>
          <select
            id="guide"
            value={selectedGuide}
            onChange={(e) => setSelectedGuide(e.target.value)}
            className="w-full border border-gray-300 rounded py-1 px-2"
          >
            <option value="">Select a guide</option>
            {guides.map((guide) => (
              <option key={guide.name} value={guide.name}>
                {guide.name} - {guide.plateNumber}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block font-bold mb-1">Park Details:</label>
          {parkDetails.map((park, index) => (
            <div className="flex mb-2" key={index}>
              <select
                value={park.parkName}
                onChange={(e) => handleParkNameChange(index, e)}
                className="border border-gray-300 rounded-l py-1 px-2"
              >
                <option value="">Select a park</option>
                {parksData.map((park) => (
                  <option key={park.name} value={park.name}>
                    {park.name}
                  </option>
                ))}
              </select>
              <input
                type="number"
                min="1"
                value={park.numberOfDays}
                onChange={(e) => handleNumberOfDaysChange(index, e)}
                placeholder="Number of Days"
                className="border border-gray-300 rounded-r py-1 px-2"
              />
              {index === parkDetails.length - 1 && (
                <button
                  type="button"
                  onClick={handleAddPark}
                  className="bg-blue-600 text-white py-1 px-2 ml-2 rounded"
                >
                  Add
                </button>
              )}
              {index !== 0 && (
                <button
                  type="button"
                  onClick={() => handleRemovePark(index)}
                  className="bg-red-600 text-white py-1 px-2 ml-2 rounded"
                >
                  Remove
                </button>
              )}
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={generateInvoice}
          className={`py-2 px-4 rounded text-white ${
            isFormFilled ? "bg-green-500" : "bg-gray-400"
          }`}
          disabled={!isFormFilled} // Disable the button when forms are not filled
        >
          Generate Invoice
        </button>
      </form>
    </div>
  );
};

// pdf styles
const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    padding: "15pt",
    marginTop: "5pt", // Adjust value
    marginBottom: "5pt", // Adjust value
    marginLeft: "10pt", // Adjust value
    marginRight: "10pt", // Adjust value
    fontSize: 12,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: "15pt",
    marginBottom: "15pt",
  },
  invoiceInfo: {
    marginBottom: 8,
  },
  billTo: {
    marginBottom: 20,
    flexDirection: "row",
  },
  travellerInfo: {
    marginBottom: 20,
  },
  travellerGroup: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  table: {
    display: "table",
    width: "100%",
    marginBottom: 20,
  },
  tableRow: {
    flexDirection: "row",
    padding: 8,
    fontWeight: "semi-bold",
    color: "grey",
  },
  oddRow: {
    backgroundColor: "#DFDFF4",
  },
  bigcolumnHeader: {
    width: "60%", // Updated width for "Trip Details" column
    fontWeight: "bold",
    color: "black",
  },
  columnHeader: {
    width: "20%",
    fontWeight: "bold",
    color: "black",
  },
  totalRow: {
    flexDirection: "row",
    marginTop: 8,
  },
  totalLabel: {
    width: "70%", // Updated width for "AMOUNT DUE" label
    fontWeight: "bold",
    textAlign: "right",
  },
  footer: {
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    width: "100%",
    position: "absolute",
    bottom: "15pt",
    left: "10pt",
    right: "10pt",
  },
  footerColumn: {
    color: "grey",
    paddingRight: "17pt",
    paddingLeft: "21pt",
    flexDirection: "column",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  footerLogo: {
    width: 50,
    height: 50,
  },
});

export default GuideFees;
