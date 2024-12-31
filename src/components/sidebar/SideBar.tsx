import { useEffect, useState, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FundManagerScreens } from "../../utils/sideBarMenuItems/FundManager";
import { Images } from "../../assets/Image";

interface Props {
  sideBarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const SideBar = ({ sideBarOpen, setSidebarOpen }: Props) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const path = useLocation();
  const navigate = useNavigate();
  const pathName = path.pathname;

  const sidebar = useRef<any>(null);
  const trigger = useRef<any>(null);

  const toggleDropdown = (link: string) => {
    setOpenDropdown((prev) => (prev === link ? null : link));
  };

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (!sideBarOpen || sidebar.current.contains(target) || trigger.current.contains(target)) return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  }, [sideBarOpen]);

  // close on Escape key press
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sideBarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  }, [sideBarOpen]);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 mt-16 lg:mt-2 z-9999 overflow-x-hidden flex h-screen flex-col overflow-y-hidden bg-white pr-8 z-50 duration-300 ease-linear dark:bg-boxdark lg:translate-x-0 ${
        sideBarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="w-[300px] overflow-x-hidden h-full">
        <div className="flex md:justify-start pl-8 justify-around">
          <img
            src={Images.zemLogo}
            alt="Logo"
            className="object-contain cursor-pointer"
            onClick={() => navigate("/home")}
          />
        </div>

        <div className="lg:mt-12 mt-4 flex w-full">
          <ul className="flex flex-col gap-3 w-[90%]">
            {FundManagerScreens &&
              FundManagerScreens.map((item, index) => {
                const isActive = pathName === item.path;
                const IconComponent = item.icon;

                return (
                  <div key={index}>
                    <Link
                      to={item.path}
                      onClick={() => {}}
                      className="flex justify-between w-full"
                    >
                      <li
                        className={`flex ${
                          isActive ? "bg-buttonPrimary text-white" : "bg-transparent"
                        } items-center justify-between gap-3 pl-8 py-2 w-full rounded-tr-lg rounded-br-lg`}
                      >
                        <span className="flex items-center gap-3">
                          <span>
                            <IconComponent color={isActive ? "white" : "#4D4D4D"} />
                          </span>
                          {item.link}
                        </span>
                      </li>
                    </Link>
                  </div>
                );
              })}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
