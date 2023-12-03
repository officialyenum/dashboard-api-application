import { useMutationRequest } from "api/useMutationRequest";
import { onCloseAppLoader, onOpenAppLoader, updateAppUser } from "../../store";
import { useAppDispatch } from "../../utils/redux";
import AtmCard from "../cards/AtmCard";
import { Button, FormInput, PaleButton } from "../forms";
import { VAtmCardIcon, VPlusIcon } from "../icons";
import { Modal } from "./Modal";
import { ClientUserDtoIn } from "generated";
import { Formik } from "formik";
import { FormSelect } from "components/forms/Select";
import Select from "components/forms/Select/ui/Select";
import { useGetRoles } from "hooks/app/useGetRoles";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddNewUserModal: React.FC<IProps> = ({ isOpen, onClose }) => {
  const { isLoading, trigger } = useMutationRequest<ClientUserDtoIn, any>({
    service: "/api/UserManagement",
    method: "post",
    tag: "UserManagementService",
  });

  const { data } = useGetRoles();

  const roles = data?.map((role) => ({
    label: role.name,
    value: role.id,
  }));

  return (
    <Formik
      initialValues={{
        email: "",
        firstName: "",
        lastName: "",
        roles: [],
      }}
      onSubmit={(values) => {
        trigger(values);
      }}
    >
      {({ values, handleSubmit }) => (
        <Modal
          size="sm"
          isOpen={isOpen}
          onClose={onClose}
          showHeaderComponent={false}
          footer={
            <div className="w-full flex flex-row">
              <PaleButton onClick={onClose} className="uppercase text-xs">
                Close
              </PaleButton>
              <Button
                onClick={() => handleSubmit()}
                className="uppercase text-xs"
              >
                Create User
              </Button>
            </div>
          }
        >
          <div className="flex flex-col items-center gap-3 p-2">
            <div className="flex items-center gap-4 w-full">
              <div className="bg-gray-100 p-3 rounded-lg">
                <VAtmCardIcon />
              </div>
              <div>
                <h1 className="font-bold text-lg">Add New User</h1>
                <p className="text-xs">
                  Switch to another option to receive payment easily
                </p>
              </div>
            </div>
            <div className="w-full">
              <FormInput
                name="firstName"
                label="First Name"
                placeholder="Enter first name"
              />
              <FormInput
                name="lastName"
                label="Last Name"
                placeholder="Enter last name"
              />
              <FormInput
                name="email"
                label="Email"
                placeholder="Enter email"
                type="email"
              />
              <Select
                data={values.roles}
                multiple={true}
                needSearch={true}
                handleChange={(value) => console.log(value)}
              />
              {/* <FormSelect
                name="roles"
                label="Roles"
                isMulti
                options={[
                  { label: "Admin", value: "Admin" },
                  { label: "User", value: "User" },
                ]}
              /> */}
            </div>
          </div>
        </Modal>
      )}
    </Formik>
  );
};

export default AddNewUserModal;
