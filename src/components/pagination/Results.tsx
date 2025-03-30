import { ResultsProps } from "@/types/paginationTypes/paginationTypes";

const Results = ({ count, totalPages, currentPage }: ResultsProps) => {
  const results = totalPages * currentPage;

  const pageResults = results < count ? results : count;

  console.log("results:", results);
  console.log("count", count);

  return (
    <div className="px-4 py-2 bg-muted rounded">
      <span>{pageResults}</span> of <span>{count}</span>
    </div>
  );
};

export default Results;
