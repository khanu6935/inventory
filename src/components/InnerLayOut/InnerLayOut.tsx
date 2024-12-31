import React, { ReactNode } from "react";

const InnerLayOut: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <div className="bg-white  w-full  py-6 flex rounded-2xl  mx-0 ">
        {children}
      </div>
    </>
  );
};

export default InnerLayOut;
