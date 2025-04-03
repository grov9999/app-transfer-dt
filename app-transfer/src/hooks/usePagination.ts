import { useState } from "react";
 
export const usePagination = <T>(items: T[], itemsPerPage: number = 10) => {
  
  const [currentPage, setCurrentPage] = useState(1);
 
  const maxPage = Math.ceil(items.length / itemsPerPage);
 
  const currentItems = items.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
 
  const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, maxPage));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const goToPage = (page: number) =>
    setCurrentPage(Math.min(Math.max(page, 1), maxPage));
 
  return {
    currentItems,
    currentPage,
    maxPage,
    nextPage,
    prevPage,
    goToPage,
  };
};