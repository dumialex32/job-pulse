import { Button } from "../ui/button";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { PaginationButtonsProps } from "@/types/paginationTypes/paginationTypes";
import usePagination from "@/hooks/usePagination";

const PaginationButtons = ({
  totalPages,
  currentPage,
}: PaginationButtonsProps) => {
  const { handleNextPage, handlePrevPage, renderPageButtons } = usePagination({
    currentPage,
    totalPages,
  });

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

      {/* render page buttons array ( {renderPageButtons.map((button) => button)} )*/}
      {renderPageButtons}

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
