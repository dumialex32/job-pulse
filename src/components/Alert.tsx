"use client";

import { Terminal } from "lucide-react";
import { AlertDescription, AlertTitle, Alert as ShadcnAlert } from "./ui/alert";

type AlertType = "default" | "destructive";

const Alert = ({
  message,
  type = "default",
}: {
  message: string;
  type?: AlertType;
}) => {
  return (
    <ShadcnAlert variant={type}>
      <Terminal className="h-4 w-4" />
      {type !== "default" && (
        <AlertTitle className="capitalize">{type}</AlertTitle>
      )}
      <AlertDescription>{message}</AlertDescription>
    </ShadcnAlert>
  );
};

export default Alert;
