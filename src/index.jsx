import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {
  ChakraProvider,
  ColorModeScript,
  extendTheme,
  ChakraProvidertheme,
} from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
  },
});

ReactDOM.render(
  <>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </>,
  document.getElementById("root")
);
