"use client";
import React, { useEffect } from "react";
import { Box, Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import { scroller } from "react-scroll";
import MobileNavbar from "./navbar/MobileNavbar";
import ComponentMapping from "../data/content";
import { useStateManagementStore } from "../zustand-store/state-management";
import { useRouter } from "next/router";

const Layout = () => {
  const router = useRouter();
  const { setShowMenu, setSidebarTitles } = useStateManagementStore;
  const isDesktop = useBreakpointValue({ base: false, md: true });

  const sidebarTitles = Object.keys(ComponentMapping).map(
    (key) => ComponentMapping[key].name
  );
  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  useEffect(() => {
    const id = router.asPath.split("/");
    if (id) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  }, [router.asPath]);

  const handleNavigation = (id) => {
    router.push(`#${id}`, undefined, { shallow: true });
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    scrollToSection(id);
  };

  return (
    <Box>
      {isDesktop ? (
        <Grid templateColumns="15% 85%">
          <GridItem w="full" borderRight="0.8px solid #2B3039">
            <Sidebar titles={sidebarTitles} handleClick={handleNavigation} />
          </GridItem>
          <GridItem h="full" w="full">
            <Navbar />

            {Object.keys(ComponentMapping).map((key) => {
              const Component = ComponentMapping[key];
              return (
                <Grid
                  key={Component.name}
                  id={Component.name}
                  py={{ base: 4, xl: 20 }}
                  templateColumns="1fr"
                  gap="16"
                  pl="16"
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
