import {
  DocumentIcon,
  HomeIcon,
} from "../../assets/sideBarIcons/sideBarIcons";
import Home from "../../pages/Views/Inventory.tsx";
import Investments from "../../pages/Views/Items";
import Investor from "../../pages/Views/warehouse";


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
