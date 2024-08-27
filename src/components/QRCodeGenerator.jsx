import React, { useState } from "react";
import { ChromePicker } from "react-color";
import {
  FaBriefcase,
  FaBuilding,
  FaEnvelope,
  FaGlobe,
  FaMapMarkerAlt,
  FaMobileAlt,
  FaPhone,
  FaUser,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const QRCodeGenerator = () => {
  const [data, setData] = useState({
    name: "",
    landline: "",
    mobile: "",
    email: "",
    website: "",
    address: "",
    company: "",
    designation: "",
  });

  const [color, setColor] = useState("#000000");
  const [showPicker, setShowPicker] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleColorChange = (color) => {
    setColor(color.hex);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/qrcode", { state: { data, color } });
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">QR Code Generator</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {Object.entries({
          name: FaUser,
          landline: FaPhone,
          mobile: FaMobileAlt,
          email: FaEnvelope,
          website: FaGlobe,
          address: FaMapMarkerAlt,
          company: FaBuilding,
          designation: FaBriefcase,
        }).map(([key, Icon]) => (
          <div key={key} className="flex items-center space-x-2">
            <Icon className="text-gray-500" />
            <input
              type="text"
              name={key}
              placeholder={capitalizeFirstLetter(key)}
              className="border p-2 w-full rounded-md"
              onChange={handleChange}
            />
          </div>
        ))}
        <div className="mb-4">
          <div className="flex items-center space-x-4">
            <button
              type="button"
              onClick={() => setShowPicker(!showPicker)}
              className="bg-blue-500 text-white py-1 px-3 rounded-md"
            >
              {showPicker ? "Hide Color Picker" : "Show Color Picker"}
            </button>
            <button
              type="submit"
              className="bg-green-500 text-white py-1 px-3 rounded-md"
            >
              Generate QR Code
            </button>
          </div>
          {showPicker && (
            <ChromePicker
              color={color}
              onChangeComplete={handleColorChange}
              className="mt-2"
            />
          )}
        </div>
      </form>
    </div>
  );
};

// Capitalize the first letter of a string
const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export default QRCodeGenerator;
