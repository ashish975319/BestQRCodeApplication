// import React from "react";
// import { useLocation } from "react-router-dom";

// const ScannedDataDisplay = () => {
//   const location = useLocation();
//   const params = new URLSearchParams(location.search);
//   const data = params.get("data");

//   if (!data) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-50 to-gray-100">
//         <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
//           <h1 className="text-2xl font-semibold text-gray-800 mb-4">
//             No Data Available
//           </h1>
//           <p className="text-gray-600">We couldn't find any data to display.</p>
//         </div>
//       </div>
//     );
//   }

//   // Split data into lines and format into an array of objects
//   const dataLines = data.split("\n").map((line) => {
//     const [key, value] = line.split(": ");
//     return { key, value };
//   });

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 py-12">
//       <div className="bg-white p-8 rounded-lg shadow-xl max-w-lg w-full">
//         <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-8">
//           Personal Info
//         </h1>
//         <div className="space-y-4">
//           {dataLines.map((line, index) => (
//             <div key={index} className="relative">
//               <label className="block text-gray-700 font-medium mb-1">
//                 {line.key}
//               </label>
//               <textarea
//                 readOnly
//                 value={line.value || ""}
//                 className="w-full h-16 bg-gray-100 border border-gray-300 rounded-lg p-3 text-gray-700 resize-none overflow-auto"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ScannedDataDisplay;

// import React from "react";
// import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
// import { HiLink } from "react-icons/hi";
// import { useLocation } from "react-router-dom";

// const ScannedDataDisplay = () => {
//   const location = useLocation();
//   const params = new URLSearchParams(location.search);
//   const data = params.get("data");

//   if (!data) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-50 to-gray-100">
//         <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
//           <h1 className="text-2xl font-semibold text-gray-800 mb-4">
//             No Data Available
//           </h1>
//           <p className="text-gray-600">We couldn't find any data to display.</p>
//         </div>
//       </div>
//     );
//   }

//   // Split data into lines and format into an array of objects
//   const dataLines = data.split("\n").map((line) => {
//     const [key, value] = line.split(": ");
//     return { key, value };
//   });

//   // Create a helper function to get the value for each field
//   const getValue = (key, value) => {
//     switch (key) {
//       case "Email":
//         return (
//           <a
//             href={mailto:${value}}
//             className="flex items-center text-blue-600 hover:underline"
//           >
//             <FaEnvelope className="mr-2" />
//             {value}
//           </a>
//         );
//       case "Mobile":
//         return (
//           <a
//             href={tel:${value}}
//             className="flex items-center text-blue-600 hover:underline"
//           >
//             <FaPhoneAlt className="mr-2" />
//             {value}
//           </a>
//         );
//       case "Website":
//         return (
//           <a
//             href={value}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center text-blue-600 hover:underline"
//           >
//             <HiLink className="mr-2" />
//             {value}
//           </a>
//         );
//       default:
//         return value || "N/A";
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-600 to-blue-500 py-12">
//       <div className="max-w-2xl w-full space-y-6">
//         <div className="bg-blue-300 p-8 rounded-lg shadow-lg">
//           <h1 className="text-3xl font-extrabold text-black mb-4 text-center">
//             Personal Info
//           </h1>
//           {dataLines.map((line, index) => {
//             const isAddressField = ["Address2", "Address3"].includes(line.key);
//             if (line.value && !isAddressField) {
//               return (
//                 <div
//                   key={index}
//                   className={`p-4 rounded-md shadow-md bg-white mb-4 ${
//                     line.key === "Name" ? "bg-blue-100" : "bg-white"
//                   }`}
//                 >
//                   <h2 className="text-xl font-semibold text-gray-800 mb-2">
//                     {line.key}
//                   </h2>
//                   <p className="text-gray-950 text-lg">
//                     {getValue(line.key, line.value)}
//                   </p>
//                 </div>
//               );
//             }
//             if (line.key === "Address2" && line.value) {
//               return (
//                 <div
//                   key={index}
//                   className="p-4 rounded-md shadow-md bg-white mb-4"
//                 >
//                   <h2 className="text-xl font-semibold text-gray-800 mb-2">
//                     Address2
//                   </h2>
//                   <p className="text-gray-950 text-lg">{line.value}</p>
//                 </div>
//               );
//             }
//             if (line.key === "Address3" && line.value) {
//               return (
//                 <div
//                   key={index}
//                   className="p-4 rounded-md shadow-md bg-white mb-4"
//                 >
//                   <h2 className="text-xl font-semibold text-gray-800 mb-2">
//                     Address3
//                   </h2>
//                   <p className="text-gray-950 text-lg">{line.value}</p>
//                 </div>
//               );
//             }
//             return null;
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ScannedDataDisplay;

