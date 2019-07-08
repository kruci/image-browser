import React from "react";

export default function UrlSelector(props) {
  return (
    <div className="UrlSelector">

      <p>Leave blank space in url, it will be replaced by number from range.</p>

      <div className="pageUrl">
      <label htmlFor="pageUrl">Page url</label>
      <input name="pageUrl" id="pageUrl" onChange={props.handleInputChange} />
      </div>

      <div className="range">
      <label htmlFor="rangeFrom">Range from</label>
      <input
        name="rangeFrom"
        id="rangeFrom"
        onChange={props.handleInputChange}
      />
      <label htmlFor="rangeTo">to</label>
      <input name="rangeTo" id="rangeTo" onChange={props.handleInputChange} />
      </div>

      <div className="imagePattern">
      <label htmlFor="imagePattern">Only images containing </label>
      <input
        name="imagePattern"
        id="imagePattern"
        onChange={props.handleInputChange}
      />
      </div>

      <button onClick={props.search}>Show</button>
    </div>
  );
}
