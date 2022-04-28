import React from "react";
import { Wrap, Button } from "@chakra-ui/react";

export default function ExchangesPagination() {
  return (
    <Wrap>
      <a href="/exchanges" style={{ marginRight: "5px" }}>
        <Button>1</Button>
      </a>
      <a href="/exchanges/page/2" style={{ marginRight: "5px" }}>
        <Button>2</Button>
      </a>
      <a href="/exchanges/page/3" style={{ marginRight: "5px" }}>
        <Button>3</Button>
      </a>
    </Wrap>
  );
}