// import React from "react";
// import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
// import { HiLink } from "react-icons/hi";
// import { useLocation } from "react-router-dom";

// const ScannedDataDisplay = () => {
//   const location = useLocation();
//   const params = new URLSearchParams(location.search);
//   const data = params.get("data");

//   if (!data) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-50 to-gray-100">
//         <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
//           <h1 className="text-2xl font-semibold text-gray-800 mb-4">
//             No Data Available
//           </h1>
//           <p className="text-gray-600">We couldn't find any data to display.</p>
//         </div>
//       </div>
//     );
//   }

//   // Split data into lines and format into an array of objects
//   const dataLines = data.split("\n").map((line) => {
//     const [key, value] = line.split(": ");
//     return { key, value };
//   });

//   // Create a helper function to get the value for each field
//   const getValue = (key, value) => {
//     switch (key) {
//       case "Email":
//         return (
//           <a
//             href={mailto:${value}}
//             className="flex items-center text-blue-600 hover:underline"
//           >
//             <FaEnvelope className="mr-2" />
//             {value}
//           </a>
//         );
//       case "Mobile":
//         return (
//           <a
//             href={tel:${value}}
//             className="flex items-center text-blue-600 hover:underline"
//           >
//             <FaPhoneAlt className="mr-2" />
//             {value}
//           </a>
//         );
//       case "Website":
//         return (
//           <a
//             href={value}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center text-blue-600 hover:underline"
//           >
//             <HiLink className="mr-2" />
//             {value}
//           </a>
//         );
//       default:
//         return value || "N/A";
//     }
//   };

//   // Helper function to generate Google Maps URL
//   const getGoogleMapsUrl = (address) => {
//     const formattedAddress = encodeURIComponent(address);
//     return https://www.google.com/maps/search/?api=1&query=${formattedAddress};
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-600 to-blue-500 py-12">
//       <div className="max-w-2xl w-full space-y-6">
//         <div className="bg-blue-300 p-8 rounded-lg shadow-lg">
//           <h1 className="text-3xl font-extrabold text-black mb-4 text-center">
//             Personal Info
//           </h1>
//           {dataLines.map((line, index) => {
//             const isAddressField = line.key === "Address";
//             if (line.value && !isAddressField) {
//               return (
//                 <div
//                   key={index}
//                   className={`p-4 rounded-md shadow-md bg-white mb-4 ${
//                     line.key === "Name" ? "bg-blue-100" : "bg-white"
//                   }`}
//                 >
//                   <h2 className="text-xl font-semibold text-gray-800 mb-2">
//                     {line.key}
//                   </h2>
//                   <p className="text-gray-950 text-lg">
//                     {getValue(line.key, line.value)}
//                   </p>
//                 </div>
//               );
//             }
//             if (isAddressField && line.value) {
//               return (
//                 <div
//                   key={index}
//                   className="p-4 rounded-md shadow-md bg-white mb-4"
//                 >
//                   <h2 className="text-xl font-semibold text-gray-800 mb-2">
//                     Address
//                   </h2>
//                   <p className="text-gray-950 text-lg mb-4">{line.value}</p>
//                   <a
//                     href={getGoogleMapsUrl(line.value)}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-block bg-green-500 text-white py-2 px-4 rounded-md font-semibold hover:bg-green-600 transition duration-300"
//                   >
//                     Location
//                   </a>
//                 </div>
//               );
//             }
//             return null;
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ScannedDataDisplay;

//================================================

// import React from "react";
// import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
// import { HiLink } from "react-icons/hi";
// import { useLocation } from "react-router-dom";

