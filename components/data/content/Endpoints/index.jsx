import { GridItem, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import Textt from "./Textt";
import Example from "./Example";
const Endpoints = ({ id }) => {
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <>
      {isDesktop ? (
        <>
          <GridItem w="50%" id={id}>
            <Textt />
          </GridItem>
          <GridItem w="50%"></GridItem>
        </>
      ) : (
        <>
          <GridItem w="100%">
            <Textt />
          </GridItem>
        </>
      )}
    </>
  );
};

export default Endpoints;