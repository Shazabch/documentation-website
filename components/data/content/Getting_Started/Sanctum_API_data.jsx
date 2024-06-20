import {
    GridItem,
    useBreakpointValue,
    useClipboard,
    useColorMode,
    Code,
    Heading,
    Text,
    VStack,
    Box,
    IconButton,
  } from "@chakra-ui/react";
  import React, { useState, useEffect } from "react";
  import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
  import { okaidia } from "react-syntax-highlighter/dist/cjs/styles/prism";
  import { MdDone, MdOutlineCopyAll } from "react-icons/md";
  
  const SanctumAPIIntegration = () => {
    const isDesktop = useBreakpointValue({ base: false, md: true });
  
    return (
      <>
        {isDesktop ? (
          <>
            <GridItem h="100%" pos="sticky" top="20" w={{ base: "", xl: "40vw" }}>
              <Details />
            </GridItem>
            <GridItem w={{ base: "", xl: "40vw" }}>
              <Example />
            </GridItem>
          </>
        ) : (
          <>
            <GridItem w="100%">
              <Details />
              <Example />
            </GridItem>
          </>
        )}
      </>
    );
  };
  
  export default SanctumAPIIntegration;
  
  const Details = () => {
    // const bgColor = useColorModeValue("gray.50", "whiteAlpha.200");
  
    return (
      <VStack textAlign="left" p="4" rounded="lg">
        <Heading fontSize="24" w="full">
          Getting Started
        </Heading>
        <Text w="full">
          This guide provides clear instructions on how to integrate the Sanctum API into your application for authentication and user management. Follow the steps and examples below to get started quickly and effectively.
        </Text>
        <br></br>
        <Heading fontSize="24" w="full">
          Base URL
        </Heading>
        <Text w="full">
          <Code>{`https://b2b-dev.idmetagroup.com`}</Code>
        </Text>
        <br></br>
        <Heading fontSize="24" w="full">
          Retrieve CSRF Token
        </Heading>
        <Text w="full">
          This endpoint retrieves the CSRF token necessary for subsequent POST requests.
        </Text>
        <Text w="full">
          Request:
          <Code>{`GET /sanctum/csrf-cookie`}</Code>
        </Text>
        <Text w="full">
          Example:
          <Code>{`curl -X GET "https://b2b-dev.idmetagroup.com/sanctum/csrf-cookie"`}</Code>
        </Text>
        <br></br>
        <Heading fontSize="24" w="full">
          Authenticate User
        </Heading>
        <Text w="full">
          This endpoint is used for user authentication. It requires the CSRF token retrieved from the CSRF Cookie endpoint.
        </Text>
        <Text w="full">
          Request:
          <Code>{`POST /login`}</Code>
        </Text>
        <Text w="full">
          Headers:
          <Code>{`Accept: application/json\nX-XSRF-TOKEN: [CSRF token]`}</Code>
        </Text>
        <Text w="full">
          Body:
          <Code>{`email (text) - User email address.\npassword (text) - User password.`}</Code>
        </Text>
        <Text w="full">
          Example:
          <Code>{`curl -X POST "https://b2b-dev.idmetagroup.com/login" \\\n  -H "Accept: application/json" \\\n  -H "X-XSRF-TOKEN: [CSRF token]" \\\n  -F "email=User-ABCdemo2@demo.com" \\\n  -F "password=asdqwe123"`}</Code>
        </Text>
        <br></br>
        <Heading fontSize="24" w="full">
          Retrieve User Information
        </Heading>
        <Text w="full">
          This endpoint retrieves information about the authenticated user.
        </Text>
        <Text w="full">
          Request:
          <Code>{`GET /api/user`}</Code>
        </Text>
        <Text w="full">
          Example:
          <Code>{`curl -X GET "https://b2b-dev.idmetagroup.com/api/user"`}</Code>
        </Text>
        <br></br>
        <Heading fontSize="24" w="full">
          Log Out User
        </Heading>
        <Text w="full">
          This endpoint logs out the authenticated user.
        </Text>
        <Text w="full">
          Request:
          <Code>{`POST /logout`}</Code>
        </Text>
        <Text w="full">
          Example:
          <Code>{`curl -X POST "https://b2b-dev.idmetagroup.com/logout"`}</Code>
        </Text>
      </VStack>
    );
  };
  
  
  const Example = () => {

    const exampleCode = `
  // 1. Retrieve CSRF token
  curl -X GET "https://b2b-dev.idmetagroup.com/sanctum/csrf-cookie"
  
  // 2. User Authentication
  curl -X POST "https://b2b-dev.idmetagroup.com/login" \\
    -H "Accept: application/json" \\
    -H "X-XSRF-TOKEN: [CSRF token]" \\
    -F "email=example@domain.com" \\
    -F "password=yourpassword"
  
  // 3. Retrieve User Information
  curl -X GET "https://b2b-dev.idmetagroup.com/api/user"
  
  // 4. User Logout
  curl -X POST "https://b2b-dev.idmetagroup.com/logout"
    `;
  
    const { onCopy, hasCopied } = useClipboard(exampleCode);
    const [showTransition, setShowTransition] = useState(false);
    // const bgColor = useColorModeValue("gray.50", "whiteAlpha.200");
    const { colorMode } = useColorMode();
  
    useEffect(() => {
      setShowTransition(hasCopied);
    }, [hasCopied]);
  
    return (
      <VStack pos="relative"  borderRadius="lg">
        <Code mt="6">Example:</Code>
        <SyntaxHighlighter
          customStyle={{
            height: "100%",
            width: "100%",
            backgroundColor: colorMode == "dark" ? "transparent" : "transparent",
          }}
          language="bash"
          style={okaidia}
          wrapLongLines
        >
          {exampleCode}
        </SyntaxHighlighter>
        <Box pos="absolute" top="4" right={{ base: "-4", xl: "2", "2xl": "2" }}>
          <IconButton
            onClick={onCopy}
            aria-label={hasCopied ? "Copied" : "Copy"}
            icon={hasCopied ? <MdDone /> : <MdOutlineCopyAll />}
            bgColor="transparent"
            transition={showTransition ? "all 0.5s ease" : "none"}
          />
        </Box>
      </VStack>
    );
  };
  