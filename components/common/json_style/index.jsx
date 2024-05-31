// import React from "react";

// const jsonStyles = {
//   key: { color: "teal.500" },
//   string: { color: "orange.500" },
//   number: { color: "purple.500" },
//   boolean: { color: "green.500" },
//   null: { color: "red.500" },
//   brace: { color: "gray.500" },
// };

// const formatJson = (json) => {
//   if (typeof json !== "string") {
//     json = JSON.stringify(json, undefined, 2);
//   }
//   return json
//     .replace(/({|}|\[|\])/g, (match) => {
//       return `<span style="color: gray.500;">${match}</span>`;
//     })
//     .replace(/"(.*?)":/g, (match, p1) => {
//       return `<span style="color: teal.500;">"${p1}"</span>:`;
//     })
//     .replace(/"(.*?)"/g, (match, p1) => {
//       return `<span style="color: orange.500;">"${p1}"</span>`;
//     })
//     .replace(/\b(true|false)\b/g, (match) => {
//       return `<span style="color: green.500;">${match}</span>`;
//     })
//     .replace(/\b(null)\b/g, (match) => {
//       return `<span style="color: red.500;">${match}</span>`;
//     })
//     .replace(/(-?\d+\.?\d*)/g, (match) => {
//       return `<span style="color: purple.500;">${match}</span>`;
//     });
// };

// default export {jsonStyles, formatJson}