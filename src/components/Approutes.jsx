import React from "react";
import { Route, Routes } from "react-router-dom";
import QRCodeGenerator from "./QRCodeGenerator";
import QRCodePage from "./QRCodePage";
import QRCodeScanner from "./QRCodeScanner";
import ScannedDataDisplay from "./ScannedDataDisplay";
import QRCodeForm from "./QRCodeForm";
import Html5qrcodeTest from "./Html5qrcodeTest";
import ZxingQrCodeScanner from "./ZxingQrCodeScanner";
import ORCodeWithTigerLibrary from "./QRCodeWithTigerLibrary";
import QRCodeWithTigerLibrary from "./QRCodeWithTigerLibrary";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<QRCodeGenerator />} />
      <Route path="/qrcode" element={<QRCodePage />} />
      <Route path="/scanned-data" element={<ScannedDataDisplay />} />
      <Route path="/scanner" element={<QRCodeScanner />} />
      <Route path="/html5qrcodescanner" element={<Html5qrcodeTest />} />
      <Route path="/zxing" element={<ZxingQrCodeScanner />} />
      <Route path="/QRCL" element={<QRCodeWithTigerLibrary />} />

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
