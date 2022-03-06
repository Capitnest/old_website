import { Button } from "@chakra-ui/react";
import React, { Component } from "react";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { HiHeart } from "react-icons/hi";

class Like extends Component {
  state = {
    liked: false,
  };

  toggleLike = (state) => {
    this.setState({
      liked: !this.state.liked,
    });
  };

  render() {
    const changeColor = this.state.liked ? <FcLike /> : <HiHeart />;

    return (
      <Button padding="0px" onClick={this.toggleLike}>
        {changeColor}
      </Button>
    );
  }
}

export default Like;
