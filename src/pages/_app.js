import Layout from "@/components/Layout";
import { StepsProvider } from "@/context/stepsContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <StepsProvider>
      <Component {...pageProps} />;
    </StepsProvider>
  );
}
