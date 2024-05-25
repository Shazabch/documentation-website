import React, { useEffect, useState } from "react";
import { Text, Box, Button, VStack, useColorMode } from "@chakra-ui/react";
import { useStateManagementStore } from "../../zustand-store/state-management";
import { useRouter } from "next/navigation";
import ComponentMapping from "@/components/data/content";

const MobileSidebar = () => {
  const router = useRouter();
  const { colorMode } = useColorMode();

  const sidebarTitles = Object.keys(ComponentMapping).map(
    (key) => ComponentMapping[key].name
  );

  const handleNavigation = (id) => {
    router.push(`#${id}`, undefined, { shallow: true });
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const { selectedMenu, setShowMenu, setSelectedMenu, setCurrentRoute } =
    useStateManagementStore();

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
        {sidebarTitles?.map((title, index) => (
          <Text
            pl="4"
            onClick={() => {
              handleNavigation(title);
              setSelectedMenu(title);
              setShowMenu(false);
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
