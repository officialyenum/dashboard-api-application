import React from 'react'
import { Form, Formik, FormikHelpers } from 'formik'
import { SubHeaderText, CaptionText } from '../../texts';
import * as Yup from "yup";
import { Button, FormInput } from "..";
import { VDirect, VEyeCloseIcon , VLockIcon } from '../../icons';
import { loginEmailSchema } from '../../../schemas';

interface IProps {
  onSubmit: ((values: { 
    email: string; 
  }) => void
  )
}

export const LoginForm = ({ onSubmit }: IProps) => {
  return (
    <div className="w-full rounded-lg p-5 bg-[rgba(255,255,255,0.25)]">
        <div className="w-full rounded-lg p-5 bg-white">
          <SubHeaderText text="Login to your account" />
          <CaptionText text="Welcome to our service. We're thrilled that you're interested in using our service" />
          <Formik
            initialValues={
                { email: "" }
            }
            validationSchema={loginEmailSchema}
            onSubmit={onSubmit}
          >
            {(props) => (
              <Form>
                <FormInput
                  LeftIcon={<VDirect />}
                  type="email"
                  name="email"
                  placeholder="Enter Email Address"
                />
                <Button
                  disabled={!props.dirty || !props.isValid}
                  type="submit"
                >
                  {"VERIFY EMAIL ADDRESS"}
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
  );
}