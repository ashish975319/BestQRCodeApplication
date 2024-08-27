import React from "react";
import { Route, Routes } from "react-router-dom";
import QRCodeGenerator from "./QRCodeGenerator";
import QRCodePage from "./QRCodePage";
import QRCodeScanner from "./QRCodeScanner";
import ScannedDataDisplay from "./ScannedDataDisplay";
import QRCodeForm from "./QRCodeForm";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<QRCodeGenerator />} />
      <Route path="/qrcode" element={<QRCodePage />} />
      <Route path="/scanned-data" element={<ScannedDataDisplay />} />

      {/* <Route path="/" element={<QRCodeGenerator />} />
      <Route path="/qrcode" element={<QRCodePage />} />
      <Route path="/scanned-data2" element={<ScannedDataDisplay />} />
      <Route path="/form" element={<QRCodeForm />} />
      <Route path="/scanned-data" element={<ScannedDataDisplay />} />
      <Route
        path="/scanner"
        element={<QRCodeScanner onScan={(data) => console.log(data)} />}
      /> */}
    </Routes>
  );
};

export default AppRoutes;
