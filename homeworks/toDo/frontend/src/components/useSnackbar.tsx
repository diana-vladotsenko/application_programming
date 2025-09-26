import { useState } from "react";

export function useSnackbar() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState<
    "success" | "error" | "info" | "warning"
  >("info");

  const showSnackbar = (
    message: string,
    type: "success" | "error" | "info" | "warning" = "info"
  ) => {
    setMessage(message);
    setSeverity(type);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return { open, message, severity, showSnackbar, handleClose };
}
