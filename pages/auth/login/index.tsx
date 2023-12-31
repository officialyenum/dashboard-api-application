import react, { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { Button, CreatePasswordForm, FormInput } from "../../../components/forms";
import { VDirect, VEyeCloseIcon } from "../../../components/icons";
import { AppLogo } from "../../../components/logo";
import {
  CaptionText,
  HeaderText,
  SubHeaderText,
  Text,
} from "../../../components/texts";
import useDisclosure from "../../../utils/useDisclosure";
import { OTPModal, OTPVerifiedModal } from "../../../components/modals";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "../../../utils/redux";
import {
  onCloseAppLoader,
  onOpenAppLoader,
  onOpenLoginForm,
  onOpenLoginWithPasswordForm,
  onUpdateForm,
} from "../../../store";
import { LoginForm } from "../../../components/forms";
import AuthLayout from "../../../components/layouts/AuthLayout";
import { LoginWithPasswordForm } from "../../../components/forms/LoginWithPasswordForm";

const Login = () => {
  const { showLoginForm, showLoginWithPasswordForm, data } = useAppSelector(
    (state) => state.login
  );
  const dispatch = useAppDispatch();
  const otpHandler = useDisclosure();
  const otpSuccessHandler = useDisclosure();

  const router = useRouter();

  useEffect(() => {
    return () => {
      dispatch(onOpenLoginForm());
    };
  }, [dispatch]);

  return (
    <section className="w-full flex items-center justify-center min-h-full">
      <div className="w-[40%] h-[95%]">
        <div className="flex justify-between rounded-md items-center h-full">
          <div className="flex-auto w-[40%] m-4 h-full flex flex-col justify-center items-center">
            {showLoginForm && (
              <LoginForm
                onSubmit={(values) => {
                  dispatch(onUpdateForm(values));
                  dispatch(onOpenAppLoader());
                  setTimeout(() => {
                    dispatch(onCloseAppLoader());
                    otpHandler.onOpen();
                  }, 3000);
                }}
              />
            )}
            {showLoginWithPasswordForm && (
              <LoginWithPasswordForm
                onSubmit={(values) => {
                  dispatch(onUpdateForm(values));
                  dispatch(onOpenAppLoader());
                  setTimeout(() => {
                    // dispatch(onOpenLoginForm());
                    if(true){
                      otpSuccessHandler.onOpen();
                    }
                    router.push("/dashboard");
                    dispatch(onCloseAppLoader());
                  }, 3000);
                }}
              />
            )}
          </div>
        </div>
      </div>
      <OTPModal
        isOpen={otpHandler.isOpen}
        email={data.email}
        onClose={() => {
          dispatch(onOpenLoginForm());
          otpHandler.onClose();
        }}
        successCallback={otpSuccessHandler.onOpen}
      />
      <OTPVerifiedModal
        isOpen={otpSuccessHandler.isOpen}
        onClose={otpSuccessHandler.onClose}
        successCallback={() => {
          dispatch(onOpenLoginWithPasswordForm());
          // router.push("/dashboard");
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
