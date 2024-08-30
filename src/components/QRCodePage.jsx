import React, { useState, useEffect, useRef } from "react";
import QRCode from "qrcode.react";
import { FaDownload } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import QRCodeScanner from "./QRCodeScanner";
import { saveAs } from "file-saver";
import CryptoJS from "crypto-js";
import Footer from "./Footer";

const QRCodePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const qrCodeUrl = state?.qrCodeUrl || "";
  const color = state?.color || "#000000";

  const [isDataScanned, setIsDataScanned] = useState(false);
  const [data, setData] = useState({});
  const [scanning, setScanning] = useState(false);

  const qrCodeRef = useRef(null); // Ref to the QR code element
  console.log("qrCodeUrl :: " + qrCodeUrl);

  useEffect(() => {
    if (qrCodeUrl) {
      fetchDataFromUrl(qrCodeUrl);
    }
  }, [qrCodeUrl]);

  useEffect(() => {
    // Debugging: Check if SVG is rendered
    const checkSvgElement = () => {
      if (qrCodeRef.current) {
        const svgElement = qrCodeRef.current.querySelector("svg");
        console.log("Inside checkSvgElement svgElement :: " + svgElement);

        if (svgElement) {
          console.log("SVG Element found:", svgElement);
        } else {
          console.error("SVG element not found!!! else.");
        }
      } else {
        console.error("QR code ref is not set.");
      }
    };

    // Check for SVG element after a delay
    const timer = setTimeout(() => {
      checkSvgElement();
    }, 500); // Increased delay to ensure SVG is rendered

    return () => clearTimeout(timer);
  }, [qrCodeUrl, data]); // Trigger when qrCodeUrl or data changes

  const fetchDataFromUrl = async (url) => {
    try {
      const params = new URLSearchParams(new URL(url).search);
      const data = {};
      params.forEach((value, key) => {
        data[key] = value;
      });
      setData(data);
      setIsDataScanned(true);
    } catch (error) {
      console.error("Error fetching data from URL:", error);
    }
  };

  const downloadQRCodeAsSVG = () => {
    if (qrCodeRef.current) {
      setTimeout(() => {
        const svgElement = qrCodeRef.current.querySelector("svg");
        console.log("svgElement :: " + svgElement);

        if (svgElement) {
          try {
            // Serialize SVG to a string
            const svgData = new XMLSerializer().serializeToString(svgElement);
            const svgBlob = new Blob([svgData], {
              type: "image/svg+xml;charset=utf-8",
            });
            saveAs(svgBlob, "qrcode.svg");
          } catch (error) {
            console.error("Error serializing SVG:", error);
          }
        } else {
          console.error("SVG element not found.");
        }
      }, 500); // Increased delay to ensure SVG is rendered
    } else {
      console.error("QR code ref is not set.");
    }
  };

  const handleStartScanning = () => {
    setScanning(true);
    navigate("/zxing"); // Redirect to /zxing route
  };

  const handleScan = (result) => {
    if (result) {
      setScanning(false);
      const params = new URLSearchParams(result);
      const scannedData = {};
      params.forEach((value, key) => {
        scannedData[key] = value;
      });
      setData(scannedData);
      setIsDataScanned(true);
    }
  };

  const handleError = (error) => {
    console.error("QR code scanning error:", error);
    setScanning(false);
  };

  const downloadQRCode = () => {
    const svg = qrCodeRef.current.querySelector("svg");
    const svgData = new XMLSerializer().serializeToString(svg);
    const svgBlob = new Blob([svgData], {
      type: "image/svg+xml;charset=utf-8",
    });
    const svgUrl = URL.createObjectURL(svgBlob);
    const downloadLink = document.createElement("a");
    downloadLink.href = svgUrl;
    downloadLink.download = "qrcode.svg";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  // useEffect(() => {
  //   if (qrCodeUrl) {
  //     downloadQRCode();
  //   }
  // }, [qrCodeUrl]);

  if (!qrCodeUrl) return <div>Invalid QR Code</div>;

  // Decrypt the data (for demonstration purposes)
  // Generate a random key (not recommended for production)
  // const secretKey = CryptoJS.lib.WordArray.random(16).toString(
  //   CryptoJS.enc.Hex
  // );

  // console.log("Secret Key:", secretKey);
  // //const secretKey = "your-secret-key"; // Use the same key used for encryption
  // const decryptedData = CryptoJS.AES.decrypt(
  //   new URLSearchParams(qrCodeUrl.split("?")[1]).get("data"),
  //   secretKey
  // ).toString(CryptoJS.enc.Utf8);

  //const data = JSON.parse(decryptedData);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="p-8 max-w-3xl mx-auto bg-gray-50 rounded-lg shadow-xl">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
          Your QR Code
        </h1>
        <div className="flex justify-center mb-8 mt-8">
          <div
            className="relative flex items-center justify-center border-4 border-gray-300 rounded-lg p-6 bg-white shadow-lg"
            ref={qrCodeRef}
          >
            <QRCode
              value={qrCodeUrl}
              size={200} // Increase size for better resolution
              bgColor="#FFFFFF"
              fgColor={color}
              level="H"
              includeMargin={true}
              renderAs="svg"
            />
          </div>
        </div>
        <div className="flex justify-center space-x-6 mb-8">
          <button
            onClick={downloadQRCode}
            className="bg-blue-600 text-white py-3 px-6 rounded-md flex items-center hover:bg-blue-700 transition duration-300"
          >
            <FaDownload className="mr-2" /> Download QR Code
          </button>
          <button
            onClick={() => navigate("/")}
            className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Back to QR Code Generator
          </button>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl text-center font-semibold mb-4 text-gray-800">
            Scan QR Code
          </h2>
          {scanning ? (
            <QRCodeScanner onScan={handleScan} onError={handleError} />
          ) : (
            <button
              onClick={handleStartScanning}
              className="bg-green-600 text-white py-3 px-6 rounded-md hover:bg-green-700 transition duration-300"
            >
              Start Scanning
            </button>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default QRCodePage;
