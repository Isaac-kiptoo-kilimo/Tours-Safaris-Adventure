import React, { useState } from "react";
import Calendar from "react-calendar";

const SafariScheduler = () => {
  const drivers = [
    {
      name: "Omari Mulatya",
      language: ["english", "german"],
      availability: [],
    },
    {
      name: "Abdi Isaac",
      language: ["english", "french", "italian", "dutch"],
      availability: [],
    },
    { name: "Amy Hussein", language: ["english", "german"], availability: [] },
    { name: "Nicodemus", language: ["english", "german"], availability: [] },
    { name: "Raymond", language: ["english"], availability: [] },
    { name: "Lazarus", language: ["english", "french"], availability: [] },
    { name: "Martin", language: ["english", "german"], availability: [] },
    { name: "Zakaria", language: ["english"], availability: [] },
    { name: "Charles", language: ["english", "french"], availability: [] },
  ];

  const [safaris, setSafaris] = useState([]);
  const [travellerName, setTravellerName] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [language, setLanguage] = useState("");
  const [rejectedSafaris, setRejectedSafaris] = useState([]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "travellerName") {
      setTravellerName(value);
    }
  };

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const safari = {
      travellerName,
      startDate,
      endDate,
      language,
    };
    setSafaris([...safaris, safari]);
    setTravellerName("");
    setStartDate(new Date());
    setEndDate(new Date());
    setLanguage("");
  };

  const allocateSafaris = () => {
    // Reset availability for all drivers
    drivers.forEach((driver) => {
      driver.availability = [];
    });

    const rejected = [];

    // Allocate safaris to drivers based on availability and language
    safaris.forEach((safari) => {
      const { startDate, endDate, language } = safari;
      const availableDrivers = drivers.filter(
        (driver) =>
          driver.language.includes(language) &&
          !driver.availability.some(
            (availability) =>
              (startDate >= availability.startDate &&
                startDate <= availability.endDate) ||
              (endDate >= availability.startDate &&
                endDate <= availability.endDate)
          )
      );

      if (availableDrivers.length > 0) {
        // Sort available drivers based on the number of overlapping safaris
        availableDrivers.sort(
          (a, b) => a.availability.length - b.availability.length
        );

        const driver = availableDrivers[0];
        driver.availability.push({ startDate, endDate, safari });
      } else {
        rejected.push({
          ...safari,
          reason: `No ${language} speaking drivers available on these dates`,
        });
      }
    });

    setRejectedSafaris(rejected);
  };

  return (
    <div className="flex">
      <div className="mr-8">
        <h3 className="text-xl font-bold mb-4">Add Safari</h3>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label htmlFor="travellerName" className="block font-bold mb-1">
              Traveller Name:
            </label>
            <input
              id="travellerName"
              type="text"
              value={travellerName}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded py-1 px-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="startDate" className="block font-bold mb-1">
              Start Date:
            </label>
            <input
              id="startDate"
              type="date"
              value={startDate.toISOString().split("T")[0]}
              onChange={(e) => handleStartDateChange(new Date(e.target.value))}
              className="w-full border border-gray-300 rounded py-1 px-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="endDate" className="block font-bold mb-1">
              End Date:
            </label>
            <input
              id="endDate"
              type="date"
              value={endDate.toISOString().split("T")[0]}
              onChange={(e) => handleEndDateChange(new Date(e.target.value))}
              className="w-full border border-gray-300 rounded py-1 px-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="language" className="block font-bold mb-1">
              Language:
            </label>
            <select
              id="language"
              value={language}
              onChange={handleLanguageChange}
              className="w-full border border-gray-300 rounded py-1 px-2"
            >
              <option value="">Select a language</option>
              {Array.from(
                new Set(drivers.flatMap((driver) => driver.language))
              ).map((lang) => (
                <option key={lang} value={lang}>
                  {lang}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Add Safari
          </button>
        </form>
      </div>
      <div className="ml-8">
        <h3 className="text-xl font-bold mb-4">Added Safaris</h3>
        {safaris.length > 0 ? (
          <table className="w-full border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 py-2 px-4">
                  Traveller Name
                </th>
                <th className="border border-gray-300 py-2 px-4">Start Date</th>
                <th className="border border-gray-300 py-2 px-4">End Date</th>
                <th className="border border-gray-300 py-2 px-4">Language</th>
              </tr>
            </thead>
            <tbody>
              {safaris.map((safari, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 py-2 px-4">
                    {safari.travellerName}
                  </td>
                  <td className="border border-gray-300 py-2 px-4">
                    {safari.startDate.toDateString()}
                  </td>
                  <td className="border border-gray-300 py-2 px-4">
                    {safari.endDate.toDateString()}
                  </td>
                  <td className="border border-gray-300 py-2 px-4">
                    {safari.language}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No safaris added yet.</p>
        )}
        {safaris.length > 0 && (
          <button
            onClick={allocateSafaris}
            className="bg-blue-500 text-white py-2 px-4 mt-4 rounded"
          >
            Allocate Safaris
          </button>
        )}
      </div>
      <div className="ml-8">
        <h3 className="text-xl font-bold mb-4">Allocated Safaris</h3>
        {drivers.length > 0 ? (
          <table className="w-full border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 py-2 px-4">
                  Driver Name
                </th>
                <th className="border border-gray-300 py-2 px-4">
                  Safari Details
                </th>
              </tr>
            </thead>
            <tbody>
              {drivers.map((driver, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 py-2 px-4">
                    {driver.name}
                  </td>
                  <td className="border border-gray-300 py-2 px-4">
                    {driver.availability.length > 0 ? (
                      <ul>
                        {driver.availability.map((availability, index) => (
                          <li key={index}>
                            {`${availability.startDate.toDateString()} - ${availability.endDate.toDateString()}`}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      "No safaris allocated"
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No drivers available.</p>
        )}
      </div>
    </div>
  );
};

export default SafariScheduler;
