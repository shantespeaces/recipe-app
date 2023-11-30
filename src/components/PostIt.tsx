import React from "react";

type PostItProps = {
  position: "right" | "left";
  heading: string;
  note: string;
  backgroundColor: string;
  fontFamily: string;
};

function PostIt({
  position,
  heading,
  note,
  backgroundColor,
  fontFamily,
}: PostItProps) {
  const postItClass = position === "right" ? "post-it-right" : "post-it-left";
  const postItStyles = {
    backgroundColor: backgroundColor,
    fontFamily: fontFamily,
  };

  return (
    <div className="container mt-5">
      <div className={postItClass} style={postItStyles}>
        <div className="tape"></div>
        <h4 className="text p-3">{heading}</h4>
        <p className="text-dark">{note}</p>
      </div>
    </div>
  );
}

export default PostIt;
