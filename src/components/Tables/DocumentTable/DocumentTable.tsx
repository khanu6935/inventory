interface Props {
  tableHeader: any;
  tableBody: any;
}

const DocumentTable = ({ tableHeader, tableBody }: Props) => {
  return (
    <>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="rounded-t-2xl">
          <tr className="text-xs text-gray-700 bg-[#EAEFEC] rounded-xl py-2">
            {tableHeader.map((item: any, index: number) => (
              <th key={index} className="px-6 py-4">
                <span className="flex items-center gap-2 text-base font-normal font-poppins text-textPrimary">
                  {item.title}
                  {item.icon && item.icon}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableBody &&
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
            })}
        </tbody>
      </table>
    </>
  );
};

export default DocumentTable;
