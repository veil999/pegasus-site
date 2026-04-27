import { Toaster as SonnerToaster } from "sonner";

export const Toaster = ({ ...props }) => (
  <SonnerToaster theme="dark" className="toaster group" {...props} />
);
