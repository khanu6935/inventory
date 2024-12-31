import { useLocation } from "react-router-dom";
import DropDown from "./DropDown";
import { Images } from "../../assets/Image";
import { IoMdMenu } from "react-icons/io";
import DropdownUser from "./DropdownUser";


interface Props {
  sideBarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const MenuData = [
  { id: 1, title: "Dashboard" },
  { id: 2, title: "Investments" },
  { id: 3, title: "Transactions" },
];

const Header = ({ sideBarOpen, setSidebarOpen }: Props) => {


  const location = useLocation();
  const path = location.pathname.substring(1);

  return (
    <>
      <div className="w-full md:px-10 px-3 lg:sticky fixed bg-white z-[9999] flex justify-between items-center h-[70px]">
        <div className="flex items-center h-full gap-2">
          {path !== "new-offer" && (
            <span
              className="cursor-pointer lg:hidden block text-buttonPrimary"
              onClick={(e) => {
                e.stopPropagation();
                setSidebarOpen(!sideBarOpen);
              }}
            >
              <IoMdMenu size={25} />
            </span>
          )}
          {path === "portfolio" ? (
            <div className="lg:block hidden  h-full">

            </div>
          ) : path === "new-offer" ? (
            <img
              src={Images.zemLogo}
              alt=""
              className="object-contain md:h-full ms:w-full h-16 w-32 cursor-pointer"

            />
          ) : (
            ""
          )}
        </div>
        <div className="flex items-center gap-3.5">
          {path !== "new-offer" && (
            <div>
              <DropDown
                isOffer={false}
                title="My Portfolio"
                width="220px"
                dropDownData={MenuData}
                value=""
              />
            </div>
          )}
          <div className="h-[42px] w-[42px] rounded-full flex items-center justify-center bg-[#EAEFEC]">
            <img src={Images.mark} alt="" />
          </div>
          <DropdownUser />
        </div>
      </div>
    </>
  );
};

export default Header;
