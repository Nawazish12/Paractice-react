import React from "react";
import Analytice from "./components/Analytice";
import Charts from "./components/Charts";
import TestDemo from "./components/TestDemo";
import TremorParacitce from "./components/TremorParacitce";

const Details = () => {
  return (
    <>
      <Analytice />
      <Charts />
      <div className="mt-20">
        <TestDemo />
      </div>
      <div className="mt-10">
        <TremorParacitce />
      </div>
    </>
  );
};

export default Details;
