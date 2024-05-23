import { GridItem, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import Textt from "./Textt";
import Example from "./Example";
const Metadata = ({ ref }) => {
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <>
      {isDesktop ? (
        <>
          <GridItem w="50%">
            <Textt />
          </GridItem>
          <GridItem w="50%">
            <Example />
          </GridItem>
        </>
      ) : (
        <>
          <GridItem w="100%">
            <Textt />
            <Example />
          </GridItem>
        </>
      )}
    </>
  );
};

export default Metadata;
