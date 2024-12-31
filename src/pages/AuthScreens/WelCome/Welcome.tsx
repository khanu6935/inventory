import { useNavigate } from "react-router-dom";
import AuthButton from "../../../components/AuthButton/AuthButton";
import AuthLeftSection from "../../../components/AuthLeftSection/AuthLeftSection";
import AuthLayOut from "../../../components/AuthRightLayOut/AuthLayOut";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex w-full md:h-screen h-full">
        <AuthLeftSection />
        <AuthLayOut
          heading="Welcome"
          paragrph="Login with the data you provided during registration."
        >
          <div className="flex flex-col gap-6 md:w-full w-[90%] mt-6">
            <AuthButton
              title="Sign in"
              onClick={() => navigate("/auth/signin")}
              authLoading={false}
            />
            {/* <p className="font-poppins font-normal text-base text-center text-textPrimary">
              Don’t have an account?{" "}
              <span
                onClick={() => navigate("/auth/register")}
                className="font-poppins cursor-pointer  text-base text-center text-buttonPrimary font-medium"
              >
                Sign Up now
              </span>
            </p> */}
          </div>
        </AuthLayOut>
      </div>
    </>
  );
};

export default Welcome;
