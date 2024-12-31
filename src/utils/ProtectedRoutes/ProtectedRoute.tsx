import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = (WrapedComponent: any) => {
  const Wraper = (props: any) => {
    const navigate = useNavigate();
    const isAuthenticate = localStorage.getItem("access_token");
    useEffect(() => {
      if (!isAuthenticate) {
        navigate("/auth/signin");
        return;
      } else {
        const tokenData = JSON.parse(atob(isAuthenticate.split(".")[0]));
        const currentTime = Math.floor(Date.now() / 1000);
        if (tokenData.exp && tokenData.exp < currentTime) {
          localStorage.removeItem("access_token");
          localStorage.clear();
          navigate("/auth/signin");
          return;
        }
      }
    }, []);
    if (!isAuthenticate) {
      return null;
    }
    return <WrapedComponent {...props} />;
  };
  return Wraper;
};

export default ProtectedRoute;
