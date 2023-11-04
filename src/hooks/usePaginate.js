import { useState } from "react";

const usePaginate = (data) => {
  const [currentPage, setCurrentPage] = useState(1);
  const DataPerPage = 4;
  const indexOfLastData = currentPage * DataPerPage;
  const indexOfFirstData = indexOfLastData - DataPerPage;
  const currentDataList = data?.slice(indexOfFirstData, indexOfLastData);
  const pageNumbers = Math.ceil(data?.length / DataPerPage);

  return { setCurrentPage, currentDataList, pageNumbers, currentPage };
};

export default usePaginate;
