import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { useCallback } from "react";
import { PaginationButtonsProps } from "@/types/paginationTypes/paginationTypes";

const PaginationButtons = ({
  totalPages,
  currentPage,
}: PaginationButtonsProps) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const handlePageChange = useCallback(
    (pageNum: number) => {
      const defaultParams = {
        search: searchParams.get("search") || "",
        jobStatus: searchParams.get("jobStatus") || "",
        page: String(pageNum),
      };

      const params = new URLSearchParams(defaultParams);

      return router.push(`${pathname}?${params.toString()}`);
    },
    [pathname, router, searchParams]
  );

  const handleNextPage = () =>
    currentPage < totalPages && handlePageChange(Number(currentPage + 1));

  const handlePrevPage = () =>
    currentPage > 1 && handlePageChange(Number(currentPage - 1));

  const addPageButton = (page: number, activeClass: boolean) => {
    return (
      <Button
        key={page}
        variant={activeClass ? "default" : "secondary"}
        onClick={() => handlePageChange(page)}
      >
        {page}
      </Button>
    );
  };

  const renderPageButtons = () => {
    const pageButtons = [];

    // first button
    pageButtons.push(addPageButton(1, currentPage === 1));

    // dots
    if (currentPage > 3) {
      pageButtons.push(
        <Button variant="secondary" key="dots-1">
          ...
        </Button>
      );
    }

    // page before current page
    if (currentPage !== 1 && currentPage !== 2) {
      pageButtons.push(addPageButton(currentPage - 1, false));
    }

    // current page
    if (currentPage !== 1 && currentPage !== totalPages) {
      pageButtons.push(addPageButton(currentPage, true));
    }

    //page after current page
    if (currentPage !== totalPages && currentPage !== totalPages - 1) {
      pageButtons.push(addPageButton(currentPage + 1, false));
    }

    // dots
    if (currentPage < totalPages - 2) {
      pageButtons.push(
        <Button variant="secondary" key="dots-2">
          ...
        </Button>
      );
    }

    // last button
    pageButtons.push(addPageButton(totalPages, currentPage === totalPages));

    return pageButtons;
  };

  return (
    <div className="flex items-center gap-2">
      <Button
        variant={"secondary"}
        onClick={handlePrevPage}
        disabled={currentPage === 1}
        aria-label="Prev page"
      >
        <ArrowBigLeft />
        Prev
      </Button>

      {renderPageButtons()}

      {/* Render page buttons */}
      <Button
        variant={"secondary"}
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        aria-label="Next page"
      >
        Next
        <ArrowBigRight />
      </Button>
    </div>
  );
};

export default PaginationButtons;
