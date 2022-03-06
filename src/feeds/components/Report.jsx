import {
  Button,
  useToast,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  Flex,
} from "@chakra-ui/react";
import React, { Component } from "react";
import { MdReport, MdReportOff } from "react-icons/md";

class Report extends Component {
  state = {
    liked: false,
  };

  toggleLike = (state) => {
    this.setState({
      liked: !this.state.liked,
    });
  };

  render() {
    const changeColor = this.state.liked ? (
      <Button isDisabled={true}>
        <MdReportOff />
      </Button>
    ) : (
      <Popover>
        <PopoverTrigger>
          <Button>
            <MdReport />
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />

          <PopoverBody>
            <h1>Are you sure you want to report this post?</h1>
            <Flex>
              <Button
                colorScheme="red"
                onClick={() => {
                  this.toggleLike();
                }}
                marginTop="10px"
              >
                Yes
              </Button>
            </Flex>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    );

    return <>{changeColor}</>;
  }
}

export default Report;
