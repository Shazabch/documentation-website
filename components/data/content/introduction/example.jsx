import React from "react";
import { Code, Text, VStack } from "@chakra-ui/react";

const Example = () => {
  return (
    <VStack>
      <Text textAlign="left">
        <span as="Text" fontSize="24" fontWeight="700">
          Just getting started?
          <br />
        </span>
        Check out our development quickstart guide.
        <span as="Text" fontSize="24" fontWeight="700">
          <br />
          Not a developer? <br />
        </span>
        Use Stripe’s no-code options or apps from our partners to get started
        with Stripe and to do more with your Stripe account—no code required.
      </Text>
      <VStack w="full" borderRadius="md" textAlign="left" gap="0" h="20">
        <Code p="2" w="full" h="full" bg="gray.700">
          BASE URL
        </Code>
        <Code p="2" w="full" h="full" bg="gray.500">
          https://api.stripe.com
        </Code>
      </VStack>

      <VStack w="full" borderRadius="md" textAlign="left" gap="0" h="20">
        <Code p="2" w="full" h="full" bg="gray.700">
          akdjasdnjn
        </Code>
        <Code p="2" w="full" h="full" bg="gray.500">
          By default, the Stripe API Docs demonstrate using curl to interact
          with the API over HTTP. Select one of our official client libraries to
          see examples in code.
        </Code>
      </VStack>
    </VStack>
  );
};

export default Example;
