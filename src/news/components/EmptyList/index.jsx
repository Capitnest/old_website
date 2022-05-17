import React from "react";

const EmptyList = () => (
  <div
    className="emptyList-wrap"
    style={{
      marginTop: "50px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    }}
  >
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <img src="/images/empty.png" alt="empty" width="80%" />
    </div>
    <h1
      style={{
        fontfamily: "'Inter', sans-serif",
        fontWeight: 700,
        fontSize: "30px",
        marginTop: "20px",
        textAlign: "center",
      }}
    >
      No Results Found :(
    </h1>
  </div>
);

export default EmptyList;
