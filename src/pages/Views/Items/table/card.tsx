import React from "react";

interface Column {
  Header: string;
  accessor: string;
}

interface SingleDataCardProps {
  columns: Column[];
  rows: Record<string, any>;
}

const flattenObject = (obj: Record<string, any>, prefix = ""): Record<string, any> => {
  let result: Record<string, any> = {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newKey = prefix ? `${prefix}.${key}` : key;

      if (typeof obj[key] === "object" && obj[key] !== null) {
        if (Array.isArray(obj[key])) {
          result[newKey] = obj[key].join(", ");
        } else {
          Object.assign(result, flattenObject(obj[key], newKey));
        }
      } else {
        const lastKey = newKey.split(".").pop();
        result[lastKey || ""] = obj[key];
      }
    }
  }
  return result;
};

const SingleDataCard: React.FC<SingleDataCardProps> = ({ columns, rows }) => {
  const flattenedRows = flattenObject(rows);

  const renderValue = (value: any): string => {
    if (typeof value === "object" && value !== null) {
      return JSON.stringify(value);
    }
    return value || "-";
  };

  return (
    <div className="grid grid-cols-1  gap-6">
      <div className="bg-white p-5 shadow-lg rounded-lg flex flex-col gap-4">
        {columns.map((col, idx) => {
          const value = renderValue(flattenedRows[col.accessor]);
          return (
            <div key={idx} className="flex justify-between items-start">
              <span className="font-semibold text-xl text-gray-800">{col.Header}:</span>
              <span className="text-xl text-gray-600">{value}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SingleDataCard;
