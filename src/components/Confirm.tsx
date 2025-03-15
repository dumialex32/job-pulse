import ButtonLoader from "./ButtonLoader";
import { Button } from "./ui/button";
import {
  DialogClose,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

const Confirm = ({
  action,
  resource,
  isLoading,
  onHandleConfirm,
}: {
  action: string;
  resource: string;
  isLoading: boolean;
  onHandleConfirm: () => void;
}) => {
  const message = `Are you sure you want to ${action} this ${resource} ?`;

  return (
    <DialogHeader>
      <DialogTitle>
        <span className="capitalize">{action}</span> {resource}
      </DialogTitle>
      <DialogDescription>{message}</DialogDescription>

      <div className="flex items-center gap-4 py-4">
        <DialogClose asChild>
          <Button type="button" variant="secondary">
            Close
          </Button>
        </DialogClose>

        <Button
          onClick={onHandleConfirm}
          className="capitalize"
          disabled={isLoading}
        >
          {isLoading ? (
            <ButtonLoader color="white" loadingMessage="Processing..." />
          ) : (
            action
          )}
        </Button>
      </div>
    </DialogHeader>
  );
};

export default Confirm;
