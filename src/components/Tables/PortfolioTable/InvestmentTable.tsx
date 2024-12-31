interface Props {
  tableHeader: any;
  tableBody: any;
}
const InvestmentTable = ({ tableHeader, tableBody }: Props) => {
  return (
    <>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="rounded-t-lg">
          <tr className="text-xs text-gray-700 bg-[#EAEFEC] rounded-t-lg dark:bg-gray-700 dark:text-gray-400">
            {tableHeader.map((item: any, index: number) => (
              <th key={index} className="px-6 py-3  gap-2">
                <span className="flex items-center gap-2">
                  {item.title}
                  {item.icon && item.icon}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableBody.map((item: any, rowIndex: number) => {
            return (
              <tr
                key={rowIndex}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td className="px-6 py-4">{item.InvestmentName}</td>
                <td className="px-6 py-4">{item.capital}</td>
                <td className="px-6 py-4">{item.earning}</td>
                <td className="px-6 py-4">{item.percentage}</td>
                <td className="px-6 py-4">{item.time}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default InvestmentTable;
