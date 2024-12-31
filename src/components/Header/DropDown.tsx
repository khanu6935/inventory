interface Props {
  title: string;
  width?: any;
  isOffer?: boolean;
  dropDownData?: [] | any;
  onSelect?: any;
  name?: string;
  height?: string;
  value?: any;
}

const DropDown = ({
  title,
  width,
  isOffer,
  dropDownData,
  onSelect,
  height,
  value,
}: Props) => {
  return (
    <>
      <div
        className={`${
          isOffer
            ? "h-[52px] border-[1px] rounded-lg"
            : "h-[40px] border-[1px] rounded-xl"
        }  border-[#EEEEEE]  flex items-center outline-none px-4 `}
        style={{
          width: width,
          height: height,
        }}
      >
        <select
          defaultValue={title}
          className="w-full outline-none"
          value={value}
          onChange={onSelect}
        >
          <option
            className="block px-4 py-2 font-poppins font-medium text-base text-[#4D4D4D] hover:bg-buttonPrimary hover:text-white cursor-pointer"
            selected
            disabled
          >
            {title}
          </option>
          {dropDownData && dropDownData.length > 0 ? (
            dropDownData.map((item: any, index: number) => {
              const dispalyValues = item.itemName || item.title || item;
              if (!dispalyValues) {
                console.warn("Invalid item in dropDownData", item);
                return null;
              }
              return (
                <option
                  className="block px-4 py-2 outline-none font-poppins font-medium text-base text-[#4D4D4D] hover:bg-buttonPrimary hover:text-white cursor-pointer"
                  key={index}
                  value={item.itemId|| item.id}
                >
                  {dispalyValues}
                </option>
              );
            })
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="block px-4 py-2 font-poppins font-medium text-base text-[#4D4D4D] hover:bg-buttonPrimary hover:text-white cursor-pointer">
                No Data Found
              </p>
            </div>
          )}
        </select>
      </div>
    </>
  );
};

export default DropDown;
