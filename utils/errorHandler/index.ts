import { Notify } from "../notify";

export const handleError = (err: any) => {
  const NODE_ENV = process.env.NODE_ENV;

  if (NODE_ENV === "development") {
    console.log("ERROR", JSON.stringify(err?.response?.data));
  }

  const errorObj = err?.response;

  if (errorObj?.status === 500) {
    Notify({
      type: "error",
      message:
        "Sorry, Something went wrong 😢😖❗, We have logged this error and our engineers are working to fix it as soon as possible.",
    });
  } else if (errorObj?.status === 409) {
    Notify({
      type: "error",
      message: "Request Timed Out, Please try again later",
    });
  } else if (
    typeof errorObj?.data?.message === "object" &&
    errorObj?.data?.message !== null &&
    Array.isArray(errorObj?.data?.message)
  ) {
    Notify({ type: "error", message: errorObj?.data?.message[0] });
  } else {
    Notify({ type: "error", message: errorObj?.data?.message });
  }
};
