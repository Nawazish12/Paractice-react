import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
  const { data: userData = [] } = useQuery(
    ["getUserData"],
    () => {
      return axios.get(`/users`);
    },
    {
      select: (res) => {
        return res;
      },
    }
  );

  console.log(userData);
  return (
    <div>
      <h1>
        {userData?.data?.map((val, i) => (
          <div key={i}>{val.name}</div>
        ))}
      </h1>
    </div>
  );
};

export default Home;
