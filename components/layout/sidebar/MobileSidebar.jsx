import React, { useEffect, useState } from "react";
import { Text, Box, Button, VStack, useColorMode } from "@chakra-ui/react";
import SIDEBAR_DATA from "@/components/data/Sidebar";
import { useStateManagementStore } from "../../zustand-store/state-management";
import { useRouter } from "next/navigation";
import ComponentMapping from "@/components/data/content";

const MobileSidebar = ({ scrollToSection }) => {
  const router = useRouter();
  const { colorMode } = useColorMode();
  const Sidebar_Titles = Object.keys(ComponentMapping).map(
    (key) => ComponentMapping[key].name
  );

  const { selectedMenu, setShowMenu, setSelectedMenu, setCurrentRoute } =
    useStateManagementStore();
  const handleRouteURL = (heading) => {
    const formattedHeading = heading.replace(/ /g, "_").toLowerCase();
    setCurrentRoute(localStorage.setItem("route", formattedHeading));
    router.push(`/${formattedHeading}`, undefined, {
      shallow: true,
    });
    setShowMenu(false);
  };
  setTimeout(() => {
    scrollToSection(localStorage.getItem("route"));
  }, 100);

  return (
    <Box
      overflowY="scroll"
      pos="fixed"
      top="14"
      bgColor="#1a202c"
      px="8"
      zIndex="1"
    >
      <>
        {Sidebar_Titles.map((title, index) => (
          <Text
            pl="4"
            onClick={() => {
              handleRouteURL(title);
              setSelectedMenu(title);
            }}
            py="1"
            cursor="pointer"
            _hover={{
              bg: "purple.100",
              color: "blue.700",
            }}
            bg={title == selectedMenu && "purple.100"}
            rounded="md"
            key={index}
            color={colorMode === "light" ? "white" : "inherit"}
          >
            {title}
          </Text>
        ))}
      </>
    </Box>
  );
};

export default MobileSidebar;
