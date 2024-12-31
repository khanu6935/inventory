import BtnLoader from "../BtnLoader/BtnLoader";

interface Props {
  title: string;
  width?: any;
  bgColor?: boolean;
  icon?: any;
  handleChange?: () => void;
  disable?: boolean;
  changeView?: any;
  height?: any;
  loading?: boolean;
}
const CustomButton = ({
  title,
  width,
  bgColor,
  icon,
  handleChange,
  disable,
  height,
  loading,
}: Props) => {
  return (
    <>
      <button
        disabled={disable}
        type="submit"
        onClick={handleChange}
        style={{ width: width, height: height }}
        className={`${
          bgColor
            ? "bg-buttonPrimary shadow-2xl text-white hover:bg-white hover:border-buttonPrimary hover:border-[1px] hover:text-buttonPrimary"
            : " bg-transparent hover:bg-buttonPrimary hover:text-white   border-[1px] border-buttonPrimary text-center flex justify-center items-center text-buttonPrimary"
        } rounded-[8px] px-[10px] py-4  drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]  font-poppins text-sm ${
          disable ? "opacity-45" : "opacity-100"
        }`}
      >
        <>
          {loading ? (
            <BtnLoader color={bgColor ? "white" : "#42007"} loading={loading} />
          ) : (
            <span>{title ? title : icon}</span>
          )}
        </>
      </button>
    </>
  );
};

export default CustomButton;
