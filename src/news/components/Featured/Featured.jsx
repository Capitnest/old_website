import React from "react";
import BlogItem from "../BlogList/BlogItem";
import BlogList from "../BlogList";

export default function Featured() {
  return (
    <div className="blogList-wrap">
      <BlogItem blog={BlogList} />
    </div>
  );
}
