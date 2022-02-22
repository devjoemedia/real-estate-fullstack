import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      style={{
        width: "200px",
        height: "400px",
        margin: "0 auto",
        display: "grid",
        placeItems: "center",
      }}
    >
      <div>
        <h3>Not Found Please</h3>
        <Link to="/">Back to home</Link>
      </div>
    </div>
  );
};

export default NotFound;
