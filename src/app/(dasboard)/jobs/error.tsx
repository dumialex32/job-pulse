"use client";

import Alert from "@/components/Alert";

const error = ({ error }: { error: Error; reset: () => void }) => {
  return <Alert type="destructive" message={error.message} />;
};

export default error;
