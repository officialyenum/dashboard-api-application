import { useGetRequest } from "api/useGetRequest";
import { EmailDtoIn, OtpService, SuccessResponseDtoOut_1 } from "generated";
import { useState } from "react";

export const useSendOtp = () => {
  const [email, setEmail] = useState("");
  const [shouldSend, setShouldSend] = useState(false);

  const sendOtp = (email: string) => {
    if (email) {
      setEmail(email);
      setShouldSend(true);
    } else {
      setEmail("");
      setShouldSend(false);
    }
  };

  const { isLoading, data, refetch } = useGetRequest<
    EmailDtoIn,
    SuccessResponseDtoOut_1
  >({
    service: "/api/Otp",
    tag: "OtpService",
    enabled: shouldSend,
    payload: {
      email,
    },
  });

  return {
    isLoading,
    data,
    resendOtp: refetch,
    sendOtp,
  };
};
