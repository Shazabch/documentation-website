"use client";
import React from "react";
import {
  HStack,
  Flex,
  Link,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";

const Navbar = () => {
  return (
    <Flex
      p="4"
      w="full"
      position="sticky"
      top="0"
      justifyContent="flex-end"
      color="blue.500"
      borderBottom="0.8px solid #2B3039"
      zIndex="2"
      bg={useColorModeValue("white", "#121539")}
      // bgGradient="linear(to-t,  10%, #121539 100%) "

      // bgColor="#1a202c"
    >
      <HStack position="relative" px="12" justifyContent="space-around" gap="3">
        <Link as={NextLink} href="/">
          API Reference
        </Link>
      </HStack>
    </Flex>
  );
};

export default Navbar;
