import { Button } from "@/components/ui/button";
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

  return (
    <Button
      variant="destructive"
      onClick={() => {
        if (window.confirm("Are you sure you want to delete this job?")) {
          mutate(id);
        }
      }}
      disabled={isPending}
    >
      {isPending ? "Deleting..." : "Delete"}
    </Button>
  );
};

export default DeleteJobButton;
