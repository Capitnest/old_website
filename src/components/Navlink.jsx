import React from "react";
import { NavLink as Link, useLocation } from "react-router-dom";
import { Button } from "@chakra-ui/react";

export default function Navlink({ to, name, activated, ...rest }) {
  const location = useLocation();

  const isActive = location.pathname === to;

  return (
    <Button
      variant={activated ? "solid" : "ghost"}
      colorScheme={activated ? "green" : ""}
      {...rest}
    >
      {name}
    </Button>
  );
}
