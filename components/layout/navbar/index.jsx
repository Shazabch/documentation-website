"use client";
import React from "react";
import { HStack, Flex, Link } from "@chakra-ui/react";
import NextLink from "next/link";

const Navbar = () => {
  return (
    <Flex
      p="4"
      w="full"
      position="sticky"
      top="0"
      justifyContent="flex-end"
      color="blue.600"
      borderBottom="0.8px solid #2B3039"
      zIndex="2"
      bgColor="#1a202c"
    >
      <HStack position="relative" px="12" justifyContent="space-around" gap="3">
        <Link as={NextLink} href="/">
          API Reference
        </Link>
        <Link as={NextLink} href="/products">
          Docs
        </Link>
        <Link as={NextLink} href="/cart">
          Support
        </Link>
        <Link as={NextLink} href="/cart">
          Sign in
        </Link>
      </HStack>
    </Flex>
  );
};

export default Navbar;