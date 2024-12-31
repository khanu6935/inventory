import React, { ReactNode, useState } from "react";
import Header from "../Header";
import SideBar from "../sidebar/SideBar";

const DefaultLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  return (
    <>
      <div>
        <div className="flex w-full">
          <div className="lg:w-[300px] w-auto">
            <SideBar
              sideBarOpen={sideBarOpen}
              setSidebarOpen={setSideBarOpen}
            />
          </div>

          <div className="flex w-full min-w-0 flex-col">
            <Header sideBarOpen={sideBarOpen} setSidebarOpen={setSideBarOpen} />
            <main className=" lg:mt-0   max-h-[90vh] flex justify-center w-full  min-w-0  overflow-y-auto mt-20">
              {children}
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default DefaultLayout;
