import React from "react";
import ScrollToTop from "react-scroll-to-top";
import { useColorMode } from "@chakra-ui/react";

export default function ScrollButton() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      {colorMode === "dark" ? (
        <ScrollToTop smooth width="30" height="28" viewBox=" 0 0 160 256" />
      ) : (
        <ScrollToTop
          smooth
          width="28"
          height="28"
          viewBox=" 0 0 160 256"
          style={{ backgroundColor: "#111" }}
          color="white"
        />
      )}
    </>
  );
}
