import React from "react";
import { TailSpin } from "react-loader-spinner";

const Spinner = ({ fullScreen = false, buttonLoading = false }) => {
  return (
    <div
      className={`flex flex-col justify-center items-center ${
        fullScreen ? "h-screen" : ""
      }`}
    >
      <TailSpin
        height={buttonLoading ? 40 : 100}
        width={buttonLoading ? 75 : 200}
        color={buttonLoading ? "#fff" : "#000"}
        radius="1"
        visible={true}
      />
    </div>
  );
};

export default Spinner;
