import "../styles/globals.css";
import type { AppProps } from "next/app";
import { StyledEngineProvider } from "@mui/material";
import GraphQLProvider from "../gql";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GraphQLProvider>
      <StyledEngineProvider injectFirst>
        <Component {...pageProps} />
      </StyledEngineProvider>
    </GraphQLProvider>
  );
}

export default MyApp;
