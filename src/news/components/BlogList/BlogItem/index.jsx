import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { Button, Badge } from "@chakra-ui/react";

const BlogItem = ({
  blog: {
    description,
    title,
    createdAt,
    authorName,
    authorAvatar,
    cover,
    category,
    id,
  },
}) => {
  return (
    <div className="blogItem-wrap">
      <a href={`/news/${id}`}>
        <img className="blogItem-cover" src={cover} alt="cover" />
      </a>
      <div style={{ marginTop: "7px" }}>
        <Badge colorScheme="green">{category}</Badge>
      </div>
      <a className="title" href={`/news/${id}`}>
        <h3 style={{ fontWeight: "600", fontSize: "20px" }}>{title}</h3>
      </a>
      <p className="blogItem-desc">{description}</p>
      <footer>
        <div className="blogItem-author">
          <img src={authorAvatar} alt="avatar" />
          <div>
            <h6>{authorName}</h6>
            <p>{createdAt}</p>
          </div>
        </div>
        <Button colorScheme="teal" size="sm">
          <Link className="blogItem-link" to={`/news/${id}`}>
            Read More ➝
          </Link>
        </Button>
      </footer>
    </div>
  );
};

export default BlogItem;
