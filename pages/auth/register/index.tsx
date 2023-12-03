import { useMutationRequest } from "api/useMutationRequest";
import {
  VDirect,
  VEyeCloseIcon,
  VInfoIcon,
  VLockIcon,
  VNigeriaIcon,
} from "components/icons";
import { CaptionText, SubHeaderText } from "components/texts";
import { Form, Formik } from "formik";
import { RegisterDtoIn, SuccessResponseDtoOut_1, UserService } from "generated";
import Link from "next/link";
import { useRouter } from "next/router";
import * as Yup from "yup";
import { useState } from "react";
import { Button, FormInput } from "../../../components/forms";
import AuthLayout from "../../../components/layouts/AuthLayout";
import { OTPModal } from "../../../components/modals";
import { onOpenLoginForm } from "../../../store";
import { useAppDispatch } from "../../../utils/redux";
import useDisclosure from "../../../utils/useDisclosure";
import { Notify } from "utils";

const Register = () => {
  const [email, setEmail] = useState("");
  const dispatch = useAppDispatch();
  const otpHandler = useDisclosure();

  const router = useRouter();

  const { isLoading, trigger, data } = useMutationRequest<
    RegisterDtoIn,
    SuccessResponseDtoOut_1
  >({
    service: "/api/User/register",
    method: "post",
    tag: "UserService",
    onSuccess: (val, vars) => {
      Notify({ type: "success", message: "Account Registration Successful." });
      otpHandler.onOpen();
      setEmail(vars?.email);
    },
  });

  return (
    <section className="w-full flex items-center justify-center min-h-full">
      <div className="w-[40%] h-[95%]">
        <div className="flex justify-between rounded-md items-center h-full">
          <div className="flex-auto w-[40%] m-4 h-full flex flex-col justify-center items-center">
            <div className="w-full rounded-lg p-5 bg-[rgba(255,255,255,0.25)]">
              <div className="w-full rounded-lg p-5 bg-white">
                <SubHeaderText text="Create a new Account" />
                <div className="mt-3">
                  <CaptionText text="Welcome to our service. We’re thrilled that you’re interested in using our service." />
                </div>

                <Formik
                  initialValues={{
                    first_name: "",
                    last_name: "",
                    email: "",
                    phone_number: "",
                    password: "",
                  }}
                  validationSchema={Yup.object().shape({
                    first_name: Yup.string().required("First Name is required"),
                    last_name: Yup.string().required("Last Name is required"),
                    email: Yup.string()
                      .email("Email is invalid")
                      .required("This field is required!."),
                    phone_number: Yup.string().required(
                      "This field is required!."
                    ),
                    password: Yup.string().required("This field is required!."),
                  })}
                  onSubmit={(values) =>
                    trigger({
                      email: values.email,
                      firstName: values.first_name,
                      lastName: values.last_name,
                      password: values.password,
                      phone: values.phone_number?.toString(),
                    })
                  }
                >
                  {(props) => (
                    <Form>
                      {/* <FormInput
                        LeftIcon={<VDirect />}
                        label="Upload File"
                        type="file"
                        name="avatar"
                        placeholder="Enter Email Address"
                      /> */}
                      <div className="flex flex-row justify-between gap-4">
                        <FormInput
                          type="text"
                          name="first_name"
                          placeholder="Enter First Name"
                          className="w-full"
                        />
                        <FormInput
                          type="text"
                          name="last_name"
                          placeholder="Enter Last Name"
                          className="w-full"
                        />
                      </div>
                      <FormInput
                        LeftIcon={<VDirect />}
                        type="email"
                        name="email"
                        placeholder="Enter Email Address"
                      />
                      <FormInput
                        LeftIcon={<VNigeriaIcon />}
                        type="number"
                        name="phone_number"
                        placeholder="Enter Phone Number"
                      />
                      <FormInput
                        LeftIcon={<VLockIcon />}
                        RightIcon={<VEyeCloseIcon />}
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                      />
                      <div className="flex flex-row justify-start my-5">
                        <VInfoIcon className="hover:bg-white cursor-pointer mr-2" />
                        <CaptionText text="Have an Exiting Account?" />
                        <Link
                          href={"/auth/login"}
                          className="text-sm text-blue-500 font-bold underline underline-offset-4 ml-2"
                        >
                          Sign in Here
                        </Link>
                      </div>
                      <Button
                        rounded
                        className="uppercase"
                        isLoading={isLoading}
                        disabled={!props.dirty || !props.isValid}
                        type="submit"
                      >
                        Create account
                      </Button>
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
        successCallback={() => router.push("/auth/account-activated")}
      />
    </section>
  );
};

Register.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>;
};
export default Register;
