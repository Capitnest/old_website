import React from "react";
import { Avatar } from "@chakra-ui/react";

export default function Tweet({ blog: { logo, name, src } }) {
  return <Avatar src={logo} name={name} />;
}