// const ScannedDataDisplay = () => {
//   const location = useLocation();
//   const params = new URLSearchParams(location.search);
//   const data = params.get("data");

//   if (!data) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-50 to-gray-100">
//         <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
//           <h1 className="text-2xl font-semibold text-gray-800 mb-4">
//             No Data Available
//           </h1>
//           <p className="text-gray-600">We couldn't find any data to display.</p>
//         </div>
//       </div>
//     );
//   }

//   // Split data into lines and format into an array of objects
//   const dataLines = data.split("\n").map((line) => {
//     const [key, value] = line.split(": ");
//     return { key, value };
//   });

//   // Create a helper function to get the value for each field
//   const getValue = (key, value) => {
//     switch (key) {
//       case "Email":
//         return (
//           <a
//             href={mailto:${value}}
//             className="flex items-center text-blue-600 hover:underline"
//           >
//             <FaEnvelope className="mr-2" />
//             {value}
//           </a>
//         );
//       case "Mobile":
//         return (
//           <a
//             href={tel:${value}}
//             className="flex items-center text-blue-600 hover:underline"
//           >
//             <FaPhoneAlt className="mr-2" />
//             {value}
//           </a>
//         );
//       case "Website":
//         return (
//           <a
//             href={value}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center text-blue-600 hover:underline"
//           >
//             <HiLink className="mr-2" />
//             {value}
//           </a>
//         );
//       default:
//         return value || "N/A";
//     }
//   };

//   // Helper function to generate Google Maps URL
//   const getGoogleMapsUrl = (address) => {
//     const formattedAddress = encodeURIComponent(address);
//     return https://www.google.com/maps/search/?api=1&query=${formattedAddress};
//   };

//   // Extract Name and Designation
//   const name = dataLines.find((line) => line.key === "Name")?.value || "N/A";
//   const designation =
//     dataLines.find((line) => line.key === "Designation")?.value || "N/A";

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-600 to-blue-500 py-12">
//       <div className="max-w-2xl w-full space-y-6">
//         <div className="bg-blue-300 p-8 rounded-lg shadow-lg">
//           <div className="text-center mb-4">
//             <h1 className="text-4xl font-extrabold text-black">{name}</h1>
//             <h2 className="text-2xl font-semibold text-gray-800">
//               {designation}
//             </h2>
//           </div>
//           {dataLines.map((line, index) => {
//             const isAddressField = line.key === "Address";
//             if (line.value && !isAddressField) {
//               return (
//                 <div
//                   key={index}
//                   className={`p-4 rounded-md shadow-md bg-white mb-4 ${
//                     line.key === "Name" ? "bg-blue-100" : "bg-white"
//                   }`}
//                 >
//                   <h2 className="text-xl font-semibold text-gray-800 mb-2">
//                     {line.key}
//                   </h2>
//                   <p className="text-gray-950 text-lg">
//                     {getValue(line.key, line.value)}
//                   </p>
//                 </div>
//               );
//             }
//             if (isAddressField && line.value) {
//               return (
//                 <div
//                   key={index}
//                   className="p-4 rounded-md shadow-md bg-white mb-4"
//                 >
//                   <h2 className="text-xl font-semibold text-gray-800 mb-2">
//                     Address
//                   </h2>
//                   <p className="text-gray-950 text-lg mb-4">{line.value}</p>
//                   <a
//                     href={getGoogleMapsUrl(line.value)}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-block bg-green-500 text-white py-2 px-4 rounded-md font-semibold hover:bg-green-600 transition duration-300"
//                   >
//                     Location
//                   </a>
//                 </div>
//               );
//             }
//             return null;
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ScannedDataDisplay;

// import React from "react";
// import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
// import { HiLink } from "react-icons/hi";
// import { useLocation } from "react-router-dom";

// const ScannedDataDisplay = () => {
//   const location = useLocation();
//   const params = new URLSearchParams(location.search);
//   const data = params.get("data");

//   if (!data) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-50 to-gray-100">
//         <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
//           <h1 className="text-2xl font-semibold text-gray-800 mb-4">
//             No Data Available
//           </h1>
//           <p className="text-gray-600">We couldn't find any data to display.</p>
//         </div>
//       </div>
//     );
//   }

