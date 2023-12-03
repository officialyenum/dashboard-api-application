import { VDirect, VEyeOpenIcon } from "components/icons";
import { CaptionText, SubHeaderText } from "components/texts";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { loginEmailSchema } from "schemas";
import { useMutationRequest } from "../../../api/useMutationRequest";
import { Button, FormInput } from "../../../components/forms";
import AuthLayout from "../../../components/layouts/AuthLayout";
import { OTPModal, OTPVerifiedModal } from "../../../components/modals";
import {
  LoginDtoIn,
  LoginDtoOut,
  LoginDtoOutSuccessResponseDtoOut,
  UserService,
} from "../../../generated";
import { onOpenLoginForm, onOpenLoginWithPasswordForm } from "../../../store";
import { useAppDispatch } from "../../../utils/redux";
import useDisclosure from "../../../utils/useDisclosure";
import { useSendOtp } from "hooks/app/useSendOtp";

const Login = () => {
  const [email, setEmail] = useState("");

  const dispatch = useAppDispatch();
  const otpHandler = useDisclosure();
  const otpSuccessHandler = useDisclosure();

  const { isLoading, trigger } = useMutationRequest<
    LoginDtoIn,
    LoginDtoOutSuccessResponseDtoOut
  >({
    service: "/api/User/login",
    method: "post",
    tag: "UserService",
    onSuccess: (val, vars) => {
      setEmail(vars?.email);
      otpHandler.onOpen();
    },
  });

  return (
    <section className="w-full flex items-center justify-center min-h-full">
      <div className="w-[40%] h-[95%]">
        <div className="flex justify-between rounded-md items-center h-full">
          <div className="flex-auto w-[40%] m-4 h-full flex flex-col justify-center items-center">
            <div className="w-full rounded-lg p-5 bg-[rgba(255,255,255,0.25)]">
              <div className="w-full rounded-lg p-5 bg-white">
                <SubHeaderText text="Login to your account" />
                <CaptionText text="Welcome to our service. We're thrilled that you're interested in using our service" />
                <Formik
                  initialValues={{ email: "", password: "" }}
                  validationSchema={loginEmailSchema}
                  onSubmit={(values) => {
                    trigger({
                      email: values.email,
                      password: values.password,
                    });
                  }}
                >
                  {(props) => (
                    <Form onSubmit={props.handleSubmit}>
                      <FormInput
                        LeftIcon={<VDirect />}
                        type="email"
                        name="email"
                        placeholder="Enter Email Address"
                      />
                      <FormInput
                        LeftIcon={<VEyeOpenIcon />}
                        type="password"
                        name="password"
                        placeholder="Enter Account Password"
                      />
                      <Button
                        isLoading={isLoading}
                        disabled={!props.dirty || !props.isValid}
                        type="submit"
                      >
                        LOGIN
                      </Button>
                      <div className="w-full bg-blue_fade rounded py-8 my-8">
                        <div className="flex flex-col justify-items-center items-center">
                          <CaptionText text="Having problems logging in?" />
                          <p className="text-sm text-blue-500 cursor-pointer mt-3 font-bold">
                            Chat with us
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-row justify-center my-5">
                        <CaptionText text="(C) 2023. All Rights Reserved." />
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
      <OTPModal
        isOpen={otpHandler.isOpen}
        email={email}
        onClose={() => {
          otpHandler.onClose();
        }}
        successCallback={otpSuccessHandler.onOpen}
      />
      <OTPVerifiedModal
        isOpen={otpSuccessHandler.isOpen}
        onClose={otpSuccessHandler.onClose}
        successCallback={() => {
          dispatch(onOpenLoginWithPasswordForm());
          otpSuccessHandler.onClose();
        }}
      />
    </section>
  );
};

Login.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>;
};
export default Login;
