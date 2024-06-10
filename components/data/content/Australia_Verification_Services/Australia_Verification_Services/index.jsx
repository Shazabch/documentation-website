import { GridItem, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
const Australia_Verification_Services = () => {
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

export default Australia_Verification_Services;

import {
  Code,
  Heading,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";

const Details = () => {
  const bgColor = useColorModeValue("gray.50", "whiteAlpha.200");

  return (
    <VStack textAlign="left" bgColor={bgColor} p="4" rounded="lg">
      <Heading fontSize="24" w="full">
        Australia Verification Services
      </Heading>
      <Text>
        This document provides a guide on how to use the API endpoints available
        for various verification services in Australia, such as visa, passport,
        citizenship, and more. The general setup and request structure are
        explained below, followed by specific endpoint instructions.
        <br />
        <Text fontWeight="600" fontSize="16">
          Common Setup:
        </Text>
        Base URL
        <br />
        All API requests should be made to the following base URL:
        <br />
        Copy code &nbsp;
        <Code>{`{{ BaseURL }}`}</Code>&nbsp;
        <br />
        <Text fontWeight="600" fontSize="16">
          Authentication
        </Text>
        All requests require an Authorization header with a valid access token:
        <br />
        css
        <br /> Copy code
        <br />
        Authorization: &nbsp;
        <Code>{`{{ accessToken }}`}</Code>&nbsp;
        <br /> Headers
        <br />
        The following headers must be included in all requests:
        <br />
        makefile
        <br />
        Copy code
        <br /> accept: application/json
        <br /> Content-Type: application/json
        <br />
        Authorization: &nbsp;
        <Code>{`{{ accessToken }}`}</Code>&nbsp;
      </Text>
    </VStack>
  );
};

import React, { useState, useEffect } from "react";
import {
  Box,
  VStack,
  IconButton,
  useClipboard,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import { MdDone, MdOutlineCopyAll } from "react-icons/md";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/cjs/styles/prism";

const Example = () => {
  const jsonCode = ` {
  {
  "returnFullDocumentImage": false,
  "returnFaceImage": false,
  "returnSignatureImage": false,
  "allowBlurFilter": false,
  "allowUnparsedMrzResults": false,
  "allowUnverifiedMrzResults": true,
  "validateResultCharacters": true,
  "anonymizationMode": "FULL_RESULT",
  "anonymizeImage": true,
  "ageLimit": 0,
  "imageSource": "string",
  "scanCroppedDocumentImage": false
}
Parameters
Name	In	Type	Required	Description
body	body	DocumentVerificationRequest	true	none
Responses
Status	Meaning	Description	Schema
200	OK	OK	DocumentVerificationResponse
400	Bad Request	Bad Request	DefaultResponse
403	Forbidden	Forbidden	DefaultResponse
500	Internal Server Error	Internal Server Error	DefaultResponse
503	Service Unavailable	Service Unavailable	DefaultResponse
504	Gateway Time-out	Gateway Timeout	DefaultResponse

Code Samples
sh
Copy code
# You can also use wget
curl -X POST https://api.microblink.com/v1/recognizers/document-verification \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "returnFullDocumentImage": false,
    "returnFaceImage": false,
    "returnSignatureImage": false,
    "allowBlurFilter": false,
    "allowUnparsedMrzResults": false,
    "allowUnverifiedMrzResults": true,
    "validateResultCharacters": true,
    "anonymizationMode": "FULL_RESULT",
    "anonymizeImage": true,
    "ageLimit": 0,
    "imageSource": "string",
    "scanCroppedDocumentImage": false
  }'

  }`;

  const response = `{
 {
  "executionId": "string",
  "finishTime": "string",
  "startTime": "string",
  "result": {
    "dateOfBirth": {
      "day": 0,
      "month": 0,
      "year": 0,
      "successfullyParsed": true,
      "originalString": "string"
    },
    "classInfo": {
      "country": "COUNTRY_NONE",
      "region": "REGION_NONE",
      "type": "TYPE_NONE",
      "countryName": "string",
      "isoAlpha3CountryCode": "string",
      "isoAlpha2CountryCode": "string",
      "isoNumericCountryCode": "string"
    },
    "type": "string",
    "isBelowAgeLimit": true,
    "age": 0,
    "recognitionStatus": "EMPTY",
    "firstName": "string",
    "lastName": "string",
    "fullName": "string",
    "address": "string",
    "dateOfIssue": {
      "day": 0,
      "month": 0,
      "year": 0,
      "successfullyParsed": true,
      "originalString": "string"
    },
    "dateOfExpiry": {
      "day": 0,
      "month": 0,
      "year": 0,
      "successfullyParsed": true,
      "originalString": "string"
    },
    "documentNumber": "string",
    "sex": "string",
    "driverLicenseDetailedInfo": {
      "restrictions": "string",
      "endorsements": "string",
      "vehicleClass": "string",
      "conditions": "string",
      "vehicleClassesInfo": [
        {
          "vehicleClass": "string",
          "licenceType": "string",
          "effectiveDate": {
            "day": 0,
            "month": 0,
            "year": 0,
            "successfullyParsed": true,
            "originalString": "string"
          },
          "expiryDate": {
            "day": 0,
            "month": 0,
            "year": 0,
            "successfullyParsed": true,
            "originalString": "string"
          }
        }
      ]
    },
    "fullDocumentImageBase64": "string",
    "faceImageBase64": "string",
    "additionalNameInformation": "string",
    "additionalAddressInformation": "string",
    "additionalOptionalAddressInformation": "string",
    "placeOfBirth": "string",
    "nationality": "string",
    "race": "string",
    "religion": "string",
    "profession": "string",
    "maritalStatus": "string",
    "residentialStatus": "string",
    "employer": "string",
    "personalIdNumber": "string",
    "documentAdditionalNumber": "string",
    "documentOptionalAdditionalNumber": "string",
    "issuingAuthority": "string",
    "mrzData": {
      "rawMrzString": "string",
      "documentCode": "string",
      "issuer": "string",
      "documentNumber": "string",
      "opt1": "string",
      "opt2": "string",
      "gender": "string",
      "nationality": "string",
      "primaryId": "string",
      "secondaryId": "string",
      "alienNumber": "string",
      "applicationReceiptNumber": "string",
      "immigrantCaseNumber": "string",
      "mrzVerified": true,
      "mrzParsed": true,
      "dateOfBirth": {
        "day": 0,
        "month": 0,
        "year": 0,
        "successfullyParsed": true,
        "originalString": "string"
      },
      "dateOfExpiry": {
        "day": 0,
        "month": 0,
        "year": 0,
        "successfullyParsed": true,
        "originalString": "string"
      },
      "documentType": "UNKNOWN",
      "issuerName": "string",
      "nationalityName": "string"
    },
    "conditions": "string",
    "localizedName": "string",
    "dateOfExpiryPermanent": true,
    "additionalPersonalIdNumber": "string",
    "viz": {
      "firstName": "string",
      "lastName": "string",
      "fullName": "string",
      "additionalNameInformation": "string",
      "localizedName": "string",
      "address": "string",
      "additionalAddressInformation": "string",
      "additionalOptionalAddressInformation": "string",
      "placeOfBirth": "string",
      "nationality": "string",
      "race": "string",
      "religion": "string",
      "profession": "string",
      "maritalStatus": "string",
      "residentialStatus": "string",
      "employer": "string",
      "sex": "string",
      "dateOfBirth": {
        "day": 0,
        "month": 0,
        "year": 0,
        "successfullyParsed": true,
        "originalString": "string"
      },
      "dateOfIssue": {
        "day": 0,
        "month": 0,
        "year": 0,
        "successfullyParsed": true,
        "originalString": "string"
      },
      "dateOfExpiry": {
        "day": 0,
        "month": 0,
        "year": 0,
        "successfullyParsed": true,
        "originalString": "string"
      },
      "dateOfExpiryPermanent": true,
      "documentNumber": "string",
      "personalIdNumber": "string",
      "documentAdditionalNumber": "string",
      "additionalPersonalIdNumber": "string",
      "documentOptionalAdditionalNumber": "string",
      "issuingAuthority": "string",
      "driverLicenseDetailedInfo": {
        "restrictions": "string",
        "endorsements": "string",
        "vehicleClass": "string",
        "conditions": "string",
        "vehicleClassesInfo": [
          {
            "vehicleClass": "string",
            "licenceType": "string",
            "effectiveDate": {
              "day": 0,
              "month": 0,
              "year": 0,
              "successfullyParsed": true,
              "originalString": "string"
            },
            "expiryDate": {
              "day": 0,
              "month": 0,
              "year": 0,
              "successfullyParsed": true,
              "originalString": "string"
            }
          }
        ]
      },
      "conditions": "string",
      "fathersName": "string",
      "mothersName": "string"
    },
    "barcode": {
      "rawDataBase64": "string",
      "stringData": "string",
      "firstName": "string",
      "lastName": "string",
      "middleName": "string",
      "fullName": "string",
      "additionalNameInformation": "string",
      "address": "string",
      "placeOfBirth": "string",
      "nationality": "string",
      "race": "string",
      "religion": "string",
      "profession": "string",
      "maritalStatus": "string",
      "residentialStatus": "string",
      "employer": "string",
      "sex": "string",
      "dateOfBirth": {
        "day": 0,
        "month": 0,
        "year": 0,
        "successfullyParsed": true,
        "originalString": "string"
      },
      "dateOfIssue": {
        "day": 0,
        "month": 0,
        "year": 0,
        "successfullyParsed": true,
        "originalString": "string"
      },
      "dateOfExpiry": {
        "day": 0,
        "month": 0,
        "year": 0,
        "successfullyParsed": true,
        "originalString": "string"
      },
      "documentNumber": "string",
      "personalIdNumber": "string",
      "documentAdditionalNumber": "string",
      "issuingAuthority": "string",
      "addressDetailedInfo": {
        "street": "string",
        "postalCode": "string",
        "city": "string",
        "jurisdiction": "string"
      },
      "driverLicenseDetailedInfo": {
        "restrictions": "string",
        "endorsements": "string",
        "vehicleClass": "string",
        "conditions": "string",
        "vehicleClassesInfo": [
          {
            "vehicleClass": "string",
            "licenceType": "string",
            "effectiveDate": {
              "day": 0,
              "month": 0,
              "year": 0,
              "successfullyParsed": true,
              "originalString": "string"
            },
            "expiryDate": {
              "day": 0,
              "month": 0,
              "year": 0,
              "successfullyParsed": true,
              "originalString": "string"
            }
          }
        ]
      },
      "extendedElements": [
        {
          "key": "BARCODE_ELEMENT_KEY_DOCUMENT_TYPE",
          "value": "string"
        }
      ]
    },
    "imageAnalysisResult": {
      "blurred": true,
      "documentImageColorStatus": "NOT_AVAILABLE",
      "documentImageMoireStatus": "NOT_AVAILABLE",
      "faceDetectionStatus": "NOT_AVAILABLE",
      "mrzDetectionStatus": "NOT_AVAILABLE",
      "barcodeDetectionStatus": "NOT_AVAILABLE"
    },
    "processingStatus": "SUCCESS",
    "recognitionMode": "NONE",
    "signatureImageBase64": "string",
    "fathersName": "string",
    "mothersName": "string"
  }
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
