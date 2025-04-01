"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getSelectOptions } from "@/utils/formUtils";
import { usePathname, useRouter } from "next/navigation";
import CustomSelect from "@/components/CustomSelect";
import useQueryParams from "@/hooks/useQueryParams";
import { JobStatus } from "@/types/formTypes";

const SearchForm = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { search, jobStatus } = useQueryParams();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const search = formData.get("search");
    const jobStatus = formData.get("jobStatus");

    const params = new URLSearchParams();
    params.set("search", search as string);
    params.set("status", jobStatus as string);

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <form
      className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 p-8 bg-muted rounded"
      onSubmit={handleSubmit}
    >
      <Input
        type="text"
        name="search"
        className="bg-background"
        defaultValue={search}
      />

      <CustomSelect
        name="jobStatus"
        options={getSelectOptions({ All: "all", ...JobStatus })}
        defaultValue={jobStatus}
      />

      <Button type="submit">Search</Button>
    </form>
  );
};

export default SearchForm;
