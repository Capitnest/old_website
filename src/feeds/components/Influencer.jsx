import React from "react";
import { Avatar } from "@chakra-ui/react";

export default function Tweet({ blog: { logo, name, src } }) {
  return (
    <a href={src} target="_blank">
      <Avatar src={logo} name={name} />
    </a>
  );
}
