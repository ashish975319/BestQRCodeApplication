import { Html5QrcodeScanner } from "html5-qrcode";
import React, { useEffect, useState, useRef } from "react";

const Html5qrcodeTest = () => {
  const [scanResult, setScanResult] = useState(null);
  const scannerRef = useRef(null); // Ref to hold the scanner instance

  useEffect(() => {
    if (!scannerRef.current) {
      // Initialize scanner
      const scanner = new Html5QrcodeScanner("reader", {
        qrbox: {
          width: 250,
          height: 250,
        },
        fps: 10,
      });

      // Store the scanner instance in the ref
      scannerRef.current = scanner;

      const success = (result) => {
        scanner.clear();
        setScanResult(result);
        // Open the scanned result in a new browser tab
        window.open(result, "_blank");
      };

      const error = (err) => {
        console.warn(err);
      };

      scanner.render(success, error);

      return () => {
        if (scannerRef.current) {
          scannerRef.current.clear();
          scannerRef.current = null;
        }
      };
    }
  }, []);

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <header className="bg-blue-600 text-white text-center p-4 shadow-md">
        <h1 className="text-2xl font-semibold">HTML5 QR Code Scanner</h1>
      </header>

      <main className="flex-1 flex flex-col justify-center items-center p-4">
        <div className="flex flex-col items-center w-full max-w-md bg-white shadow-lg rounded-lg p-6">
          <div id="reader" className="w-full h-[250px] mb-4"></div>

          {scanResult && (
            <div className="text-center">
              <p className="text-lg font-medium mb-2">Scan Result:</p>
              <a
                href={scanResult}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800"
              >
                {scanResult}
              </a>
            </div>
          )}
        </div>
      </main>

      {/* <footer className="bg-gray-800 text-white text-center p-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} QR Code Scanner. All rights
          reserved.
        </p>
      </footer> */}
    </div>
  );
};

export default Html5qrcodeTest;
