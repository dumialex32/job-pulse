import { Spinner } from "@/components/Spinner";

const loading = () => {
  return (
    <div className="flex items-center justify-center">
      <Spinner size="medium" />
    </div>
  );
};

export default loading;
