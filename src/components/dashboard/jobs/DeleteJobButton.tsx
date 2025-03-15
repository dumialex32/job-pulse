import Confirm from "@/components/Confirm";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { deleteJobAction } from "@/utils/actions";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

const DeleteJobButton = ({ id }: { id: string }) => {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: deleteJobAction,
    onSuccess: () => {
      toast.success("Job successfully deleted");
      queryClient.invalidateQueries({ queryKey: ["jobs"] });
      queryClient.invalidateQueries({ queryKey: ["stats"] });
      queryClient.invalidateQueries({ queryKey: ["charts"] });
    },
    onError: (error) => {
      toast.error(
        error.message || "Failed to delete the job. Please try again."
      );
    },
  });

  const handleDeleteJob = () => {
    mutate(id);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Delete</Button>
      </DialogTrigger>

      <DialogContent>
        <Confirm
          action="delete"
          resource="job"
          onHandleConfirm={handleDeleteJob}
          isLoading={isPending}
        />
      </DialogContent>
    </Dialog>
  );
};

export default DeleteJobButton;
