import CreateOrEditJobForm from "@/components/form/CreateOrEditJobForm";
import { Dialog } from "@/components/ui/dialog";
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
        <Dialog>
          <CreateOrEditJobForm />
        </Dialog>
      </HydrationBoundary>
    </div>
  );
};

export default AddJobPage;
