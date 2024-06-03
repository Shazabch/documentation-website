import React from "react";
import { Heading, Text, VStack } from "@chakra-ui/react";

const Overview = () => {
  return (
    <VStack textAlign="left" bgColor="whiteAlpha.200" p="4" rounded="lg">
      <Heading fontSize="24" w="full">
        Overview
      </Heading>
      <Text>
        This API allows for the verification of QR codes issued by the PSA
        (Philippine Statistics Authority). Below are the details of the
        available endpoints.
      </Text>
    </VStack>
  );
};

export default Overview;
