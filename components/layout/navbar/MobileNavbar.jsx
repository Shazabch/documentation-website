import React, { useEffect, useState } from "react";
import { Box, Button, IconButton, useColorMode } from "@chakra-ui/react";
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import MobileSidebar from "../sidebar/MobileSidebar";
import { useStateManagementStore } from "../../zustand-store/state-management";
import { scroller } from "react-scroll";

const MobileNavbar = () => {
  const { showMenu, setShowMenu, selectedMenu } = useStateManagementStore();
  const { colorMode } = useColorMode();

  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      duration: 800,
      delay: 2000,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <>
      <Box
        bgColor="#1a202c"
        pos="fixed"
        w="full"
        py="2"
        justifyContent="space-between"
        display="flex"
      >
        <Button
          bgColor="transparent"
          textTransform="uppercase"
          fontSize="12"
          fontWeight="400"
          _hover={{
            bgColor: "transparent",
          }}
          onClick={() => setShowMenu(!showMenu)}
          color={colorMode === "light" ? "white" : "inherit"}
        >
          {selectedMenu ? selectedMenu : "Introduction"}
          <IconButton
            bgColor="transparent"
            _hover={{
              bgColor: "transparent",
            }}
            aria-label="arrowbutton-mobilenavbar"
            icon={<IoIosArrowDown size={12} />}
          />
        </Button>

        <Button bgColor="transparent" color="blue.500">
          <IconButton
            bgColor="transparent"
            aria-label="mobile-searchIcon"
            icon={<CiSearch size={20} />}
          />
          Sign in
        </Button>
      </Box>
      {showMenu && <MobileSidebar scrollToSection={scrollToSection} />}
    </>
  );
};

export default MobileNavbar;
