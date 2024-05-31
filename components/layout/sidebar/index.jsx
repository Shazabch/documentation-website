"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
  Button,
  VStack,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { IoIosArrowRoundForward } from "react-icons/io";
import Header from "./Header";
import { useStateManagementStore } from "@/components/zustand-store/state-management";
const Sidebar = ({ titles, handleClick }) => {
  const { selectedMenu, setSelectedMenu } = useStateManagementStore();

  return (
    <VStack
      h="100dvh"
      w={{ lg: "25%", xl: "20%", "2xl": "15%" }}
      top="0"
      pos="fixed"
      bg={useColorModeValue("white", "#121539")}
      color={useColorModeValue("#121539", "RGBA(255, 255, 255, 0.92)")}
    >
      <Header />
      <Accordion
        pl="8"
        py="4"
        mt="32"
        mb="4"
        allowMultiple
        color="gray.500"
        allowToggle
        variant="flushed"
        w="full"
        overflow="hidden"
        // onMouseEnter={() => setShowScrollbar(true)}
        // onMouseLeave={() => setShowScrollbar(false)}
        // css={
        //   showScrollbar
        //     ? {
        //         "&::-webkit-scrollbar": {
        //           width: "8px",
        //         },
        //         "&::-webkit-scrollbar-thumb": {
        //           backgroundColor: "#CBD5E0",
        //           borderRadius: "8px",
        //         },
        //       }
        //     : {
        //         "&::-webkit-scrollbar": {
        //           display: "none",
        //         },
        //       }
        // }
      >
        <Text
          color={useColorModeValue("#121539", "RGBA(255, 255, 255, 0.92)")}
          fontWeight="600"
        >
          API 1
        </Text>
        {titles.map((title, index) => (
          <Text
            key={index}
            onClick={() => {
              handleClick(title);
              setSelectedMenu(title);
            }}
            transition="transform 0.5s ease"
            _hover={{
              color: useColorModeValue("#121539", "rgba(255, 255, 255, 0.92)"),
              transform: "translateX(2%)",
            }}
            py="1"
            color={useColorModeValue("#121539", "RGBA(255, 255, 255, 0.92)")}
            cursor="pointer"
            // color={title == selectedMenu && "RGBA(255, 255, 255, 0.92)"}
            color={
              title === selectedMenu
                ? useColorModeValue("#121539", "rgba(255, 255, 255, 0.92)")
                : undefined
            }
            rounded="md"
          >
            {title}
          </Text>
        ))}
      </Accordion>
    </VStack>
  );
};

export default Sidebar;
