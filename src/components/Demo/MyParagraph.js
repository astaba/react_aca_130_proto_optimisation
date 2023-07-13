import React from "react";

const MyParagraph = ({ children }) => {
  console.log("MyParagraph is RUNNING");

  return <p>{children}</p>;
};

export default MyParagraph;
