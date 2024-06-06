import Layout from "@/components/layout/Layout";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      {/* <Component {...pageProps} /> */}
    </ChakraProvider>
  );
}

export default MyApp;
