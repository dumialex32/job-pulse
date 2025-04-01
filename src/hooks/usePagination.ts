import { usePathname, useRouter } from "next/navigation";
import useQueryParams from "./useQueryParams";
import { useCallback, useMemo } from "react";
import { createPageButtons } from "@/utils/paginationUtils";
import { usePaginationProps } from "@/types/paginationTypes";

const usePagination = ({ currentPage, totalPages }: usePaginationProps) => {
  const { search, jobStatus } = useQueryParams();
  const pathname = usePathname();
  const { push } = useRouter();

  const handlePageChange = useCallback(
    (pageNum: number) => {
      const defaultParams = {
        search,
        jobStatus,
        page: String(pageNum),
      };

      const params = new URLSearchParams(defaultParams);

      push(`${pathname}?${params.toString()}`);
    },
    [jobStatus, pathname, search, push]
  );

  const handleNextPage = () =>
    currentPage < totalPages && handlePageChange(Number(currentPage + 1));

  const handlePrevPage = () =>
    currentPage > 1 && handlePageChange(Number(currentPage - 1));

  const renderPageButtons = useMemo(
    () => createPageButtons({ currentPage, totalPages, handlePageChange }),
    [currentPage, totalPages, handlePageChange]
  );

  return {
    handlePageChange,
    handleNextPage,
    handlePrevPage,
    renderPageButtons,
  };
};

export default usePagination;
