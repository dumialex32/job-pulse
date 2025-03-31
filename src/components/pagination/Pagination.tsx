import { PaginationProps } from "@/types/paginationTypes/paginationTypes";
import PaginationButtons from "./PaginationButtons";
import CustomSelect from "../CustomSelect";

const Pagination = ({
  currentPage,
  totalPages,
  onSetItemsPerPage,
  itemsPerPage,
}: PaginationProps) => {
  const resultsPerPage = [
    { label: "10", value: 10 },
    { label: "16", value: 16 },
    { label: "22", value: 22 },
  ];

  return (
    <div className="flex items-center gap-6">
      <CustomSelect
        options={resultsPerPage}
        onValueChange={onSetItemsPerPage}
        value={itemsPerPage}
        placeholder="Results per page"
      />

      <PaginationButtons totalPages={totalPages} currentPage={currentPage} />
    </div>
  );
};

export default Pagination;
