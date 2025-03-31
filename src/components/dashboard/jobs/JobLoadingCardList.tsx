import JobLoadingCard from "./JobLoadingCard";

const JobLoadingCardList = ({ itemsPerPage }: { itemsPerPage: number }) => {
  return (
    <div className="grid lg:grid-cols-3 items-center gap-3">
      {Array.from({ length: itemsPerPage }).map((_, index) => (
        <JobLoadingCard key={index} />
      ))}
    </div>
  );
};

export default JobLoadingCardList;
