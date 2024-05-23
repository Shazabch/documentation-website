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
import Introduction from "../data/content/Introduction";
import Authentication from "../data/content/Authentication";
import ConnectedAccounts from "../data/content/ConnectedAccounts";
import Errors from "../data/content/Errors";
import { Element, scroller } from "react-scroll";
import ExpandingRequests from "../data/content/Expanding Responses";
import Metadata from "../data/content/Metadata";
import IdempotentRequests from "../data/content/Idempotent Requests";
import MobileSidebar from "./sidebar/MobileSidebar";
import MobileNavbar from "./navbar/MobileNavbar";
import { useStateManagementStore } from "../zustand-store/state-management";

const Layout = () => {
  const sectionRefs = useRef({});
  const { menu, setShowMenu } = useState("");
  console.log(sectionRefs);
  const isDesktop = useBreakpointValue({ base: false, md: true });

  const componentMapping = {
    introduction: Introduction,
    authentication: Authentication,
    connected_accounts: ConnectedAccounts,
    errors: Errors,
    expanding_requests: ExpandingRequests,
    metadata: Metadata,
    idempotent_requests: IdempotentRequests,
  };

  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  //map the keys of componentMapping and make a new useRef out of it
  // useEffect(() => {
  //   Object.keys(componentMapping).forEach((key) => {
  //     sectionRefs.current[key] = React.createRef();
  //   });
  // }, []);

  return (
    <div border="2px solid re">
      {isDesktop ? (
        <Grid templateColumns="15% 85%">
          <GridItem w="full" borderRight="0.8px solid #2B3039">
            <Sidebar scrollToSection={scrollToSection} />
          </GridItem>
          <GridItem h="full" w="full">
            <Navbar />
            {/* dynamically call the Components */}
            {Object.keys(componentMapping).map((key) => {
              const Component = componentMapping[key];
              console.log(Component);
              return (
                <Element name={key} key={key} ref={sectionRefs.current[key]}>
                  <Grid
                    py="20"
                    templateColumns="1fr"
                    gap="16"
                    px="4"
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
          {Object.keys(componentMapping).map((key) => {
            const Component = componentMapping[key];
            return (
              <Element name={key} key={key} ref={sectionRefs.current[key]}>
                <Grid
                  onClick={() => setShowMenu(false)}
                  py="20"
                  templateColumns="1fr"
                  gap="16"
                  px="4"
                  display="flex"
                >
                  <Component />
                </Grid>
              </Element>
            );
          })}
        </>
      )}
    </div>
  );
};

export default Layout;
