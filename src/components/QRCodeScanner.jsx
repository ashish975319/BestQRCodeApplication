// QRCodeScanner.jsx
import React, { useRef, useState, useEffect } from "react";
import { BrowserMultiFormatReader } from "@zxing/library";

const QRCodeScanner = ({ onScan, onError }) => {
  const videoRef = useRef(null);
  const [scanner, setScanner] = useState(null);

  useEffect(() => {
    const initScanner = async () => {
      try {
        const codeReader = new BrowserMultiFormatReader();
        setScanner(codeReader);

        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "environment" },
        });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.setAttribute("playsinline", true); // required for iOS
          videoRef.current.play();
        }

        codeReader.decodeFromVideoDevice(
          null,
          videoRef.current,
          (result, error) => {
            if (result) {
              onScan(result.text);
            }
            if (error) {
              onError(error);
            }
          }
        );
      } catch (error) {
        console.error("Error initializing scanner:", error);
        onError(error);
      }
    };

    initScanner();

    return () => {
      if (scanner) {
        scanner.reset();
      }
    };
  }, [onScan, onError, scanner]);

  return (
    <div>
      <video ref={videoRef} style={{ width: "100%" }}></video>
    </div>
  );
};

export default QRCodeScanner;
