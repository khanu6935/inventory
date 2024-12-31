import { ReactNode } from "react";

interface Props {
  title: ReactNode;
  onClick?: () => void;
  authLoading?: boolean;
}
const AuthButton = ({ title, onClick, authLoading }: Props) => {
  return (
    <>
      <button
        disabled={authLoading}
        className=" bg-buttonPrimary h-[52px] w-full rounded-lg text-white font-poppins font-medium text-base"
        onClick={onClick}
      >
        {title}
      </button>
    </>
  );
};

export default AuthButton;
