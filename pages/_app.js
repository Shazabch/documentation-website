import Layout from "@/components/layout";
import { Button, ChakraProvider, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
