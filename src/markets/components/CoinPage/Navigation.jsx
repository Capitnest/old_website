import React from "react";
import { Flex, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Navigation(props) {
  const id = props.id;

  return (
    <Flex marginBottom="20px" color="#A0AEC0" marginLeft="-15px">
      <Link to="/markets">
        <Button variant="Link">coins</Button>
      </Link>
      <span style={{ marginTop: "7px" }}>/</span>

      <Button variant="Link">{id}</Button>
    </Flex>
  );
}
