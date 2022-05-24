import { ToastContainer, toast } from "material-react-toastify";

export function SuccessMessage(msg) {
  toast.success(msg, {
    position: "top-right",
    autoClose: 3000,
  });
}
export function ErrorMessage(msg) {
  toast.error(msg, {
    position: "top-right",
    autoClose: 3000,
  });
}
