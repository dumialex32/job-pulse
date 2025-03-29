import JobLoadingCard from "./JobLoadingCard";

const JobLoadingCardList = ({ limit }: { limit: number }) => {
  return (
    <div className="grid lg:grid-cols-3 items-center gap-3">
      {Array.from({ length: limit }).map((_, index) => (
        <JobLoadingCard key={index} />
      ))}
    </div>
  );
};

export default JobLoadingCardList;
