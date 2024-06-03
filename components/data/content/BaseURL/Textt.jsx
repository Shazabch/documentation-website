import React from "react";
import { Code, Heading, Text, VStack } from "@chakra-ui/react";

const Textt = () => {
  return (
    <VStack textAlign="left" bgColor="whiteAlpha.200" p="4" rounded="lg">
      <Heading fontSize="24" w="full">
        Base URL
      </Heading>
      <Text w="full">
        The base URL for all endpoints is: <br />
        <Code mt="4"> arduino</Code>
      </Text>
    </VStack>
  );
};

export default Textt;
