import React from "react";
import { Code, Heading, Text, VStack } from "@chakra-ui/react";

const Variables = () => {
  return (
    <VStack textAlign="left" py="4">
      <Heading fontSize="24" w="full">
        Variables
      </Heading>
      <Text w="full">
        The following variable is used in the request URLs: <br />
        <Code>{`{{ baseUrl }}: http://idmeta-api.test`}</Code>
      </Text>
    </VStack>
  );
};

export default Variables;
