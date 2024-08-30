import React, { createContext, useState } from "react";
import InputForm from "./InputForm";
import QrCode from "./QrCode";
import axios from "axios";

//create context api
export const InputContext = createContext();

const QRCodeWithTigerLibrary = () => {
  const [InputValue, setInputValue] = useState({
    ur: "",
    color: "",
  });

  const [response, setResponse] = useState("");
  const [error, setError] = useState(null);

  const [loading, setLoding] = useState(false);

  //cc82def0-65cb-11ef-9ade-a9d8bca80bcc

  // console.log(InputValue);

  const config = {
    headers: { Authorization: "Bearer cc82def0-65cb-11ef-9ade-a9d8bca80bcc" },
  };
  const bodyParameters = {
    colorDark: InputValue.color,

    qrCategory: "url",
    text: InputValue.url,
  };

  const getQrCode = async () => {
    try {
      setLoding(true);
      const res = await axios.post(
        "https://stoplight.io/mocks/qrtiger/qrtiger-api/7801905.png/",
        bodyParameters,
        config
      );
      setResponse(res.data.url);
    } catch (error) {
      setError(error);
    } finally {
      setLoding(false);
    }
  };

  const value = {
    InputValue,
    setInputValue,
    getQrCode,
    response,
    loading,
    error,
  };

  return (
    <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... h-screen pt-36 px-2">
      <div className="container mx-auto max-w-4xl bg-white rounded-md shadow">
        <div className="md:grid md:grid-cols-3">
          <InputContext.Provider value={value}>
            <InputForm />
            <QrCode />
          </InputContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default QRCodeWithTigerLibrary;
