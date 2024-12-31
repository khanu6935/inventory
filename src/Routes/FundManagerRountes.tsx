import { Route, Routes } from "react-router-dom";
import PageTitle from "../components/PageTitle/PageTitle";
import { FundManagerScreens } from "../utils/sideBarMenuItems/FundManager";

const FundManagerRoutes = () => (
  <>
    <Routes>
      {FundManagerScreens.map((screen, index) => (
        <Route
          key={index}
          path={screen.path}
          element={
            <>
              <PageTitle title={screen.link} />
              <screen.component />
            </>
          }
        >
          {screen.subLinks &&
            screen.subLinks.map((subLink, subIndex) => (
              <Route
                key={subIndex}
                path={subLink.path}
                element={
                  <>
                    <PageTitle title={subLink.link} />
                    <subLink.component />
                  </>
                }
              />
            ))}
        </Route>
      ))}
    </Routes>
  </>
);

export default FundManagerRoutes;
