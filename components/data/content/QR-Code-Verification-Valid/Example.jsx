import React from "react";
import { Code, Text, VStack } from "@chakra-ui/react";

const Example = () => {
  const jsonCode = `{
 "DateIssued": "22 October 2021",
 "Issuer": "PSA",
 "subject": {
 "Suffix": "",
 "lName": "HAO",
 "fName": "JAMES NGA KOK",
 "mName": "NGO",
 "sex": "Male",
 "BF": "[9,1]",
 "DOB": "September 12, 1944",
 "POB": "City of Manila,NCR, CITY OF MANILA, FIRST DISTRICT",
 "PCN": "8318-6089-4710-6157"
 },
 "alg": "EDDSA",
 "signature": "G58hV3L7MtGffkgsZqNxF+e+80cwvcXI/XaC3OZZQmvUWXs6VaQRI5H98VgwIrhmtObanb7nwlnr19q6vhf/Bw=="

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
