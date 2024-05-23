import Layout from "@/components/layout";
import { ChakraProvider, Text } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Layout>
        <Text>hello</Text>
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
