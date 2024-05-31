import React, { useEffect, useState } from "react";
import {
  Box,
  Code,
  IconButton,
  VStack,
  useClipboard,
  useColorMode,
} from "@chakra-ui/react";
import { MdDone, MdOutlineCopyAll } from "react-icons/md";

const Example = () => {
  const { colorMode } = useColorMode();

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
  const { onCopy, hasCopied } = useClipboard(jsonCode);
  const [showTransition, setShowTransition] = useState(false);

  useEffect(() => {
    setShowTransition(hasCopied);
  }, [hasCopied]);
  return (
    <VStack pos="relative" w="full" borderRadius="md" textAlign="left" gap="0">
      <Code p="2" w="full" h="full" bg="gray.700">
        Request Body:
        <pre style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>
          <code>{jsonCode}</code>
        </pre>
      </Code>
      <Box pos="absolute" top="2" right="2">
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
