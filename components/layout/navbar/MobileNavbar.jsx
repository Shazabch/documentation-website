import React, { useEffect, useState } from "react";
import { Box, Button, IconButton, useColorMode } from "@chakra-ui/react";
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import MobileSidebar from "../sidebar/MobileSidebar";
import { useStateManagementStore } from "../../zustand-store/state-management";
import { scroller } from "react-scroll";
import SearchModal from "@/components/common/search_bar";

const MobileNavbar = () => {
  const {
    showMenu,
    setShowMenu,
    selectedMenu,
    onOpenSearchModal,
    isOpenSearchModal,
    onCloseSearchModal,
    onToggleSearchModal,
  } = useStateManagementStore();
  const { colorMode } = useColorMode();

  console.log(isOpenSearchModal);

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
            onClick={onOpenSearchModal}
          />
          Sign in
        </Button>
      </Box>
      {showMenu && <MobileSidebar />}
      {isOpenSearchModal && <SearchModal />}
    </>
  );
};

export default MobileNavbar;
