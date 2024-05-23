import React from "react";
import { Heading, Text, VStack } from "@chakra-ui/react";

const Textt = () => {
  return (
    <VStack textAlign="left">
      <Heading fontSize="24" w="full">
        Metadata
      </Heading>
      <Text>
        The Stripe API is organized around REST. Our API has predictable
        resource-oriented URLs, accepts form-encoded request bodies, returns
        JSON-encoded responses, and uses standard HTTP response codes, auth, and
        verbs. You can use the Stripe API in test mode, which doesn’t affect
        your live data or interact with the banking networks. The API key you
        use to authenticate the request determines whether the request is live
        mode or test mode. The Stripe API doesn’t support bulk updates. You can
        work on only one object per request. The Stripe API differs for every
        account as we release new versions and tailor functionality. Log in to
        see docs with your test key and dat
      </Text>
    </VStack>
  );
};

export default Textt;
