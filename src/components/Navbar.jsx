import { Show, Hide } from "@chakra-ui/react";
import React from "react";

import Desktop from "./Navbar/Desktop";
import Mobile from "./Navbar/Mobile";

export function Navbar() {
  return (
    <>
      <Hide breakpoint="(max-width: 920px)">
        <Desktop />
      </Hide>
      <Show breakpoint="(max-width: 920px)">
        <Mobile />
      </Show>
    </>
  );
}
