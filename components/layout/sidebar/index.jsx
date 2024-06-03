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
  Box,
} from "@chakra-ui/react";
import { IoIosArrowRoundForward } from "react-icons/io";
import Header from "./Header";
import { useStateManagementStore } from "@/components/zustand-store/state-management";
import FormattedTitles from "@/components/utils/FormattedTitles";
const Sidebar = ({ titles, handleClick }) => {
  const { selectedMenu, setSelectedMenu } = useStateManagementStore();

  return (
    <VStack
      h="100dvh"
      w={{ lg: "25%", xl: "20%", "2xl": "20%", "3xl": "20%" }}
      top="0"
      pos="fixed"
      bg={useColorModeValue("white", "#121539")}
      color={useColorModeValue("#121539", "RGBA(255, 255, 255, 0.92)")}
      borderRight="0.8px solid #2B3039"
      border={{
        base: "2px solid red",
        md: "2px solid pink",
        lg: "2px solid orange",
        xl: "2px solid blue",
        "2xl": "2px solid white",
        "3xl": "2px solid green",
        "4xl": "2px solid purple",
      }}
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
        {titles.map((api, index) => (
          <>
            <Text
              key={index}
              color={useColorModeValue("#121539", "RGBA(255, 255, 255, 0.92)")}
              fontWeight="600"
              fontSize={{ lg: "1.05rem" }}
            >
              {api.name}
            </Text>
            {Object.keys(api.data).map((title, index) => (
              <Text
                key={index}
                transition="transform 0.5s ease"
                cursor="pointer"
                rounded="md"
                _hover={{
                  color: useColorModeValue(
                    "#121539",
                    "rgba(255, 255, 255, 0.92)"
                  ),
                  transform: "translateX(2%)",
                }}
                onClick={() => {
                  handleClick(title);
                  setSelectedMenu(title);
                }}
                transform={title === selectedMenu && "translateX(2%)"}
                py="1"
                color={
                  title === selectedMenu
                    ? useColorModeValue("#121539", "rgba(255, 255, 255, 0.92)")
                    : undefined
                }
              >
                <FormattedTitles title={title} />
              </Text>
            ))}
          </>
        ))}
      </Accordion>
      <Box h="10vh" w="10vw" bg="pink" />
    </VStack>
  );
};

export default Sidebar;
