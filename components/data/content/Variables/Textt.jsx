import React from "react";
import { Code, Heading, Text, VStack } from "@chakra-ui/react";

const Variables = () => {
  return (
    <VStack textAlign="left" py="4" bgColor="whiteAlpha.200" p="4" rounded="lg">
      <Heading fontSize="24" w="full">
        Variables
      </Heading>
      <Text w="full">
        The following variable is used in the request URLs: <br />
        <Code>{`{{ BaseURL }}: http://idmeta-api.test`}</Code>
      </Text>
    </VStack>
  );
};

export default Variables;
