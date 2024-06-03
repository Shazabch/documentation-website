"use client";
import React from "react";
import { useRouter } from "next/router";
import {
  Box,
  Grid,
  GridItem,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import MobileNavbar from "./navbar/MobileNavbar";
import ComponentMapping from "../data/content";
import { useStateManagementStore } from "../zustand-store/state-management";
import APIData from "@/components/common/api_data";
import Sidebar from "./sidebar";
import Navbar from "./navbar";

const Layout = () => {
  const router = useRouter();
  const { setShowMenu } = useStateManagementStore;
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  const handleNavigation = (id) => {
    router.push(`#/api1/${id.toLowerCase()}`, undefined, { shallow: true });
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box
      // bgGradient="linear(to-t, #121539 10%, #121539 100%) "
      bgGradient="linear(to-b, #101332, #1D225F, #252C7D)"
      w="full"
      // color={useColorModeValue("#121539", "RGBA(255, 255, 255, 0.92)")}
    >
      {isDesktop ? (
        <Grid
          templateColumns={{
            lg: "25% 75%",
            xl: "20% 80%",
            "2xl": "20vw 80vw",
            "3xl": "20% 80%",
          }}
          overflowX="hidden"
        >
          <GridItem w="full">
            <Sidebar titles={APIData} handleClick={handleNavigation} />
          </GridItem>
          <GridItem
            h="full"
            w="full"
            bgColor={useColorModeValue("white", "#121539 100%")}
          >
            <Navbar />

            {Object.keys(ComponentMapping).map((key) => {
              const Component = ComponentMapping[key];
              return (
                <Grid
                  w="100%"
                  key={Component.name}
                  id={Component.name}
                  py={{ base: 4, xl: 20 }}
                  gap={{ lg: 8, xl: "", "2xl": "" }}
                  px={{ lg: 10, xl: "20", "2xl": "20", "3xl": "80" }}
                  display="flex"
                  zIndex="-1"
                  borderBottom="0.8px solid #2B3039"
                >
                  <Component />
                </Grid>
              );
            })}
          </GridItem>
        </Grid>
      ) : (
        <>
          <MobileNavbar />
          {Object.keys(ComponentMapping).map((key) => {
            const Component = ComponentMapping[key];
            return (
              <Grid
                onClick={() => setShowMenu(false)}
                key={Component.name}
                id={Component.name}
                py="12"
                templateColumns="1fr"
                gap="16"
                px="4"
                display="flex"
                borderBottom="0.8px solid #2B3039"
              >
                <Component />
              </Grid>
            );
          })}
        </>
      )}
    </Box>
  );
};

export default Layout;
