import React, { useState } from "react";
import { NavLink as Link, useLocation } from "react-router-dom";
import { Button } from "@chakra-ui/react";

export default function Navlink({ to, name, activated, ...rest }) {
  const location = useLocation();
  const [show, setShow] = useState(false);

  const showButton = (e) => {
    setShow(true);
  };
  const hideButton = (e) => {
    setShow(false);
  };

  return (
    <div onMouseEnter={showButton} onMouseLeave={hideButton}>
      {show || activated ? (
        <Button
          variant="solid"
          colorScheme="green"
          {...rest}
          padding="10px"
          marginRight="10px"
          height="35px"
        >
          {name}
        </Button>
      ) : (
        <Button
          variant="ghost"
          {...rest}
          padding="10px"
          marginRight="10px"
          height="35px"
        >
          {name}
        </Button>
      )}
    </div>
  );
}
