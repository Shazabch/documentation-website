"use client";
import { useState } from "react";
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
import { IoIosArrowDown } from "react-icons/io";
import SIDEBAR_DATA from "@/components/data/Sidebar";
import Header from "./Header";
import { useStateManagementStore } from "@/components/zustand-store/state-management";
import ComponentMapping from "@/components/data/content";
const Sidebar = ({ scrollToSection }) => {
  const router = useRouter();
  const { selectedMenu, setSelectedMenu, setCurrentRoute, currentRoute } =
    useStateManagementStore();
  const [showScrollbar, setShowScrollbar] = useState(false);

  const Sidebar_Titles = Object.keys(ComponentMapping).map(
    (key) => ComponentMapping[key].name
  );

  console.log(Sidebar_Titles);

  const handleRouteURL = (heading) => {
    const formattedHeading = heading.replace(/ /g, "_").toLowerCase();
    setCurrentRoute(localStorage.setItem("route", formattedHeading));
    router.push(`/${formattedHeading}/`, undefined, {
      shallow: true,
    });
  };

  setTimeout(() => {
    scrollToSection(localStorage.getItem("route"));
  }, 100);

  return (
    <VStack h="100dvh" w="15%" top="0" pos="fixed">
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
        {Sidebar_Titles.map((title, index) => (
          <Text
            pl="8"
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
            color={title == selectedMenu && "blue.700"}
            rounded="md"
            key={index}
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

{
  /* {Sidebar_Titles.map((section, index) => (
          <AccordionItem w="full" border="none" px="4" key={index}>
            <AccordionButton w="full" justifyContent="space-between">
              <Text
                fontWeight="600"
                flex="1"
                textAlign="left"
                mr="4"
                fontSize="14"
              >
                {section.heading}
              </Text>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text pl="4" fontSize="14">
                {section.topics.map((topic, topicIndex) => (
                  <Text
                    onClick={() => {
                      handleRouteURL(section.heading, topic);
                      setSelectedMenu(topic);
                    }}
                    py="1"
                    cursor="pointer"
                    bg={topic == selectedMenu && "purple.100"}
                    color={topic == selectedMenu && "blue.700"}
                    rounded="md"
                    key={topicIndex}
                  >
                    {topic}
                  </Text>
                ))}
              </Text>
            </AccordionPanel>
          </AccordionItem>
        ))} */
}
