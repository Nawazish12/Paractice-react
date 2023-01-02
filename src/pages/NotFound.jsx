import React from "react";

const NotFound = ({ minus }) => {
  console.log("running child");

  return (
    <div>
      {/* <h1>{minus}</h1> */}

      <h1>check memoziation values</h1>
    </div>
  );
};

export default React.memo(NotFound);
