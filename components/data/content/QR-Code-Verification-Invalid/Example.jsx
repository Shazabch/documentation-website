import {
  Box,
  IconButton,
  VStack,
  useClipboard,
  useColorModeValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { MdDone, MdOutlineCopyAll } from "react-icons/md";

const Example = () => {
  const jsonCode = `{
    "DateIssued": "01 March 2022",
    "Issuer": "PSA",
    "subject": {
      "Suffix": "",
      "lName": "RIZAL",
      "fName": "JOSE",
      "mName": "ALONZO",
      "sex": "Male",
      "BF": "[1,2]",
      "DOB": "January 1, 1970",
      "POB": "Calamba, Laguna",
      "PCN": "1234-4567-6789-1234",
    },
    "alg": "EDDSA",
    "signature":
      "lq3F1234kLI70mZG2/9WvQSUZi0EGS08AH9nKLMANRaXscYTmfPm7OYaP0qrTRPlnkGY7RlDCtV+krBj1xshAg==",
  }`;
  const { onCopy, hasCopied } = useClipboard(JSON.stringify(jsonCode, null, 2));
  const [showTransition, setShowTransition] = useState(false);

  useEffect(() => {
    setShowTransition(hasCopied);
  }, [hasCopied]);
  return (
    <VStack pos="relative" w="full">
      <SyntaxHighlighter language="json" style={okaidia} wrapLongLines>
        {jsonCode}
      </SyntaxHighlighter>
      <Box pos="absolute" top="4" right="-4">
        <IconButton
          onClick={onCopy}
          aria-label={hasCopied ? "Copied" : "Copy"}
          icon={hasCopied ? <MdDone /> : <MdOutlineCopyAll />}
          bgColor="transparent"
          transition={showTransition ? "all 0.5s ease" : "none"}
        />
      </Box>
    </VStack>
  );
};

export default Example;

// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   VStack,
//   IconButton,
//   useClipboard,
//   useColorMode,
//   useColorModeValue,
//   Text,
// } from "@chakra-ui/react";
// import { MdDone, MdOutlineCopyAll } from "react-icons/md";

// const jsonStyles = {
//   key: { color: "teal.500" },
//   string: { color: "orange.500" },
//   number: { color: "purple.500" },
//   boolean: { color: "green.500" },
//   null: { color: "red.500" },
//   brace: { color: "gray.500" },
// };

// const JsonHighlight = ({ json }) => {
//   const formatJson = (json) => {
//     if (typeof json !== "string") {
//       json = JSON.stringify(json, undefined, 2);
//     }
//     return json
//       .replace(/({|}|\[|\])/g, (match) => {
//         return `<span style="color: gray.500;">${match}</span>`;
//       })
//       .replace(/"(.*?)":/g, (match, p1) => {
//         return `<span style="color: teal.500;">"${p1}"</span>:`;
//       })
//       .replace(/"(.*?)"/g, (match, p1) => {
//         return `<span style="color: orange.500;">"${p1}"</span>`;
//       })
//       .replace(/\b(true|false)\b/g, (match) => {
//         return `<span style="color: green.500;">${match}</span>`;
//       })
//       .replace(/\b(null)\b/g, (match) => {
//         return `<span style="color: red.500;">${match}</span>`;
//       })
//       .replace(/(-?\d+\.?\d*)/g, (match) => {
//         return `<span style="color: purple.500;">${match}</span>`;
//       });
//   };

//   return (
//     <Box
//       as="pre"
//       p="2"
//       w="full"
//       h="full"
//       bg={useColorModeValue("gray.200", "gray.700")}
//       dangerouslySetInnerHTML={{ __html: formatJson(json) }}
//     />
//   );
// };

// const Example = () => {
//   const { colorMode } = useColorMode();
//   const jsonCode = {
//     DateIssued: "01 March 2022",
//     Issuer: "PSA",
//     subject: {
//       Suffix: "",
//       lName: "RIZAL",
//       fName: "JOSE",
//       mName: "ALONZO",
//       sex: "Male",
//       BF: "[1,2]",
//       DOB: "January 1, 1970",
//       POB: "Calamba, Laguna",
//       PCN: "1234-4567-6789-1234",
//     },
//     alg: "EDDSA",
//     signature:
//       "lq3F1234kLI70mZG2/9WvQSUZi0EGS08AH9nKLMANRaXscYTmfPm7OYaP0qrTRPlnkGY7RlDCtV+krBj1xshAg==",
//   };

//   const { onCopy, hasCopied } = useClipboard(JSON.stringify(jsonCode, null, 2));
//   const [showTransition, setShowTransition] = useState(false);

//   useEffect(() => {
//     setShowTransition(hasCopied);
//   }, [hasCopied]);

//   return (
//     <VStack
//       pos="relative"
//       w="full"
//       borderRadius="md"
//       textAlign="left"
//       gap="0"
//       borderWidth="1px"
//       borderColor={useColorModeValue("gray.300", "gray.600")}
//       p="4"
//       bg={useColorModeValue("gray.200", "gray.700")}
//     >
//       <JsonHighlight json={jsonCode} />
//       <Box pos="absolute" top="2" right="2">
//         <IconButton
//           onClick={onCopy}
//           aria-label={hasCopied ? "Copied" : "Copy"}
//           icon={hasCopied ? <MdDone /> : <MdOutlineCopyAll />}
//           bgColor="transparent"
//           transition={showTransition ? "all 0.5s ease" : "none"}
//         />
//       </Box>
//     </VStack>
//   );
// };

// export default Example;

// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Code,
//   VStack,
//   IconButton,
//   useClipboard,
//   useColorMode,
// } from "@chakra-ui/react";
// import { MdDone, MdOutlineCopyAll } from "react-icons/md";
// import {jsonStyle, formatJson} from '@/components/common/json_style'

// const Example = () => {
//   const { colorMode } = useColorMode();
//   const jsonCode = `{
//     "DateIssued": "01 March 2022",
//     "Issuer": "PSA",
//     "subject": {
//       "Suffix": "",
//       "lName": "RIZAL",
//       "fName": "JOSE",
//       "mName": "ALONZO",
//       "sex": "Male",
//       "BF": "[1,2]",
//       "DOB": "January 1, 1970",
//       "POB": "Calamba, Laguna",
//       "PCN": "1234-4567-6789-1234"
//     },
//     "alg": "EDDSA",
//     "signature": "lq3F1234kLI70mZG2/9WvQSUZi0EGS08AH9nKLMANRaXscYTmfPm7OYaP0qrTRPlnkGY7RlDCtV+krBj1xshAg=="
//   }`;
//   const { onCopy, hasCopied } = useClipboard(jsonCode);
//   const [showTransition, setShowTransition] = useState(false);

//   useEffect(() => {
//     setShowTransition(hasCopied);
//   }, [hasCopied]);

//   return (
//     <VStack pos="relative" w="full" borderRadius="md" textAlign="left" gap="0">
//       <Code
//         p="2"
//         w="full"
//         h="full"
//         bg="gray.700"
//         dangerouslySetInnerHTML={{ __html: formatJson(json) }}
//       >
//         Request Body:
//         <pre style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>
//           <code>{jsonCode}</code>
//         </pre>
//       </Code>
//       <Box pos="absolute" top="2" right="2">
//         <IconButton
//           onClick={onCopy}
//           aria-label={hasCopied ? "Copied" : "Copy"}
//           icon={hasCopied ? <MdDone /> : <MdOutlineCopyAll />}
//           bgColor="transparent"
//           transition={showTransition ? "all 0.5s ease" : "none"}
//         />
//       </Box>
//     </VStack>
//   );
// };

// export default Example;
