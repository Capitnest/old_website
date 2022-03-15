import React from "react";
import { FormLabel, Switch, Flex } from "@chakra-ui/react";

export default function Notifications() {
  return (
    <>
      <h1 style={{ fontSize: "40px", fontWeight: "bold" }}>Notifications</h1>

      <br />

      <Flex>
        <FormLabel htmlFOr="Newsletter" fontSize="23px">
          Newsletter
        </FormLabel>
        <Switch id="Newsletter" defaultChecked isDisabled size="lg" />
      </Flex>
    </>
  );
}
