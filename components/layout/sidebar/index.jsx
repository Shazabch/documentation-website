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
} from "@chakra-ui/react";
import { IoIosArrowRoundForward } from "react-icons/io";
import Header from "./Header";
import { useStateManagementStore } from "@/components/zustand-store/state-management";
const Sidebar = ({ titles, handleClick }) => {
  const [showScrollbar, setShowScrollbar] = useState(false);
  const { selectedMenu, setSelectedMenu, setCurrentRoute } =
    useStateManagementStore();

  return (
    <VStack
      h="100dvh"
      w={{ lg: "25%", xl: "20%", "2xl": "15%" }}
      top="0"
      pos="fixed"
    >
      <Header />
      <Accordion
        py="4"
        mt="32"
        mb="4"
        allowMultiple
        color="gray.500"
        allowToggle
        variant="flushed"
        w="full"
        overflowY="scroll"
        onMouseEnter={() => setShowScrollbar(true)}
        onMouseLeave={() => setShowScrollbar(false)}
        css={
          showScrollbar
            ? {
                "&::-webkit-scrollbar": {
                  width: "8px",
                },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: "#CBD5E0",
                  borderRadius: "8px",
                },
              }
            : {
                "&::-webkit-scrollbar": {
                  display: "none",
                },
              }
        }
      >
        {titles.map((title, index) => (
          <Text
            key={index}
            pl="8"
            onClick={() => {
              handleClick(title);
              setSelectedMenu(title);
              setCurrentRoute(localStorage.setItem("route", title));
            }}
            py="1"
            cursor="pointer"
            _hover={{
              bg: "purple.100",
              color: "blue.700",
            }}
            bg={title == selectedMenu && "purple.100"}
            color={title == selectedMenu && "blue.700"}
            rounded="md"
          >
            {title}
          </Text>
        ))}
        <Button
          w="full"
          _hover={{
            bg: "transparent",
          }}
          py="6"
          bg="transparent"
          pos="absolute"
          color="blue.600"
          bottom="0"
          borderTop="0.8px solid #2B3039"
          borderBottom="0.8px solid #2B3039"
        >
          <Text w="full" textAlign="left">
            Sign in
            <IconButton
              bgColor="transparent"
              _hover={{
                bgColor: "transparent",
              }}
              color="blue.600"
              aria-label="signinbutton-sidebar"
              icon={<IoIosArrowRoundForward size={24} />}
            />
          </Text>
        </Button>
      </Accordion>
    </VStack>
  );
};

export default Sidebar;
