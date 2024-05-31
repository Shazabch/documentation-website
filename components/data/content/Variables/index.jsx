import { GridItem, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import Textt from "./Textt";
import Example from "./Example";
const Variables = () => {
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <>
      {isDesktop ? (
        <>
          <GridItem w="100%" h="100%" pos="sticky" top="20">
            <Textt />
          </GridItem>
          <GridItem w="100%">
            <Example />
          </GridItem>
        </>
      ) : (
        <>
          <GridItem>
            <Textt />
            <Example />
          </GridItem>
        </>
      )}
    </>
  );
};

export default Variables;
