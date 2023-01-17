export type errorType = "success" | "warning" | "error" | "unauthorized";

export interface ToastProps {
  className?: string;
  title: string;
  body?: string;
  showToast?: boolean;
  type?: errorType;
  id?: number;
  closeAction?: () => void;
}
