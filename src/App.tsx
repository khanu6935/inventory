import { useEffect, useState } from "react";
import Loader from "./components/Loader/Loader";
import AuthRoutes from "./Routes/AuthRoutes";
import FundManagerRoutes from "./Routes/FundManagerRountes";
import ProtectedRoute from "./utils/ProtectedRoutes/ProtectedRoute";

function App() {
  const [loading, setLoader] = useState(true);
  const ProtectedFundManager = ProtectedRoute(FundManagerRoutes);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <AuthRoutes />
      <ProtectedFundManager />
    </>
  );
}

export default App;
