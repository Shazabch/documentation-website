import React, { useEffect, useState } from "react";
import { Text, Box, Button, VStack } from "@chakra-ui/react";
import SIDEBAR_DATA from "@/components/data/Sidebar";
import { useStateManagementStore } from "../../zustand-store/state-management";
import { useRouter } from "next/navigation";

const MobileSidebar = ({ scrollToSection }) => {
  const router = useRouter();

  const {
    showMenu,
    selectedMenu,
    setShowMenu,
    setSelectedMenu,
    setCurrentRoute,
    currentRoute,
  } = useStateManagementStore();
  const handleRouteURL = (heading, topic) => {
    const formattedHeading = heading.replace(/ /g, "_").toLowerCase();
    const formattedTopic = topic.replace(/ /g, "_").toLowerCase();
    setCurrentRoute(localStorage.setItem("route", formattedTopic));
    router.push(`/${formattedHeading}/${formattedTopic}`, undefined, {
      shallow: true,
    });
    setShowMenu(false);
  };
  setTimeout(() => {
    scrollToSection(localStorage.getItem("route"));
  }, 100);

  return (
    <Box
      h="100dvh"
      overflowY="scroll"
      pos="fixed"
      top="14"
      bgColor="#1a202c"
      px="4"
      zIndex="1"
    >
      <>
        {SIDEBAR_DATA.map((section, index) => (
          <Box order="none" key={index}>
            <Text
              fontSize="16"
              fontWeight="700"
              _hover={{
                color: "gray.900",
              }}
              flex="1"
              textAlign="left"
            >
              {section.heading}
            </Text>
            <Box pb={4}>
              <Text as="ul">
                {section.topics.map((topic, topicIndex) => (
                  <Text
                    onClick={() => {
                      handleRouteURL(section.heading, topic);
                      setSelectedMenu(topic);
                    }}
                    py="1"
                    fontSize="14"
                    fontWeight="300"
                    cursor="pointer"
                    bg={topic == selectedMenu && "purple.100"}
                    color={topic == selectedMenu && "blue.700"}
                    rounded="md"
                    as="li"
                    key={topicIndex}
                  >
                    {topic}
                  </Text>
                ))}
              </Text>
            </Box>
          </Box>
        ))}
      </>
    </Box>
  );
};

export default MobileSidebar;
