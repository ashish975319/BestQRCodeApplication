// import QRCode from "qrcode.react";
// import React from "react";
// import { FaDownload } from "react-icons/fa";
// import { useLocation, useNavigate } from "react-router-dom";
// import VisitingCard from "./VisitingCard"; // Import the VisitingCard component

// const QRCodePage = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { state } = location;
//   const data = state?.data || {}; // Use data from state or default to empty object
//   const color = state?.color || "#000000"; // Use color from state or default to black

//   // Convert data object to string for QR code
//   const dataString = JSON.stringify(data);

//   // Function to download QR code as an image
//   const downloadQRCode = () => {
//     const canvas = document.getElementById("qrcode-canvas");
//     const imgURL = canvas.toDataURL("image/png");
//     const link = document.createElement("a");
//     link.href = imgURL;
//     link.download = "qrcode.png";
//     link.click();
//   };

//   return (
//     <div className="p-8 max-w-3xl mx-auto bg-gray-50 rounded-lg shadow-xl">
//       <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
//         Your QR Code
//       </h1>

//       {/* QR Code Container */}
//       <div className="flex justify-center mb-8 mt-8">
//         <div className="relative flex items-center justify-center border-4 border-gray-300 rounded-lg p-12 bg-white shadow-lg">
//           <QRCode
//             id="qrcode-canvas"
//             value={dataString}
//             size={512} // Increased size for better readability
//             bgColor="#FFFFFF"
//             fgColor={color}
//             level="H"
//           />
//         </div>
//       </div>

//       <div className="flex justify-center space-x-6 mb-8">
//         <button
//           onClick={downloadQRCode}
//           className="bg-blue-600 text-white py-3 px-6 rounded-md flex items-center hover:bg-blue-700 transition duration-300"
//         >
//           <FaDownload className="mr-2" /> Download QR Code
//         </button>
//         <button
//           onClick={() => navigate("/")}
//           className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition duration-300"
//         >
//           Back to QR Code Generator
//         </button>
//       </div>

//       <div>
//         <h2 className="text-2xl text-center font-semibold mb-4 text-gray-800">
//           QR Code Data
//         </h2>
//         <VisitingCard data={data} /> {/* Render the VisitingCard component */}
//       </div>
//     </div>
//   );
// };

// export default QRCodePage;

import QRCode from "qrcode.react";
import React, { useState, useEffect } from "react";
import { FaDownload } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import VisitingCard from "./VisitingCard";

const QRCodePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const qrCodeUrl = state?.qrCodeUrl || "";
  const color = state?.color || "#000000";

  const [isDataScanned, setIsDataScanned] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    if (qrCodeUrl) {
      fetchDataFromUrl(qrCodeUrl);
    }
  }, [qrCodeUrl]);

  const fetchDataFromUrl = async (url) => {
    const params = new URLSearchParams(new URL(url).search);
    const data = {};
    params.forEach((value, key) => {
      data[key] = value;
    });
    setData(data);
    setIsDataScanned(true);
  };

  const downloadQRCode = () => {
    const canvas = document.getElementById("qrcode-canvas");
    if (canvas) {
      const imgURL = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = imgURL;
      link.download = "qrcode.png";
      link.click();
    }
  };

  return (
    <div className="p-8 max-w-3xl mx-auto bg-gray-50 rounded-lg shadow-xl">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        Your QR Code
      </h1>

      <div className="flex justify-center mb-8 mt-8">
        <div className="relative flex items-center justify-center border-4 border-gray-300 rounded-lg p-12 bg-white shadow-lg">
          <QRCode
            id="qrcode-canvas"
            value={qrCodeUrl}
            size={512}
            bgColor="#FFFFFF"
            fgColor={color}
            level="H"
          />
        </div>
      </div>

      <div className="flex justify-center space-x-6 mb-8">
        <button
          onClick={downloadQRCode}
          className="bg-blue-600 text-white py-3 px-6 rounded-md flex items-center hover:bg-blue-700 transition duration-300"
        >
          <FaDownload className="mr-2" /> Scan QR Code
        </button>
        <button
          onClick={() => navigate("/")}
          className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Back to QR Code Generator
        </button>
      </div>

      {isDataScanned && (
        <div>
          <h2 className="text-2xl text-center font-semibold mb-4 text-gray-800">
            QR Code Data
          </h2>
          <VisitingCard data={data} />
        </div>
      )}
    </div>
  );
};

export default QRCodePage;
