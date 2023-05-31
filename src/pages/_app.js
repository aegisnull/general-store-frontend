import "@/styles/globals.css";
import { MantineProvider } from "@mantine/core";
import { CartProvider } from "@/contexts/CartContext";
import Layout from "@/components/Layout/Layout";

export default function App({ Component, pageProps }) {
  return (
    <>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: "dark",
        }}
      >
        <CartProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </CartProvider>
      </MantineProvider>
    </>
  );
}
