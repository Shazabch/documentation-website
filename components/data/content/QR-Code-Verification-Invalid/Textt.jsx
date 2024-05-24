import React from "react";
import { Code, Heading, Text, VStack } from "@chakra-ui/react";

const QR_Code_Verification_Invalid = () => {
  return (
    <VStack textAlign="left">
      <Heading fontSize="24" w="full">
        QR Code Verification (Invalid)
      </Heading>
      <Text w="full">
        Endpoint:
        <Code> POST /api/v1/verification/qr_code_verification </Code>
      </Text>
      <br />
      <Text w="full">
        Description: Verify an invalid QR code. <br />
        Headers: <br />
        <Code>x-api-key: asdasuhdunninasdio</Code>
      </Text>
    </VStack>
  );
};

export default QR_Code_Verification_Invalid;
