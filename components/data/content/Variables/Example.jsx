import React from "react";
import { Code, Text, VStack } from "@chakra-ui/react";

const Example = () => {
  const jsonCode = `{
   "DateIssued": "16 March 2022",
 "Issuer": "PSA",
 "subject": {
 "Suffix": "",
 "lName": "BUNDALIAN",
 "fName": "KRISTAL JOY",
 "mName": "TUMBALI",
 "sex": "Female",
 "BF": "[8,6]",
 "DOB": "December 04, 1990",
 "POB": "Ballesteros,Cagayan",
 "PCN": "9653-7051-9548-0132"
 },
 "alg": "EDDSA",
 "signature": "PHCws4/WQ/BqoP8iubD0wTNuHpb5Gi/BbMnZwHcw3jfWCfJ9mgimFcT9j7sWMEyTa7QCq1ufLYXpQOq08y1cAQ=="
  }`;
  return (
    <VStack w="full" borderRadius="md" textAlign="left" gap="0">
      <Code p="2" w="full" h="full" bg="gray.700">
        Request Body:
        <pre style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>
          <code>{jsonCode}</code>
        </pre>
      </Code>
    </VStack>
  );
};

export default Example;
