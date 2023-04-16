import { useState } from 'react';

export const usePagination = (
  perPageReords: number,
  totalPageRecords: number,
) => {
  const [currentPageIndex, setCurrentPageIndex] = useState(1);
  const totalPages = Math.ceil(totalPageRecords / perPageReords);

  const endPageIndex = currentPageIndex * perPageReords;
  const startPageIndex = endPageIndex - perPageReords;

  const displayPage = (event: React.ChangeEvent<unknown>, pageNo: number) => {
    setCurrentPageIndex(pageNo);
  };

  return {
    totalPages,
    startPageIndex,
    endPageIndex,
    currentPageIndex,
    displayPage,
  };
};
