import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Test() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = `http://127.0.0.1:5000/feeds/general`;

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setPosts(response.data);
        console.log(response);
        console.log("Hello");
        console.log(posts);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });

    //scroll to the top
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {console.log(posts)}
      {posts.map((tweet) => (
        <div>
          <p>{tweet.date}</p>
          <p>{tweet.name}</p>
          <p>{tweet.source}</p>
          <p>{tweet.title}</p>
        </div>
      ))}
    </>
  );
}
