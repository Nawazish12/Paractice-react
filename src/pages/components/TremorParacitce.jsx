import React from "react";
import { Callout } from "@tremor/react";

const TremorParacitce = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "10px",
        }}
      >
        <div>
          <Callout
            title="what's title"
            text="how many number of defined of the substitution"
            icon={undefined}
            color="red"
            height="30p"
            marginTop="mt-0"
          />
        </div>
        <div>
          <Callout
            title="what's title"
            text="how many number of defined of the substitution"
            icon={undefined}
            color="blue"
            height="30p"
            marginTop="mt-0"
          />
        </div>
        <div>
          <Callout
            title="what's title"
            text="how many number of defined of the substitution"
            icon={undefined}
            color="teal"
            height="30p"
            marginTop="mt-0"
          />
        </div>
      </div>
    </>
  );
};

export default TremorParacitce;
