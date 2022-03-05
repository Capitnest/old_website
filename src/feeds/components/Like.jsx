import { Button } from "@chakra-ui/react";
import React, { Component } from "react";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";

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
    const changeColor = this.state.liked ? <FcLike /> : <FcLikePlaceholder />;

    return (
      <Button padding="3%" onClick={this.toggleLike}>
        {changeColor}
      </Button>
    );
  }
}

export default Like;
