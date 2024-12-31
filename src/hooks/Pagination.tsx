import { useEffect, useState } from "react";

interface Props {
  data: any;
  pageSize: number;
}

const usePagination = ({ data, pageSize }: Props) => {
  const [page, setPage] = useState(0);
  const [filterData, setFilterData] = useState<any>();
  const n = pageSize;

  useEffect(() => {
    setFilterData(
      data.filter((_item: any, index: number) => {
        return index >= page * n && index < (page + 1) * n;
      })
    );
  }, [page]);

  return {
    filterData,
    setPage,
  };
};

export default usePagination;
