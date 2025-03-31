import { ResultsProps } from "@/types/paginationTypes/paginationTypes";
import pluralize from "pluralize";

const Results = ({
  count,
  currentPage,
  itemsPerPage,
  resource,
}: ResultsProps) => {
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, count);

  const resourceDisplay = pluralize(resource, count);

  return (
    <div className="px-4 py-2">
      <span>
        Showing{" "}
        <span className="font-bold">
          {startItem}-{endItem}
        </span>{" "}
        from <span className="font-semibold">{count}</span> {resourceDisplay}
      </span>
    </div>
  );
};

export default Results;
