import React from "react";
import {
  FaUser,
  FaPhone,
  FaMobileAlt,
  FaEnvelope,
  FaGlobe,
  FaMapMarkerAlt,
  FaBuilding,
  FaBriefcase,
} from "react-icons/fa";

const VisitingCard = ({ data }) => {
  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-lg border border-gray-200">
      <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
        Visiting Card
      </h2>
      <div className="space-y-4">
        {data.name && (
          <div className="flex items-center space-x-2">
            <FaUser className="text-gray-600" />
            <span className="text-gray-800">{data.name}</span>
          </div>
        )}
        {data.designation && (
          <div className="flex items-center space-x-2">
            <FaBriefcase className="text-gray-600" />
            <span className="text-gray-800">{data.designation}</span>
          </div>
        )}
        {data.company && (
          <div className="flex items-center space-x-2">
            <FaBuilding className="text-gray-600" />
            <span className="text-gray-800">{data.company}</span>
          </div>
        )}
        {data.email && (
          <div className="flex items-center space-x-2">
            <FaEnvelope className="text-gray-600" />
            <a
              href={`mailto:${data.email}`}
              className="text-blue-600 hover:underline"
            >
              {data.email}
            </a>
          </div>
        )}
        {data.landline && (
          <div className="flex items-center space-x-2">
            <FaPhone className="text-gray-600" />
            <a
              href={`tel:${data.landline}`}
              className="text-blue-600 hover:underline"
            >
              {data.landline}
            </a>
          </div>
        )}
        {data.mobile && (
          <div className="flex items-center space-x-2">
            <FaMobileAlt className="text-gray-600" />
            <a
              href={`tel:${data.mobile}`}
              className="text-blue-600 hover:underline"
            >
              {data.mobile}
            </a>
          </div>
        )}
        {data.website && (
          <div className="flex items-center space-x-2">
            <FaGlobe className="text-gray-600" />
            <a href={data.website} className="text-blue-600 hover:underline">
              {data.website}
            </a>
          </div>
        )}
        {data.address && (
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt className="text-gray-600" />
            <span className="text-gray-800">{data.address}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default VisitingCard;
