import React from "react";
import ImagesSinglePage from "./ImagesSinglePage";

export default function ImageList(props) {
  return (
    <div>
      {Object.keys(props.images).map(obj => (
        <ImagesSinglePage key={obj} url={obj} images={props.images[obj]} />
      ))}
    </div>
  );
}
