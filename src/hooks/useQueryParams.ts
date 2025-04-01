import { useSearchParams } from "next/navigation";

const useQueryParams = () => {
  const searchParams = useSearchParams();

  const search = searchParams.get("search") || "";
  const jobStatus = searchParams.get("status") || "all";
  const page = Number(searchParams.get("page")) || 1;

  return { search, jobStatus, page };
};

export default useQueryParams;
