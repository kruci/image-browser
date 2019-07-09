import React from "react";
import ImagesSinglePage from "./ImagesSinglePage";

export default function ImageList(props) {
  return (
    <div className="ImageList">
      {Object.keys(props.images).map(obj => (
        <ImagesSinglePage key={obj+props.refresh} url={obj} images={props.images[obj]} refresh={props.refresh} />
      ))}
    </div>
  );
}
