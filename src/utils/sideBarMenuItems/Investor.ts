import {
  BankIcon,
  DocumentIcon,
  DropDownIcon,
  HomeIcon,
  InvestingIcon,
  PortfolioIcon,
  SettingIcon,
  TransferIcon,
} from "../../assets/sideBarIcons/sideBarIcons";

export const InvestorsScreens = [
  {
    link: "Opportunities",
    path: "/opportunity",
    icon: HomeIcon,
  },
  {
    link: "My Portfolio",
    path: "/portfolio",
    icon: PortfolioIcon,
  },
  {
    link: "Investing Accounts",
    path: "/Investing-accounts",
    icon: InvestingIcon,
  },
  {
    link: "Documents",
    path: "/Documents",
    icon: DocumentIcon,
    subLinks: [
      {
        link: "View & Download Doc",
        path: "/documents/upload",
        icon: TransferIcon,
      },
      {
        link: "Account Statement",
        path: "/documents/view",
        icon: TransferIcon,
      },
      { link: "Sign Document", path: "/documents/view", icon: TransferIcon },
    ],
    icon2: DropDownIcon,
  },
  {
    link: "Transfer Money",
    path: "/transfer-money",
    icon: TransferIcon,
  },
  {
    link: "Bank Account",
    path: "/Bank-account",
    icon: BankIcon,
  },
  {
    link: "Settings",
    path: "/setting",
    icon: SettingIcon,
  },
];
