"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { Box, Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import { scroller } from "react-scroll";
import MobileNavbar from "./navbar/MobileNavbar";
import ComponentMapping from "../data/content";
import { useStateManagementStore } from "../zustand-store/state-management";
import Sidebar from "./sidebar";
import Navbar from "./navbar";

const Layout = () => {
  const router = useRouter();
  const { setShowMenu } = useStateManagementStore;
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  const sidebarTitles = Object.keys(ComponentMapping).map(
    (key) => ComponentMapping[key].name
  );

  const handleNavigation = (id) => {
    router.push(`#${id.toLowerCase()}`, undefined, { shallow: true });
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // scrollToSection(id);

  // useEffect(() => {
  //   const id = router.asPath.split("/");
  //   if (id) {
  //     document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  //   }
  // }, [router.asPath]);

  return (
    <Box>
      {isDesktop ? (
        <Grid
          templateColumns={{
            lg: "25% 75%",
            xl: "20% 80%",
            "2xl": "20% 80%",
            "3xl": "20% 80%",
          }}
        >
          <GridItem
            border="5px solid red"
            w="full"
            borderRight="0.8px solid #2B3039"
          >
            <Sidebar titles={sidebarTitles} handleClick={handleNavigation} />
          </GridItem>
          <GridItem h="full" w="full" border="5px solid orange">
            <Navbar />

            {Object.keys(ComponentMapping).map((key) => {
              const Component = ComponentMapping[key];
              return (
                <Grid
                  key={Component.name}
                  id={Component.name}
                  py={{ base: 4, xl: 20 }}
                  gap={{ lg: 8, xl: "", "2xl": "" }}
                  px={{ lg: 10, xl: "", "2xl": "80" }}
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
