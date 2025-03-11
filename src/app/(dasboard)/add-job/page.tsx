import CreateJobForm from "@/components/form/CreateJobForm";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

const AddJobPage = () => {
  const queryClient = new QueryClient();

  return (
    <div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <CreateJobForm />
      </HydrationBoundary>
    </div>
  );
};

export default AddJobPage;