//   // Split data into lines and format into an array of objects
//   const dataLines = data.split("\n").map((line) => {
//     const [key, value] = line.split(": ");
//     return { key, value };
//   });

//   // Create a helper function to get the value for each field
//   const getValue = (key, value) => {
//     switch (key) {
//       case "Email":
//         return (
//           <a
//             href={mailto:${value}}
//             className="flex items-center text-blue-600 hover:underline"
//           >
//             <FaEnvelope className="mr-2" />
//             {value}
//           </a>
//         );
//       case "Mobile":
//         return (
//           <a
//             href={tel:${value}}
//             className="flex items-center text-blue-600 hover:underline"
//           >
//             <FaPhoneAlt className="mr-2" />
//             {value}
//           </a>
//         );
//       case "Website":
//         return (
//           <a
//             href={value}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center text-blue-600 hover:underline"
//           >
//             <HiLink className="mr-2" />
//             {value}
//           </a>
//         );
//       default:
//         return value || "N/A";
//     }
//   };

//   // Helper function to generate Google Maps URL
//   const getGoogleMapsUrl = (address) => {
//     const formattedAddress = encodeURIComponent(address);
//     return https://www.google.com/maps/search/?api=1&query=${formattedAddress};
//   };

//   // Extract Name and Designation
//   const name = dataLines.find((line) => line.key === "Name")?.value || "N/A";
//   const designation =
//     dataLines.find((line) => line.key === "Designation")?.value || "";

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-600 to-blue-500 py-12">
//       <div className="max-w-2xl w-full space-y-6">
//         <div className="bg-blue-300 p-8 rounded-lg shadow-lg">
//           <div className="text-center mb-4">
//             <h1 className="text-4xl font-extrabold text-black">{name}</h1>
//             {designation ? (
//               <h2 className="text-2xl font-semibold text-gray-800">
//                 {designation}
//               </h2>
//             ) : null}
//           </div>
//           {dataLines.map((line, index) => {
//             const isAddressField = line.key === "Address";
//             if (line.value && !isAddressField) {
//               return (
//                 <div
//                   key={index}
//                   className={`p-4 rounded-md shadow-md bg-white mb-4 ${
//                     line.key === "Name" ? "bg-blue-100" : "bg-white"
//                   }`}
//                 >
//                   <h2 className="text-xl font-semibold text-gray-800 mb-2">
//                     {line.key}
//                   </h2>
//                   <p className="text-gray-950 text-lg">
//                     {getValue(line.key, line.value)}
//                   </p>
//                 </div>
//               );
//             }
//             if (isAddressField && line.value) {
//               return (
//                 <div
//                   key={index}
//                   className="p-4 rounded-md shadow-md bg-white mb-4"
//                 >
//                   <h2 className="text-xl font-semibold text-gray-800 mb-2">
//                     Address
//                   </h2>
//                   <p className="text-gray-950 text-lg mb-4">{line.value}</p>
//                   <a
//                     href={getGoogleMapsUrl(line.value)}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-block bg-green-500 text-white py-2 px-4 rounded-md font-semibold hover:bg-green-600 transition duration-300"
//                   >
//                     Location
//                   </a>
//                 </div>
//               );
//             }
//             return null;
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ScannedDataDisplay;

// import React from "react";
// import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
// import { HiLink } from "react-icons/hi";
// import { useLocation } from "react-router-dom";

// const ScannedDataDisplay = () => {
//   const location = useLocation();
//   const params = new URLSearchParams(location.search);
//   const data = params.get("data");

//   if (!data) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-50 to-gray-100">
//         <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
//           <h1 className="text-2xl font-semibold text-gray-800 mb-4">
//             No Data Available
//           </h1>
//           <p className="text-gray-600">We couldn't find any data to display.</p>
//         </div>
//       </div>
//     );
//   }

//   // Split data into lines and format into an array of objects
//   const dataLines = data.split("\n").map((line) => {
//     const [key, value] = line.split(": ");
//     return { key, value };
//   });

