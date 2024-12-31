import { Route } from "react-router-dom";
import PageTitle from "../components/PageTitle/PageTitle";
import Welcome from "../pages/AuthScreens/WelCome/Welcome";
import SignIn from "../pages/AuthScreens/Signin/SignIn";
import { Routes } from "react-router-dom";

const AuthRoutes = () => (
  <>
    <Routes>
      <Route
        index
        element={
          <>
            <PageTitle title="Welcome" />
            <Welcome />
          </>
        }
      />
      <Route
        path="/auth/signin"
        element={
          <>
            <PageTitle title="SignIn" />
            <SignIn />
          </>
        }
      />
    </Routes>
  </>
);

export default AuthRoutes;
