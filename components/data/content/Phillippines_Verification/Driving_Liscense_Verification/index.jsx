import { GridItem, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
const Driving_Liscense_Verification = () => {
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <>
      {isDesktop ? (
        <>
          <GridItem h="100%" pos="sticky" top="20" w={{ base: "", xl: "40vw" }}>
            <Overview />
          </GridItem>
          <GridItem w={{ base: "", xl: "40vw" }}>
            <Example />
          </GridItem>
        </>
      ) : (
        <>
          <GridItem w="100%">
            <Overview />
            <Example />
          </GridItem>
        </>
      )}
    </>
  );
};

export default Driving_Liscense_Verification;

import {
  Code,
  Heading,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";

const Overview = () => {
  const bgColor = useColorModeValue("gray.50", "whiteAlpha.200");

  return (
    <VStack textAlign="left" bgColor={bgColor} p="4" rounded="lg">
      <Heading fontSize="24" w="full">
        Driving Liscence Verification
      </Heading>
      <Text w="full">
        Endpoint: &nbsp;
        <Code>{` POST /v1/verification/philippines/drivinglicense `}</Code>
        &nbsp;
      </Text>
    </VStack>
  );
};

import { Box, IconButton, useClipboard, useColorMode } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { MdDone, MdOutlineCopyAll } from "react-icons/md";

const Example = () => {
  const jsonCode = ` {
   "licenseNumber": "N01-23-456789",
   "expirationDate": "1999-12-31",
   "serialNumber": "123456789"
  }`;

  const response = `{
 200 OK: Verification successful.
 401 Unauthorized: Invalid or missing access token.
 Example cURL:
 bash
 Copy code
 curl -X 'POST' \
   '{{baseUrl}}/v1/verification/philippines/drivinglicense' \
   -H 'accept: application/json' \
   -H 'Content-Type: application/json' \
   -H 'Authorization: {{accessToken}}' \
   -d {
     "licenseNumber": "N01-23-456789",
     "expirationDate": "1999-12-31",
     "serialNumber": "123456789"
   }
  }`;
  const { onCopy, hasCopied } = useClipboard(JSON.stringify(jsonCode, null, 2));
  const [showTransition, setShowTransition] = useState(false);
  const bgColor = useColorModeValue("gray.50", "whiteAlpha.200");
  const { colorMode } = useColorMode();

  useEffect(() => {
    setShowTransition(hasCopied);
  }, [hasCopied]);

  return (
    <VStack pos="relative" bgColor={bgColor} borderRadius="lg">
      <Code>Request:</Code>
      <SyntaxHighlighter
        customStyle={{
          height: "100%",
          width: "100%",
          backgroundColor: colorMode == "dark" ? "transparent" : "transparent",
        }}
        language="json"
        style={okaidia}
        wrapLongLines
      >
        {jsonCode}
      </SyntaxHighlighter>
      <Code>Responses:</Code>
      <SyntaxHighlighter
        customStyle={{
          height: "100%",
          width: "100%",
          backgroundColor: colorMode == "dark" ? "transparent" : "transparent",
        }}
        language="json"
        style={okaidia}
        wrapLongLines
      >
        {response}
      </SyntaxHighlighter>
      <Box pos="absolute" top="4" right={{ base: "-4", xl: "2", "2xl": "2" }}>
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