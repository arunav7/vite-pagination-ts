import { useState } from 'react';

export const usePagination = (
  perPageReords: number,
  totalPageRecords: number
) => {
  const totalPages = Math.ceil(totalPageRecords / perPageReords);
  const [startPageIndex, setStartPageIndex] = useState(0);
  const [endPageIndex, setEndPageIndex] = useState(perPageReords - 1);
  const [currentPageIndex, setCurrentPageIndex] = useState(1);

  const displayPage = (event: React.ChangeEvent<unknown>, pageNo: number) => {
    setCurrentPageIndex(pageNo);
    let endPageIndex = perPageReords * pageNo - 1;
    let startPageIndex = perPageReords * pageNo - perPageReords;
    setStartPageIndex(startPageIndex);

    if (endPageIndex > totalPageRecords) {
      setEndPageIndex(totalPageRecords - 1);
    } else {
      setEndPageIndex(endPageIndex);
    }
  };

  return {
    totalPages,
    startPageIndex,
    endPageIndex,
    currentPageIndex,
    displayPage,
  };
};
