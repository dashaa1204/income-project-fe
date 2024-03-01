import Layout from "@/components/Layout";
import { StepsProvider } from "@/context/stepsContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(
    <StepsProvider>
      <Component {...pageProps} />;
    </StepsProvider>
  );
}
