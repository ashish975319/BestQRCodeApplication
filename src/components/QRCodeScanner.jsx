import { BrowserMultiFormatReader } from "@zxing/library";
import React, { useEffect, useRef } from "react";

const QRCodeScanner = ({ onScan }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const codeReader = new BrowserMultiFormatReader();

    if (videoRef.current) {
      codeReader.decodeFromVideoDevice(
        null,
        videoRef.current,
        (result, error) => {
          if (result) {
            onScan(result.text);
          }
          if (error && !(error instanceof Error)) {
            console.error(error);
          }
        }
      );
    }

    return () => {
      codeReader.reset();
    };
  }, [onScan]);

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">QR Code Scanner</h1>
      <video ref={videoRef} style={{ width: "100%" }} />
    </div>
  );
};

export default QRCodeScanner;
