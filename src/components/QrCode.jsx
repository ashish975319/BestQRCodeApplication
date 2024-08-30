import React, { useContext } from "react";
import QRCode from "qrcode.react";
import { InputContext } from "./QRCodeWithTigerLibrary";

const QrCode = () => {
  const { response, loading, error } = useContext(InputContext);
  console.log(response);

  const downloadImage = () => {
    saveAs(response, "qrcode.png");
  };

  if (loading) {
    return (
      <div className="animate-pulse flex flex-col items-center justify-center px-10 gap-3">
        <div className="h-32 w-full bg-gray-300"></div>
        <div className="h-8 w-full bg-gray-300"></div>
      </div>
    );
  }

  if (error) {
    return <div>Sorry Something went wrong 🧐</div>;
  }

  const qrValue = response; // Replace with the URL or text you want to encode

  return (
    <div className="bg-gray-100 rounded-r-md flex flex-col items-center justify-center p-4 ">
      {response ? (
        <div>
          <QRCode
            value={qrValue}
            size={150} // Adjust the size as needed
            className="w-48"
          />
          <button
            onClick={downloadImage}
            className="bg-blue-400 text-white mt-2 px-4 py-1 w-full"
          >
            Download
          </button>
        </div>
      ) : (
        <div className="text-orange-800 py-1 px-1  bg-gradient-to-r  from-indigo-400 rounded-sm ...">
          Your QR Code will showing here...
        </div>
      )}
    </div>
  );
};

export default QrCode;
