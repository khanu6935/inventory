import {
  DocumentIcon,
  HomeIcon,
} from "../../assets/sideBarIcons/sideBarIcons";
import Home from "../../pages/FundManager/Home.tsx/Home";
import Investments from "../../pages/FundManager/Investments/Investments";
import Investor from "../../pages/FundManager/Investors/Investor";


export const FundManagerScreens = [
  {
    link: "Items",
    path: "/items",
    icon: DocumentIcon,
    component: Investments,
  },
  {
    link: "Inventory",
    path: "/inventory",
    icon: HomeIcon,
    component: Home,
  },
  {
    link: "Warehouse",
    path: "/investors",
    icon: DocumentIcon,
    component: Investor,
  },



];
