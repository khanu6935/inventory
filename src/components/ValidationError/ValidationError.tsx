import React from "react";

interface Props {
  touched: any;
  error: any;
}

const ValidationError: React.FC<Props> = ({ touched, error }) => {
  return touched && error ? (
    <p className="text-red-700  pt-2 text-sm">{error}</p>
  ) : null;
};

export default ValidationError;
