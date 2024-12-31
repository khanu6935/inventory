import { IoCheckmarkSharp } from "react-icons/io5";
interface Props {
  tableHeader: any;
  tableBody: any;
}

const DealDisclousersTable = ({ tableHeader, tableBody }: Props) => {
  return (
    <>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="rounded-t-2xl">
          <tr className="text-xs text-gray-700 bg-[#EAEFEC] rounded-xl py-2">
            <th className="md:px-6 px-1 flex gap-2 items-center w-[120px] py-4">
              <p className="h-[19.99px] w-[20px] bg-buttonPrimary flex justify-center items-center rounded-[4px]">
                <IoCheckmarkSharp color="white" />
              </p>
              <span className="flex items-center gap-2 text-base font-normal font-poppins text-textPrimary">
                Select
              </span>
            </th>
            {tableHeader.map((item: any, index: number) => (
              <th key={index} className="md:px-6 px-1  py-4">
                <span className="flex items-center  w-[180px] gap-2 md:text-base text-sm font-normal font-poppins text-textPrimary">
                  {item.title}
                  {item.icon && item.icon}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableBody && tableBody.length > 0 ? (
            tableBody.map((item: any, rowIndex: number) => {
              return (
                <tr
                  key={rowIndex}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td className="px-6 py-4">{item.document}</td>
                  <td className="px-6 py-4">{item.type}</td>
                  <td className="px-6 py-4">{item.upload}</td>
                  <td className="px-6 py-4">
                    <span className="text-buttonPrimary px-4 py-1 font-poppins font-normal text-base gap-5 bg-[#BDCDC3]  items-center rounded-[8px]">
                      Download
                    </span>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="md:px-6 px-1 py-4">No results found</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default DealDisclousersTable;
