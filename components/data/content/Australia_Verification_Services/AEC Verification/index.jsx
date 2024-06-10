import {
  GridItem,
  useBreakpointValue,
  useClipboard,
  useColorMode,
  Code,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  Box,
  IconButton,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { MdDone, MdOutlineCopyAll } from "react-icons/md";

const AEC_Verification = () => {
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <>
      {isDesktop ? (
        <>
          <GridItem h="100%" pos="sticky" top="20" w={{ base: "", xl: "40vw" }}>
            <Details />
          </GridItem>
          <GridItem w={{ base: "", xl: "40vw" }}>
            <Example />
          </GridItem>
        </>
      ) : (
        <>
          <GridItem w="100%">
            <Details />
            <Example />
          </GridItem>
        </>
      )}
    </>
  );
};

export default AEC_Verification;

const Details = () => {
  const bgColor = useColorModeValue("gray.50", "whiteAlpha.200");

  return (
    <VStack textAlign="left" bgColor={bgColor} p="4" rounded="lg">
      <Heading fontSize="24" w="full">
        AEC Verification
      </Heading>
      <Text w="full">
        Endpoint: &nbsp;
        <Code>{`POST /v1/verification/australia/aec`}</Code>
        This document covers the main verification endpoints available for
        Australian services. Ensure that the access token is valid and the
        request headers and body follow the specified formats for successful API
        interactions. &nbsp;
      </Text>
    </VStack>
  );
};

const Example = () => {
  const jsonCode = `{
Header:
json
Copy code
{
  "accept": "application/json",
  "Content-Type": "application/json",
  "Authorization": "{{accessToken}}"
}
Body (raw JSON):
json
Copy code
{
  "dob": "1990-02-12",
  "state": 1,
  "postcode": 1233,
  "suburb": "string",
  "family_name": "string",
  "given_name": "string",
  "street_name": "TWEED COAST",
  "street_type": "RD",
  "street_number": 1,
  "unit_number": 202,
  "habitation_number": "NORTH STAR HOLIDAY RESORT"
}
  }`;

  const response = `{
200 OK: Verification successful.
401 Unauthorized: Invalid or missing access token.
Example cURL:

bash
Copy code
curl -X 'POST' \
  '{{baseUrl}}/v1/verification/australia/aec' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -H 'Authorization: {{accessToken}}' \
  -d '{
        "dob": "1990-02-12",
        "state": 1,
        "postcode": 1233,
        "suburb": "string",
        "family_name": "string",
        "given_name": "string",
        "street_name": "TWEED COAST",
        "street_type": "RD",
        "street_number": 1,
        "unit_number": 202,
        "habitation_number": "NORTH STAR HOLIDAY RESORT"
      }'
Example cURL for Direct API Call
Endpoint: POST https://b2b.idmetagroup.com/api/v1/verification/australia/visa

Request:

Header:
json
Copy code
{
  "accept": "application/json",
  "Content-Type": "application/json"
}
Body (raw JSON):
json
Copy code
{
  "dob": "08-12-1989",
  "family_name": "JONES",
  "given_name": "Matthew John",
  "passport_number": "DVS123456",
  "country_of_issue": "string"
}
Example cURL:

bash
Copy code
curl -X 'POST' \
  'https://b2b.idmetagroup.com/api/v1/verification/australia/visa' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
        "dob": "08-12-1989",
        "family_name": "JONES",
        "given_name": "Matthew John",
        "passport_number": "DVS123456",
        "country_of_issue": "string"
      }'
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
