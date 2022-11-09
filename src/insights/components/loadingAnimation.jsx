import React from "react";
import { Skeleton } from "@chakra-ui/react";

export default function loadingAnimation() {
  return (
    <div>
      <Skeleton>
        <div>contents wrapped</div>
        <div>won't be visible</div>
      </Skeleton>
    </div>
  );
}
