import React from "react";

interface TableHeader {
  Header: string;
  accessor: string;
  align: string;
}

interface TableBodyRow {
  [key: string]: any;
}

interface Props {
  tableHeader: TableHeader[];
  tableBody: TableBodyRow | TableBodyRow[];
}

const InvestorTable = ({ tableHeader, tableBody }: Props) => {
  const isArray = Array.isArray(tableBody);
  const renderRow = (rowData: TableBodyRow) => (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      {tableHeader.map((column, columnIndex) => (
        <td
          key={columnIndex}
          className={`px-6 py-4 ${column.align === "center" ? "text-center" : "text-left"}`}
        >
       {rowData[column.accessor] ?? ""}
        </td>
      ))}
    </tr>
  );

  return (
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="bg-[#EAEFEC] border-2 w-full rounded-[20px]">
        <tr className="text-xs text-gray-700 rounded-t-lg dark:bg-gray-700 dark:text-gray-400">
          {tableHeader.map((item, index) => (
            <th key={index} className={`py-3 pl-2 ${item.align === "center" ? "text-center" : "text-left"}`}>
              {item.Header}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {isArray ? (
          tableBody.map((rowData, rowIndex) => renderRow(rowData))
        ) : (
          renderRow(tableBody)
        )}
      </tbody>
    </table>
  );
};

export default InvestorTable;
