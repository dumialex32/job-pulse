import { PaginationProps } from "@/types/paginationTypes/paginationTypes";
import PaginationButtons from "./PaginationButtons";
import CustomSelect from "../CustomSelect";

const resultsPerPage = [
  { label: "10", value: 10 },
  { label: "16", value: 16 },
  { label: "22", value: 22 },
];

const Pagination = ({
  currentPage,
  totalPages,
  itemsPerPage,
  onSetItemsPerPage,
}: PaginationProps) => {
  return (
    <div className="flex items-center gap-6">
      {onSetItemsPerPage && (
        <CustomSelect
          options={resultsPerPage}
          onValueChange={onSetItemsPerPage}
          value={itemsPerPage}
          placeholder="Results per page"
        />
      )}

      <PaginationButtons totalPages={totalPages} currentPage={currentPage} />
    </div>
  );
};

export default Pagination;
