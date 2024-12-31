import React, { ReactNode } from "react";
import { Images } from "../../assets/Image";

const AuthLayOut: React.FC<{
  children: ReactNode;
  heading: string;
  paragrph: string;
}> = ({ children, heading, paragrph }) => {
  return (
    <>
      <div className="md:w-1/2 w-full  flex flex-col justify-center items-center">
        <img src={Images.zemLogo} alt="" className="h-28 w-64 object-contain" />
        <div className="mt-12 flex flex-col md:w-[80%] w-full gap-4">
          <h2 className="text-black font-semibold lg:text-5xl text-3xl text-center font-poppins ">
            {heading}
          </h2>
          <p className="font-poppins font-normal text-base text-center text-textPrimary">
            {paragrph}
          </p>
          <main className="flex justify-center ">{children}</main>
        </div>
      </div>
    </>
  );
};

export default AuthLayOut;
