import toast from "react-hot-toast";

interface IProps {
  type: "success" | "error" | "promise";
  message: string;
  query?: Promise<void>;
}

export const Notify = ({ type, message, query }: IProps) => {
  if (type === "success") {
    toast.success(message, { id: type });
  } else if (type === "error") {
    toast.error(message, { id: type });
  } else if (type === "promise") {
    toast.promise(query, { error: "", loading: "", success: "" });
  }
};
