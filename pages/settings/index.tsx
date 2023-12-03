import React, { useState } from "react";
import Layout from "../../components/layouts/Layout";
import { Breadcrumbs } from "../../components/breadcrumbs";
import { HomeIcon, VCalendarIcon } from "../../components/icons";
import { SectionHeader } from "../../components/sectionHeader";
import { Tabs, Tab } from "../../components/tab";
import { Button, DangerButton, FormInput } from "../../components/forms";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { SubHeaderText } from "../../components/texts";
import { FormCheckbox } from "../../components/forms/Checkbox";
import { AvatarInput } from "../../components/forms/AvatarInput";
import { FormSelect } from "../../components/forms/Select";

enum TABSEnum {
  PROFILE_SETTINGS = "PROFILE SETTINGS",
  PASSWORD = "PASSWORD",
  BUSINESS_INFO = "BUSINESS INFORMATION",
  REFERENCES = "REFERENCES",
}

const SettingsPage = () => {
  const [currentPage, setCurrentPage] = useState(TABSEnum.PROFILE_SETTINGS);

  const onProfileUpdateSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <div>
      <div className="my-7">
        <Breadcrumbs
          items={[
            { title: "Home", icon: <HomeIcon />, to: "/dashboard" },
            { title: "Setting", to: "/settings" },
          ]}
        />
      </div>
      <SectionHeader title="Setting" />
      <div className="my-5 bg-white/40 rounded-lg p-6 ">
        <div className="mb-8">
          <h2 className="text-2xl font-bold">{currentPage}</h2>
          <p className="text-sm text-gray-400 my-2">
            View all transaction history made through your Account
          </p>
        </div>
        <Tabs>
          <Tab label="Profile Settings">
            <div className="max-w-full lg:max-w-[50%] bg-white p-4 rounded-md">
              <div className="flex items-center gap-3 my-4">
                <p>Profile Settings</p>
              </div>
              <Formik
                initialValues={{
                  firstname: "",
                  lastname: "",
                  email: "",
                  phonenumber: "",
                  role: "",
                }}
                validationSchema={Yup.object().shape({
                  firstname: Yup.string().required("This field is required!."),
                  lastname: Yup.string().required("This field is required!."),
                  email: Yup.string()
                    .email("Email is invalid")
                    .required("This field is required!."),
                  phonenumber: Yup.string().required(
                    "This field is required!."
                  ),
                  role: Yup.string().required("This field is required!."),
                })}
                onSubmit={onProfileUpdateSubmit}
              >
                {(props) => (
                  <Form>
                    <div className="flex gap-8">
                      <FormInput
                        name="firstname"
                        label="First Name"
                        placeholder="Enter First Name"
                        type="text"
                        containerProps={{ className: "w-full" }}
                      />
                      <FormInput
                        name="lastname"
                        label="Last Name"
                        placeholder="Enter Last Name"
                        type="text"
                        containerProps={{ className: "w-full" }}
                      />
                    </div>
                    <FormInput
                      name="email"
                      label="Email Address"
                      placeholder="Enter Email Address"
                      type="email"
                    />
                    <FormInput
                      name="phonenumber"
                      label="Phone Number"
                      placeholder="Enter Phone Number"
                      type="number"
                    />
                    <div className="w-full border-t border-t-gray-300 border-dashed" />
                    <div className="my-4">
                      <SubHeaderText text="Role at the business" />
                      <div className="flex items-center justify-between">
                        <Field
                          name="role"
                          type="radio"
                          value="super-admin"
                          label="Super Admin"
                          as={FormCheckbox}
                        />
                        <Field
                          name="role"
                          type="radio"
                          value="account-officer"
                          label="Account Officer"
                          as={FormCheckbox}
                        />
                        <Field
                          name="role"
                          type="radio"
                          value="finance-manager"
                          label="Finance Manager"
                          as={FormCheckbox}
                        />
                      </div>
                    </div>
                    <div className="w-full border-t border-t-gray-300 border-dashed" />
                    <div className="mt-4 flex gap-4">
                      <DangerButton className="rounded-md">CANCEL</DangerButton>
                      <Button className="rounded-md">SAVE</Button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </Tab>
          <Tab label="Password">
            <div className="max-w-full lg:max-w-[50%] bg-white p-4 rounded-md">
              <div className="flex items-center gap-3 my-4">
                <p>Change Security Information</p>
              </div>
              <Formik
                initialValues={{
                  oldpassword: "",
                  newpassword: "",
                }}
                validationSchema={Yup.object().shape({
                  oldpassword: Yup.string().required(
                    "This field is required!."
                  ),
                  newpassword: Yup.string().required(
                    "This field is required!."
                  ),
                })}
                onSubmit={onProfileUpdateSubmit}
              >
                {(props) => (
                  <Form>
                    <FormInput
                      name="oldpassword"
                      label="Old Password"
                      placeholder="Enter Old Password"
                      type="password"
                    />
                    <FormInput
                      name="newpassword"
                      label="New Password"
                      placeholder="Enter New Password"
                      type="password"
                    />
                    <div className="w-full border-t border-t-gray-300 border-dashed" />
                    <div className="mt-4 flex gap-4">
                      <DangerButton className="rounded-md">CANCEL</DangerButton>
                      <Button className="rounded-md">SAVE</Button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </Tab>
          <Tab label="Business Info">
            <div className="max-w-full lg:max-w-[70%] bg-white p-4 rounded-md">
              <div className="flex items-center gap-3 my-4">
                <p>Business Information</p>
              </div>
              <Formik
                initialValues={{
                  businessName: "",
                  businessType: "",
                  businessIndustry: "",
                  supportEmail: "",
                  country: "",
                  disputeEmail: "",
                  defaultEmail: "",
                }}
                validationSchema={Yup.object().shape({
                  businessName: Yup.string().required(
                    "This field is required!."
                  ),
                  businessType: Yup.string().required(
                    "This field is required!."
                  ),
                  businessIndustry: Yup.string().required(
                    "This field is required!."
                  ),
                  country: Yup.string().required("This field is required!."),
                  supportEmail: Yup.string()
                    .email("Email is invalid!.")
                    .required("This field is required!."),
                  disputeEmail: Yup.string()
                    .email("Email is invalid!.")
                    .required("This field is required!."),
                  defaultEmail: Yup.string()
                    .email("Email is invalid!.")
                    .required("This field is required!."),
                })}
                onSubmit={onProfileUpdateSubmit}
              >
                {(props) => (
                  <Form>
                    <div className="flex gap-10">
                      <div className="w-[40%] mt-3">
                        <SubHeaderText text="Business Information" />
                        <p className="text-sm">
                          This includes information about your avatar and
                          business name
                        </p>
                      </div>
                      <div className="w-[60%]">
                        <AvatarInput />
                        <FormInput
                          name="businessName"
                          label="Business Name"
                          placeholder="Enter Business Name"
                          type="text"
                        />
                      </div>
                    </div>

                    <div className="w-full border-t border-t-gray-300 border-dashed" />
                    <div className="flex gap-10">
                      <div className="w-[40%] mt-3">
                        <SubHeaderText text="Business Information" />
                        <p className="text-sm">
                          This includes information about your business type and
                          business industry
                        </p>
                      </div>
                      <div className="w-[60%]">
                        <FormSelect
                          options={[]}
                          name="businessType"
                          label="Business Type"
                          placeholder="Select Business Type"
                        />
                        <FormSelect
                          options={[]}
                          name="businessIndustry"
                          label="Business Industry"
                          placeholder="Select Business Industry"
                        />
                      </div>
                    </div>
                    <div className="w-full border-t border-t-gray-300 border-dashed" />
                    <div className="flex gap-10">
                      <div className="w-[40%] mt-3">
                        <SubHeaderText text="Location" />
                        <p className="text-sm">
                          You can change your business location address
                        </p>
                      </div>
                      <div className="w-[60%]">
                        <FormSelect
                          options={[]}
                          name="country"
                          label="Country"
                          placeholder="Select Country"
                        />
                      </div>
                    </div>
                    <div className="w-full border-t border-t-gray-300 border-dashed" />
                    <div className="flex gap-10">
                      <div className="w-[40%] mt-3">
                        <SubHeaderText text="Dispute Email" />
                        <p className="text-sm">
                          This email will be used in case there are disputes and
                          issues with transactions on your account
                        </p>
                      </div>
                      <div className="w-[60%]">
                        <FormInput
                          name="disputeEmail"
                          label="Email Address"
                          placeholder="Enter Email Address"
                        />
                      </div>
                    </div>
                    <div className="w-full border-t border-t-gray-300 border-dashed" />
                    <div className="flex gap-10">
                      <div className="w-[40%] mt-3">
                        <SubHeaderText text="Support Email" />
                        <p className="text-sm">
                          Email whenever there is a need for your team to help
                          your customers resolve an issue
                        </p>
                      </div>
                      <div className="w-[60%]">
                        <FormInput
                          name="supportEmail"
                          label="Email Address"
                          placeholder="Enter Email Address"
                        />
                      </div>
                    </div>
                    <div className="w-full border-t border-t-gray-300 border-dashed" />
                    <div className="flex gap-10">
                      <div className="w-[40%] mt-3">
                        <SubHeaderText text="Default Email" />
                        <p className="text-sm">
                          This is your official email address and will be used
                          as the default if the above emails are not set.
                        </p>
                      </div>
                      <div className="w-[60%]">
                        <FormInput
                          name="defaultEmail"
                          label="Email Address"
                          placeholder="Enter Email Address"
                        />
                      </div>
                    </div>
                    <div className="w-full border-t border-t-gray-300 border-dashed" />
                    <div className="mt-4 flex gap-4">
                      <DangerButton className="rounded-md">CANCEL</DangerButton>
                      <Button className="rounded-md">SAVE</Button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </Tab>
          <Tab label="Preferences">
            <div className="max-w-full lg:max-w-[70%] bg-white p-4 rounded-md">
              <div className="flex items-center gap-3 my-4">
                <p>Payment Option</p>
              </div>
              <Formik
                initialValues={{
                  currency: "",
                  invoiceToMe: false,
                  invoiceToAll: false,
                  apiScheduleImmediately: false,
                  apiScheduleNextday: false,
                  localTimezone: false,
                  wat: false,
                }}
                validationSchema={Yup.object().shape({
                  currency: Yup.string()
                    .email("Email is invalid!.")
                    .required("This field is required!."),
                  invoiceToMe: Yup.boolean(),
                  invoiceToAll: Yup.boolean(),
                  apiScheduleImmediately: Yup.boolean(),
                  apiScheduleNextday: Yup.boolean(),
                  localTimezone: Yup.boolean(),
                  wat: Yup.boolean(),
                })}
                onSubmit={onProfileUpdateSubmit}
              >
                {(props) => (
                  <Form>
                    <div className="flex gap-10">
                      <div className="w-[40%] mt-3">
                        <SubHeaderText text="Default Currency" />
                        <p className="text-sm">This is your default currency</p>
                      </div>
                      <div className="w-[60%]">
                        <FormSelect
                          name="currency"
                          label="Select Currency"
                          options={[]}
                          placeholder="Select Currency"
                        />
                      </div>
                    </div>
                    <div className="flex gap-10">
                      <div className="w-[40%] mt-3">
                        <SubHeaderText text="Transaction Invoices" />
                        <p className="text-sm">
                          Who receives transaction receipts automatically
                        </p>
                      </div>
                      <div className="w-[60%]">
                        <FormCheckbox
                          name="invoiceToMe"
                          label="Send To me"
                          value="invoiceToMe"
                        />
                        <FormCheckbox
                          name="invoiceToAll"
                          label="Send To All Users"
                          value="invoiceToAll"
                        />
                      </div>
                    </div>

                    <div className="w-full border-t border-t-gray-300 border-dashed" />
                    <div className="flex gap-10">
                      <div className="w-[40%] mt-3">
                        <SubHeaderText text="API Schedule" />
                        <p className="text-sm">
                          Plan how often you want your total invoice to be made
                          to the government
                        </p>
                      </div>
                      <div className="w-[60%]">
                        <FormCheckbox
                          name="apiScheduleImmediately"
                          label="Immediately it reaches threshold"
                          checked={props.values.apiScheduleImmediately === true}
                        />
                        <FormCheckbox
                          name="apiScheduleNextday"
                          label="Send the next day"
                          checked={props.values.apiScheduleNextday === true}
                        />
                      </div>
                    </div>

                    <div className="w-full border-t border-t-gray-300 border-dashed" />
                    <div className="flex gap-10">
                      <div className="w-[40%] mt-3">
                        <SubHeaderText text="Time Zone" />
                        <p className="text-sm">Set time zone</p>
                      </div>
                      <div className="w-[60%]">
                        <FormCheckbox
                          name="localTimezone"
                          label="Local Time"
                          value="localTimezone"
                        />
                        <FormCheckbox name="wat" label="WAT" value="wat" />
                      </div>
                    </div>

                    <div className="w-full border-t border-t-gray-300 border-dashed" />
                    <div className="mt-4 flex gap-4">
                      <DangerButton className="rounded-md">CANCEL</DangerButton>
                      <Button className="rounded-md">SAVE</Button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default SettingsPage;

SettingsPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
