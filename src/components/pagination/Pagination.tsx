import { PaginationProps } from "@/types/paginationTypes/paginationTypes";
import PaginationButtons from "./PaginationButtons";
import Results from "./Results";

const Pagination = ({ currentPage, totalPages, count }: PaginationProps) => {
  return (
    <PaginationButtons totalPages={totalPages} currentPage={currentPage} />
  );
};

export default Pagination;
