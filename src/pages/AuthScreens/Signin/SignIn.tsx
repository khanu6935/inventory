import AuthLeftSection from "../../../components/AuthLeftSection/AuthLeftSection";
import AuthLayOut from "../../../components/AuthRightLayOut/AuthLayOut";
import AuthButton from "../../../components/AuthButton/AuthButton";
import InputFeild from "../../../components/InputFeild/InputFeild";
import { Images } from "../../../assets/Image";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { SignInSchema } from "../../../components/schema/Schema";
import ValidationError from "../../../components/ValidationError/ValidationError";
import { UserSignIn } from "../../../store/Auth/AuthAction";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { useAuthSelector } from "../../../hooks/selectors/useSelectorHook";
import BtnLoader from "../../../components/BtnLoader/BtnLoader";
import { CiLock } from "react-icons/ci";
import { CiUnlock } from "react-icons/ci";
import { useState } from "react";

const defaultValues = {
  username: "",
  password: "",
};

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { authLoading } = useAuthSelector();

  const handleShowPassword = () => {
    setShowPassword((prev: boolean) => !prev);
  };

  const fundManagerAction = () => {
    navigate("/items");
  };


  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  const formik = useFormik({
    initialValues: defaultValues,
    validationSchema: SignInSchema,
    onSubmit: (values) => {
      dispatch(
        UserSignIn({
          values: values,
          extra: {
            fundManagerAction: fundManagerAction,
          },
        })
      );
    },
  });

  return (
    <>
      <div className="flex w-full md:h-screen h-full pb-6">
        <AuthLeftSection />
        <AuthLayOut heading="Welcome Back" paragrph="Please enter your details">
          <div className="flex flex-col gap-6 md:w-full w-[90%] mt-6">
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col gap-6"
            >
              <div className="flex flex-col">
                <InputFeild
                  label="Email Address"
                  placeholder="example@gmail.com"
                  name="username"
                  type="text"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                />
                <ValidationError
                  touched={formik.touched.username}
                  error={formik.errors.username}
                />
              </div>

              <div className="flex flex-col">
                <InputFeild
                  label="Password"
                  placeholder="************"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  password={true}
                  searchIcon={showPassword ? <CiLock /> : <CiUnlock />}
                  handleClick={handleShowPassword}
                />
                <ValidationError
                  touched={formik.touched.password}
                  error={formik.errors.password}
                />
              </div>


              <AuthButton
                authLoading={authLoading}
                title={
                  authLoading ? (
                    <BtnLoader color="white" loading={authLoading} />
                  ) : (
                    "Sign in"
                  )
                }
              />
            </form>

            <div className="flex w-full justify-center items-center mt-12 h-full">
              <img
                src={Images.authLogo}
                alt="logo"
                className="object-contain h-28 w-52"
              />
            </div>
          </div>
        </AuthLayOut>
      </div>
    </>
  );
};

export default SignIn;
