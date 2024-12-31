interface Props {
  label: string;
  type: string;
  placeholder: string;
  value: any;
  onChange: any;
  name: string;
  searchIcon?: any;
  min?: string;
  max?: string;
  password?: boolean;
  handleClick?: () => void;
}

const InputFeild = ({
  label,
  type,
  placeholder,
  name,
  value,
  onChange,
  searchIcon,
  min,
  max,
  password,
  handleClick,
}: Props) => {
  return (
    <>
      <div className="flex relative flex-col w-full gap-2 ">
        <label className="font-poppins font-normal text-base text-textPrimary">
          {label}
        </label>
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          min={min}
          max={max}
          className={`border-[1px]  border-[#EEEEEE] h-[52px] ${
            password
              ? "pl-2 rounded-lg"
              : searchIcon
              ? "pl-9 rounded-[18px]"
              : "pl-1 rounded-lg"
          } w-full p-2  placeholder:text-textSecondry2 placeholder:text-base placeholder:font-poppins pl-3 focus:border-2px focus:border-[#EEEEEE] outline-none`}
        />
        <span
          onClick={handleClick}
          className={`absolute  ${
            password ? "right-3 top-[51px]" : "left-3 top-[26px]"
          } `}
        >
          {searchIcon}
        </span>
      </div>
    </>
  );
};

export default InputFeild;
