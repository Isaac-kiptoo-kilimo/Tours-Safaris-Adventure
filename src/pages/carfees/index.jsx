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

const CarFees = () => {
  const [travellerGroup, setTravellerGroup] = useState("");
  const [agentName, setAgentName] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [dailyRate, setDailyRate] = useState(210); // default daily rate of $210, ediitable
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedGuide, setSelectedGuide] = useState("");

  const [logoBytes, setLogoBytes] = useState("");

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

    return totalAmount.toFixed(2);
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

    const invoiceData = {
      invoiceNumber,
      today,
      agentName,
      companyName,
      travellerGroup,
      dailyRate,
      startDate,
      endDate,
      totalDays,
      startDateFormatted,
      endDateFormatted,
      selectedGuide,
      totalAmount: calculateTotalAmount(),
    };

    const Invoice = () => (
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.header}>
            <Image src={logoBytes} style={styles.logo} />
            <Text style={styles.title}>INVOICE</Text>
            <Text
              style={[styles.invoiceInfo, { marginTop: 4, marginBottom: 4 }]}
            >
              ISSUED: {invoiceData.today}
            </Text>
            <Text style={styles.invoiceInfo}>DUE ON RECEIPT</Text>
            <Text style={[styles.invoiceInfo, { fontWeight: "bold" }]}>
              #{invoiceData.invoiceNumber}
            </Text>
          </View>

          <View style={styles.billTo}>
            <View style={{ flex: 1 }}>
              <Text style={{ fontWeight: "bold" }}>BILL TO:</Text>
              <Text style={{ color: "grey", marginTop: "5pt" }}>
                {invoiceData.agentName}
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontWeight: "bold" }}>PAYABLE TO:</Text>
              <Text style={{ color: "grey", marginTop: "5pt" }}>
                {invoiceData.companyName}
              </Text>
            </View>
          </View>

          <View style={styles.travellerInfo}>
            <Text style={[styles.travellerGroup, { fontSize: 12 }]}>
              {invoiceData.travellerGroup}
            </Text>
          </View>

          <View style={styles.table}>
            <View style={styles.tableRow}>
              <Text style={[styles.bigcolumnHeader, { flex: 3 }]}>
                Trip Details
              </Text>
              <Text
                style={[styles.columnHeader, { flex: 1, textAlign: "center" }]}
              >
                Quantity
              </Text>
              <Text
                style={[styles.columnHeader, { flex: 1, textAlign: "center" }]}
              >
                Amount
              </Text>
              <Text
                style={[styles.columnHeader, { flex: 1, textAlign: "center" }]}
              >
                Total
              </Text>
            </View>

            <View style={[styles.tableRow, styles.oddRow]}>
              <Text style={{ flex: 3 }}>
                {invoiceData.startDateFormatted} -{" "}
                {invoiceData.endDateFormatted} - Guide:{" "}
                {invoiceData.selectedGuide}
              </Text>
              <Text style={{ flex: 1, textAlign: "center" }}>
                {invoiceData.totalDays}
              </Text>
              <Text style={{ flex: 1, textAlign: "center" }}>${dailyRate}</Text>
              <Text style={{ flex: 1, textAlign: "center" }}>
                {dailyRate * invoiceData.totalDays}
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
                AMOUNT DUE:
              </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  textAlign: "center",
                  fontSize: "20pt",
                  marginRight: "20pt",
                }}
              >
                ${invoiceData.totalAmount}
              </Text>
            </View>
          </View>

          <View style={{ marginTop: "20pt" }}>
            <Text
              style={{
                fontWeight: "bold",
                letterSpacing: "1pt",
                marginHorizontal: "5pt",
              }}
            >
              USD ACCOUNT DETAILS:
            </Text>
            <Text> - African Grand Expeditions</Text>
            <Text> - Equity Bank, Karen Branch</Text>
            <Text> - Nairobi, Kenya</Text>
            <Text> - USD ($) Account Number: 0840261758840</Text>
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
    saveAs(pdfBlob, `${travellerGroup} Invoice.pdf`);
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

  const handleNumberOfDaysChange = (index, e) => {
    const updatedParkDetails = [...parkDetails];
    updatedParkDetails[index].numberOfDays = e.target.value;
    setParkDetails(updatedParkDetails);
  };

  const isFormFilled =
    travellerGroup !== "" &&
    agentName !== "" &&
    startDate !== "" &&
    endDate !== "";

  return (
    <div className="flex flex-col items-center">
      <img src={Logo} alt="Logo" className="w-20 h-20 mb-3 mt-4" />
      <h1 className="text-2xl font-bold mb-4">Car Hire Fees</h1>

      <form className="w-full max-w-md mx-auto">
        <div className="mb-4 lg:col-span-2">
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
          <label htmlFor="travellerGroup" className="block font-bold mt-4">
            Agent Name:
          </label>
          <input
            id="agentName"
            type="text"
            value={agentName}
            onChange={(e) => setAgentName(e.target.value)}
            className="w-full border border-gray-300 rounded py-1 px-2"
          />
        </div>
        <div className="lg:flex grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="mb-4 lg:col-span-1">
            <label htmlFor="invoiceNumber" className="block font-bold mb-1">
              Invoice Number:
            </label>
            <input
              id="invoiceNumber"
              type="text"
              value={invoiceNumber}
              onChange={(e) => setInvoiceNumber(e.target.value)}
              className="w-full border border-gray-300 rounded py-1 px-2"
            />
          </div>

          <div className="mb-4 lg:col-span-1">
            <label htmlFor="dailyRate" className="block font-bold mb-1">
              Daily Rate:
            </label>
            <input
              id="dailyRate"
              type="number"
              min="210"
              value={dailyRate}
              onChange={(e) => setDailyRate(Number(e.target.value))}
              className="w-full border border-gray-300 rounded py-1 px-2"
            />
          </div>
        </div>

        <div className="lg:flex grid-cols-1 lg:grid-cols-2 gap-4">
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
    fontSize: 35,
    fontWeight: "bold",
    marginTop: "15pt",
    marginBottom: "15pt",
    letterSpacing: "5pt",
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
    letterSpacing: "2pt",
  },
  columnHeader: {
    width: "20%",
    fontWeight: "bold",
    color: "black",
    letterSpacing: "5pt",
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

export default CarFees;