//   // Create a helper function to get the value for each field
//   const getValue = (key, value) => {
//     switch (key) {
//       case "Email":
//         return (
//           <a
//             href={mailto:${value}}
//             className="flex items-center text-blue-600 hover:underline"
//           >
//             <FaEnvelope className="mr-2" />
//             {value}
//           </a>
//         );
//       case "Mobile":
//         return (
//           <a
//             href={tel:${value}}
//             className="flex items-center text-blue-600 hover:underline"
//             onClick={() => handleSaveContact(value)}
//           >
//             <FaPhoneAlt className="mr-2" />
//             {value}
//           </a>
//         );
//       case "Website":
//         return (
//           <a
//             href={value}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center text-blue-600 hover:underline"
//           >
//             <HiLink className="mr-2" />
//             {value}
//           </a>
//         );
//       default:
//         return value || "N/A";
//     }
//   };

//   // Helper function to generate Google Maps URL
//   const getGoogleMapsUrl = (address) => {
//     const formattedAddress = encodeURIComponent(address);
//     return https://www.google.com/maps/search/?api=1&query=${formattedAddress};
//   };

//   // Extract Name and Designation
//   const name = dataLines.find((line) => line.key === "Name")?.value || "N/A";
//   const designation =
//     dataLines.find((line) => line.key === "Designation")?.value || "";

//   // Handle Save Contact
//   const handleSaveContact = async (mobile) => {
//     const name =
//       dataLines.find((line) => line.key === "Name")?.value || "No Name";

//     if (navigator.contacts && navigator.contacts.save) {
//       try {
//         const contact = new Contact();
//         contact.name = name;
//         contact.phoneNumbers = [mobile];
//         await navigator.contacts.save(contact);
//         alert("Contact saved successfully!");
//       } catch (error) {
//         console.error("Error saving contact:", error);
//         alert("Failed to save contact. Consider manually saving the contact.");
//       }
//     } else {
//       // Fallback to vCard download
//       downloadVCard(name, mobile);
//     }
//   };

//   // Download vCard
//   const downloadVCard = (name, mobile) => {
//     const vCardData = `
// BEGIN:VCARD
// VERSION:3.0
// FN:${name}
// TEL:${mobile}
// END:VCARD
//     `.trim();

//     const blob = new Blob([vCardData], { type: "text/vcard" });
//     const url = URL.createObjectURL(blob);
//     const link = document.createElement("a");
//     link.href = url;
//     link.download = ${name}.vcf;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//     URL.revokeObjectURL(url);
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-600 to-blue-500 py-12">
//       <div className="max-w-2xl w-full space-y-6">
//         <div className="bg-blue-300 p-8 rounded-lg shadow-lg">
//           <div className="text-center mb-4">
//             <h1 className="text-4xl font-extrabold text-black">{name}</h1>
//             {designation ? (
//               <h2 className="text-2xl font-semibold text-gray-800">
//                 {designation}
//               </h2>
//             ) : null}
//           </div>
//           {dataLines.map((line, index) => {
//             const isAddressField = line.key === "Address";
//             if (line.value && !isAddressField) {
//               return (
//                 <div
//                   key={index}
//                   className={`p-4 rounded-md shadow-md bg-white mb-4 ${
//                     line.key === "Name" ? "bg-blue-100" : "bg-white"
//                   }`}
//                 >
//                   <h2 className="text-xl font-semibold text-gray-800 mb-2">
//                     {line.key}
//                   </h2>
//                   <p className="text-gray-950 text-lg">
//                     {getValue(line.key, line.value)}
//                   </p>
//                 </div>
//               );
//             }
//             if (isAddressField && line.value) {
//               return (
//                 <div
//                   key={index}
//                   className="p-4 rounded-md shadow-md bg-white mb-4"
//                 >
//                   <h2 className="text-xl font-semibold text-gray-800 mb-2">
//                     Address
//                   </h2>
//                   <p className="text-gray-950 text-lg mb-4">{line.value}</p>
//                   <a
//                     href={getGoogleMapsUrl(line.value)}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-block bg-green-500 text-white py-2 px-4 rounded-md font-semibold hover:bg-green-600 transition duration-300"
//                   >
//                     Location
//                   </a>
//                 </div>
//               );
//             }
//             return null;
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ScannedDataDisplay;

// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { FaEnvelope, FaPhoneAlt, FaSave } from "react-icons/fa";
// import { HiLink } from "react-icons/hi";

// const ScannedDataDisplay = () => {
//   const location = useLocation();
//   const [data, setData] = useState({});

//   useEffect(() => {
//     const params = new URLSearchParams(location.search);
//     const data = {};
//     params.forEach((value, key) => {
//       data[key] = value;
//     });
//     setData(data);
//   }, [location.search]);

//   const getValue = (key, value) => {
//     switch (key) {
//       case "email":
//         return (
//           <a
//             href={`mailto:${value}`}
//             className="flex items-center text-blue-600 hover:underline"
//           >
//             <FaEnvelope className="mr-2" />
//             {value}
//           </a>
//         );
//       case "mobile":
//         return (
//           <div className="flex items-center">
//             <a
//               href={`tel:${value}`}
//               className="flex items-center text-blue-600 hover:underline"
//             >
//               <FaPhoneAlt className="mr-2" />
//               {value}
//             </a>
//             <FaSave
//               className="ml-2 cursor-pointer text-blue-600 hover:text-blue-800"
//               onClick={() => handleSaveContact(value)}
//               title="Save Contact"
//               style={{ fontSize: "24px" }}
//             />
//           </div>
//         );
//       case "website":
//         return (
//           <a
//             href={value}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center text-blue-600 hover:underline"
//           >
//             <HiLink className="mr-2" />
//             {value}
//           </a>
//         );
//       case "address":
//         return (
//           <a
//             href={getGoogleMapsUrl(value)}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center text-blue-600 hover:underline"
//           >
//             <FaMapMarkerAlt className="mr-2" />
//             {value}
//           </a>
//         );
//       default:
//         return <div>{value}</div>;
//     }
//   };

//   const getGoogleMapsUrl = (address) => {
//     const formattedAddress = encodeURIComponent(address);
//     return `https://www.google.com/maps/search/?api=1&query=${formattedAddress}`;
//   };

//   const handleSaveContact = async (mobile) => {
//     const name = data.name || "No Name";

//     if (navigator.contacts && navigator.contacts.save) {
//       try {
//         const contact = new Contact();
//         contact.name = name;
//         contact.phoneNumbers = [mobile];
//         await navigator.contacts.save(contact);
//         alert("Contact saved successfully!");
//       } catch (error) {
//         console.error("Error saving contact:", error);
//         alert("Failed to save contact. Consider manually saving the contact.");
//       }
//     } else {
//       downloadVCard(name, mobile);
//     }
//   };

//   const downloadVCard = (name, mobile) => {
//     const vCardData = `
// BEGIN:VCARD
// VERSION:3.0
// FN:${name}
// TEL:${mobile}
// END:VCARD
//     `.trim();

//     const blob = new Blob([vCardData], { type: "text/vcard" });
//     const url = URL.createObjectURL(blob);
//     const link = document.createElement("a");
//     link.href = url;
//     link.download = `${name}.vcf`;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//     URL.revokeObjectURL(url);
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-600 to-blue-500 py-12">
//       <div className="max-w-2xl w-full space-y-6">
//         <div className="bg-blue-300 p-8 rounded-lg shadow-lg">
//           <div className="text-center mb-4">
//             <h1 className="text-4xl font-extrabold text-black">
//               {data.name || "No Name"}
//             </h1>
//             {data.designation && (
//               <h2 className="text-2xl font-semibold text-gray-800">
//                 {data.designation}
//               </h2>
//             )}
//           </div>
//           {Object.entries(data).map(([key, value], index) => {
//             if (value) {
//               return (
//                 <div
//                   key={index}
//                   className={`p-4 rounded-md shadow-md bg-white mb-4 ${
//                     key === "name" ? "bg-blue-100" : "bg-white"
//                   }`}
//                 >
//                   <h2 className="text-xl font-semibold text-gray-800 mb-2">
//                     {capitalizeFirstLetter(key)}
//                   </h2>
//                   <div className="text-gray-950 text-lg">
//                     {getValue(capitalizeFirstLetter(key), value)}
//                   </div>
//                 </div>
//               );
//             }
//             return null;
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// const capitalizeFirstLetter = (string) => {
//   return string.charAt(0).toUpperCase() + string.slice(1);
// };

