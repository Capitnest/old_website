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
  // Initial color mode will be dark
  initialColorMode: "dark",
});

ReactDOM.render(
  <>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.initialColorMode} />
      <App />
    </ChakraProvider>
  </>,
  document.getElementById("root")
);
