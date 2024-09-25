import React from "react";
import { BlinkBlur } from "react-loading-indicators";

const Loading = () => {
  return (
    <div className="text-center my-12">
      <BlinkBlur color="#31cc4c" size="medium" text="" textColor="#66f4ba" />
    </div>
  );
};

export default Loading;