// export default ScannedDataDisplay;

import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaSave,
  FaMapMarkerAlt,
  FaUser,
  FaBuilding,
  FaBriefcase,
} from "react-icons/fa";
import { HiLink } from "react-icons/hi";

const ScannedDataDisplay = () => {
  const location = useLocation();
  const [data, setData] = useState({});

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const data = {};
    params.forEach((value, key) => {
      data[key] = value;
    });
    setData(data);
  }, [location.search]);

  const getValue = (key, value) => {
    switch (key) {
      case "name":
        return (
          <div className="flex items-center text-gray-950 text-lg">
            <FaUser className="mr-2" />
            {value}
          </div>
        );
      case "landline":
      case "mobile":
        return (
          <div className="flex items-center">
            <a
              href={`tel:${value}`}
              className="flex items-center text-blue-600 hover:underline"
            >
              <FaPhoneAlt className="mr-2" />
              {value}
            </a>
            {key === "mobile" && (
              <FaSave
                className="ml-2 cursor-pointer text-blue-600 hover:text-blue-800"
                onClick={() => handleSaveContact(value)}
                title="Save Contact"
                style={{ fontSize: "24px" }}
              />
            )}
          </div>
        );
      case "email":
        return (
          <a
            href={`mailto:${value}`}
            className="flex items-center text-blue-600 hover:underline"
          >
            <FaEnvelope className="mr-2" />
            {value}
          </a>
        );
      case "website":
        return (
          <a
            href={value}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-600 hover:underline"
          >
            <HiLink className="mr-2" />
            {value}
          </a>
        );
      case "address":
        return (
          <a
            href={getGoogleMapsUrl(value)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-600 hover:underline"
          >
            <FaMapMarkerAlt className="mr-2" />
            {value}
          </a>
        );
      case "company":
        return (
          <div className="flex items-center text-gray-950 text-lg">
            <FaBuilding className="mr-2" />
            {value}
          </div>
        );
      case "designation":
        return (
          <div className="flex items-center text-gray-950 text-lg">
            <FaBriefcase className="mr-2" />
            {value}
          </div>
        );
      default:
        return <div>{value}</div>;
    }
  };

  const getGoogleMapsUrl = (address) => {
    const formattedAddress = encodeURIComponent(address);
    return `https://www.google.com/maps/search/?api=1&query=${formattedAddress}`;
  };

  const handleSaveContact = async (mobile) => {
    const name = data.name || "No Name";

    if (navigator.contacts && navigator.contacts.save) {
      try {
        const contact = new Contact();
        contact.name = name;
        contact.phoneNumbers = [mobile];
        await navigator.contacts.save(contact);
        alert("Contact saved successfully!");
      } catch (error) {
        console.error("Error saving contact:", error);
        alert("Failed to save contact. Consider manually saving the contact.");
      }
    } else {
      downloadVCard(name, mobile);
    }
  };

  const downloadVCard = (name, mobile) => {
    const vCardData = `
BEGIN:VCARD
VERSION:3.0
FN:${name}
TEL:${mobile}
END:VCARD
    `.trim();

    const blob = new Blob([vCardData], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${name}.vcf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-600 to-blue-500 py-12">
      <div className="max-w-2xl w-full space-y-6">
        <div className="bg-blue-300 p-8 rounded-lg shadow-lg">
          <div className="text-center mb-4">
            <h1 className="text-4xl font-extrabold text-black">
              {data.name || "No Name"}
            </h1>
            {data.designation && (
              <h2 className="text-2xl font-semibold text-gray-800">
                {data.designation}
              </h2>
            )}
          </div>
          {Object.entries(data).map(([key, value], index) => {
            if (value) {
              return (
                <div
                  key={index}
                  className={`p-4 rounded-md shadow-md bg-white mb-4 ${
                    key === "name" ? "bg-blue-100" : "bg-white"
                  }`}
                >
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {capitalizeFirstLetter(key)}
                  </h2>
                  <div className="text-gray-950 text-lg">
                    {getValue(key, value)}
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
};

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export default ScannedDataDisplay;
