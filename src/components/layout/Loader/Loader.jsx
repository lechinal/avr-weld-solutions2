import React from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <ClimbingBoxLoader color="#ce9233" />;
    </div>
  );
};

export default Loader;
