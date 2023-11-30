import React from "react";

type PostItProps = {
  position: "right" | "left";
};

const PostIt: React.FC<PostItProps> = ({ position }) => {
  const postItClass = position === "right" ? "post-it-right" : "post-it-left";

  return (
    <div className="container mt-5">
      <div className={postItClass}>
        <div className="tape"></div>
        <h4 className="text-dark">Tommy's favorite</h4>
        <p className="text-muted">Best apple pie ever.</p>
      </div>
    </div>
  );
};

export default PostIt;
