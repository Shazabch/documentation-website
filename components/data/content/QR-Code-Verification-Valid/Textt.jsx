import React from "react";
import { Code, Heading, Text, VStack } from "@chakra-ui/react";

const QR_Code_Verification_Valid = () => {
  return (
    <VStack textAlign="left" py="4">
      <Heading fontSize="24" w="full">
        QR Code Verification (Valid)
      </Heading>

      <Text w="full">
        Endpoint:
        <Code> POST /api/v1/verification/qr_code_verification </Code>
      </Text>

      <Text w="full">
        Description: Verify an invalid QR code. <br />
        Headers: <br />
        <Code>x-api-key: asdasuhdunninasdio</Code>
      </Text>
    </VStack>
  );
};

export default QR_Code_Verification_Valid;
