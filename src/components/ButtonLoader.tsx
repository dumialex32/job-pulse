import { MapSpinnerColor, mapSpinnerColor, Spinner } from "./Spinner";

const ButtonLoader = ({
  color,
  loadingMessage,
}: {
  color?: keyof MapSpinnerColor;
  loadingMessage?: string;
}) => {
  return (
    <div className="flex items-center gap-2 text-blue-">
      <span>
        <Spinner className={`${mapSpinnerColor[color || "primary"]}`} />
      </span>
      <span>{loadingMessage || "Loading..."}</span>
    </div>
  );
};

export default ButtonLoader;
