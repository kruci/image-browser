import React, { useState, useEffect } from "react";

export default function UrlSelector(props) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={"UrlSelector" + (isExpanded ? " expanded" : "")}
      onMouseOver={() => setIsExpanded(true)}
      onMouseOut={() => setIsExpanded(false)}
    >

      <div className="pageUrl">
      <form>
        <label htmlFor="pageUrl">Page url</label>
        <input
          name="pageUrl"
          id="pageUrl"
          onChange={props.handleInputChange}
          autocomplete="off"
        />
        </form>
      </div>

      <p>Leave blank space in url, it will be replaced by number from range.</p>

      <div className="range">
        <label htmlFor="rangeFrom">Range from</label>
        <input
          name="rangeFrom"
          id="rangeFrom"
          onChange={props.handleInputChange}
          autocomplete="off"
        />
        <label htmlFor="rangeTo">to</label>
        <input
          name="rangeTo"
          id="rangeTo"
          onChange={props.handleInputChange}
          autocomplete="off"
        />
      </div>

      <div className="imageUrlPattern">
        <label htmlFor="imageUrlPattern">Only images with url containing</label>
        <input
          name="imageUrlPattern"
          id="imageUrlPattern"
          onChange={props.handleInputChange}
          autocomplete="off"
        />
      </div>

      <div className="imageTag">
        <label htmlFor="imageTag">Only images inside elements with tag </label>
        <input
          name="imageTag"
          id="imageTag"
          onChange={props.handleInputChange}
          autocomplete="off"
        />
      </div>

      <button onClick={props.search}>Show</button>
    </div>
  );
}
