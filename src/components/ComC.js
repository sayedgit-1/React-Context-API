import React, { useContext } from "react";
import { data1, data2 } from "../App";

const ComC = () => {
  const myName = useContext(data1);
  const place = useContext(data2);
  return (
    <div>
      <h1>
        Hi! I am {myName} and i am currently living in {place}
      </h1>
    </div>
  );
};

export default ComC;
