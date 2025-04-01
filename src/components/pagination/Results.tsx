import { ResultsProps } from "@/types/paginationTypes";
import pluralize from "pluralize";

const Results = ({
  count,
  currentPage,
  itemsPerPage,
  resource,
}: ResultsProps) => {
  if (count === 0)
    return <div className="px-4 py-2">No {pluralize(resource)} found.</div>;

  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, count);
  const resourceDisplay = pluralize(resource, count);

  return (
    <div className="px-4 py-2">
      <p>
        Showing <span className="font-bold">{startItem}</span>
        {startItem !== endItem && ` - ${endItem}`} of{" "}
        <span className="font-bold">{count}</span> {resourceDisplay}
      </p>
    </div>
  );
};

export default Results;
