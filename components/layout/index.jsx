"use client";
import React, { useRef, useEffect, useState } from "react";
import {
  Box,
  Grid,
  GridItem,
  useBreakpoint,
  useBreakpointValue,
} from "@chakra-ui/react";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import { Element, scroller } from "react-scroll";
import MobileNavbar from "./navbar/MobileNavbar";
import ComponentMapping from "../data/content";
import { useStateManagementStore } from "../zustand-store/state-management";

const Layout = () => {
  const sectionRefs = useRef({});
  const { setShowMenu } = useStateManagementStore;
  const isDesktop = useBreakpointValue({ base: false, md: true });

  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  //map the keys of ComponentMapping and make a new useRef out of it
  // useEffect(() => {
  //   Object.keys(ComponentMapping).forEach((key) => {
  //     sectionRefs.current[key] = React.createRef();
  //   });
  // }, []);

  return (
    <Box>
      {isDesktop ? (
        <Grid templateColumns="15% 85%">
          <GridItem w="full" borderRight="0.8px solid #2B3039">
            <Sidebar scrollToSection={scrollToSection} />
          </GridItem>
          <GridItem h="full" w="full">
            <Navbar />
            {/* dynamically call the Components */}
            {Object.keys(ComponentMapping).map((key) => {
              const Component = ComponentMapping[key];
              console.log(Component);
              return (
                <Element name={key} key={key} ref={sectionRefs.current[key]}>
                  <Grid
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
                </Element>
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
              <Element name={key} key={key} ref={sectionRefs.current[key]}>
                <Grid
                  onClick={() => setShowMenu(false)}
                  py="12"
                  templateColumns="1fr"
                  gap="16"
                  px="4"
                  display="flex"
                  borderBottom="0.8px solid #2B3039"
                >
                  <Component />
                </Grid>
              </Element>
            );
          })}
        </>
      )}
    </Box>
  );
};

export default Layout;
