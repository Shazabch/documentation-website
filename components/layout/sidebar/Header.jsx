"use client";
import React from "react";
import {
  HStack,
  Switch,
  VStack,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Input,
  Code,
  useColorMode,
  IconButton,
} from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";
import LogoLightMode from "@/public/assets/logo_lightmode";
import LogoDarkMode from "@/public/assets/logo_darkmode";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <VStack py="4" position="fixed" top="0" zIndex="1">
      <HStack w="full" justifyContent="space-between">
        <IconButton
          bgColor="transparent"
          icon={colorMode === "dark" ? <LogoDarkMode /> : <LogoLightMode />}
          aria-label="logo"
        />

        <Switch
          id="color-mode-switch"
          isChecked={colorMode === "dark"}
          onChange={toggleColorMode}
          size="sm"
        />
      </HStack>
      <InputGroup>
        <InputLeftElement
          alignItems="center"
          display="flex"
          justifyContent="center"
          pointerEvents="none"
          color="gray.300"
          fontSize="12"
          pb="2"
        >
          <CiSearch />
        </InputLeftElement>
        <Input
          h="8"
          fontSize="12"
          border="1px solid gray"
          placeholder="Find anything"
        />
        <InputRightElement pb="2">
          <Code fontSize="10">/</Code>
        </InputRightElement>
      </InputGroup>
    </VStack>
  );
};

export default Header;
