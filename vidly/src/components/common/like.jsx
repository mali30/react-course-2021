import React from "react";

const Like = (props) => {
  let classes = "fa fa-heart";
  if (!props.liked) classes += "-o";

  return (
    <div>
      <i
        onClick={props.onClick}
        className={classes}
        style={{ cursor: "pointer" }}
        aria-hidden="true"
      ></i>
    </div>
  );
};

export default Like;
