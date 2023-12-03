import React from "react";
import { Breadcrumbs } from "../../components/breadcrumbs";
import {
  EditIcon,
  EmailVerifiedIcon,
  HomeIcon,
  TrashIcon,
} from "../../components/icons";
import Layout from "../../components/layouts/Layout";
import { SectionHeader } from "../../components/sectionHeader";
import Link from "next/link";
import { Avatar, AvatarGroup } from "../../components/avatar";
import StatusPill from "../../components/Pills/StatusPill";
import { Tabs, Tab } from "../../components/tab";
import Table, { TableRow, TableHead, TableData } from "../../components/table";
import Pagination from "../../components/pagination";
import ActionSuccessfulModal from "../../components/modals/ActionSuccessfulModal";
import { HeaderText } from "../../components/texts";
import useDisclosure from "../../utils/useDisclosure";
import { Button } from "../../components/forms";
import ConfirmationModal from "../../components/modals/ConfirmationModal";
import { useAppDispatch } from "../../utils/redux";
import { onCloseAppLoader, onOpenAppLoader } from "../../store";
import { EmptyState } from "../../components/emptyState";
import { useGetRequest } from "api/useGetRequest";
import { ClientUserDtoIn } from "generated";
import { useMutationRequest } from "api/useMutationRequest";
import AddNewUserModal from "components/modals/AddNewUserModal";

const UserManagement = () => {
  const dispatch = useAppDispatch();
  const imageSources = [];

  const newUserModalHandler = useDisclosure();
  const userDeletedModalHandler = useDisclosure();
  const userInvitationResentModalHandler = useDisclosure();
  const userDeleteConfirmationModalHandler = useDisclosure();

  const { isLoading, data } = useGetRequest<undefined, ClientUserDtoIn[]>({
    service: "/api/UserManagement",
    tag: "UserManagementService",
  });

  const { isLoading: isDeleting, trigger: triggerDelete } = useMutationRequest<
    undefined,
    ClientUserDtoIn
  >({
    service: "/api/UserManagement",
    tag: "UserManagementService",
    method: "delete",
    onSuccess: (val) => {
      dispatch(onCloseAppLoader());
      userDeleteConfirmationModalHandler.onClose();
      userDeletedModalHandler.onOpen();
    },
  });

  React.useEffect(() => {
    if (isDeleting) {
      dispatch(onOpenAppLoader());
    } else {
      dispatch(onCloseAppLoader());
    }

    () => dispatch(onCloseAppLoader());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDeleting]);

  const handleDeleteUser = () => {
    triggerDelete(undefined);
    userDeleteConfirmationModalHandler.onClose();
  };

  return (
    <div>
      <div className="my-7">
        <Breadcrumbs
          items={[
            { title: "Home", icon: <HomeIcon />, to: "/dashboard" },
            { title: "User Management", to: "/user-management" },
          ]}
        />
      </div>
      <SectionHeader
        title="Users"
        btnText="Add New User"
        onButtonPress={() => newUserModalHandler.onOpen()}
        rightContent={
          <div className="w-[100px] h-10 bg-white rounded-md flex items-center justify-center">
            <select
              value="popular"
              className="ring-0 shadow-none border-none outline-none"
            >
              <option value="popular">popular</option>
            </select>
          </div>
        }
      />
      <div className="my-5 bg-white rounded-lg p-6">
        <div>
          <div className="mb-5">
            <h2 className="text-2xl font-bold">User Roles Available</h2>
            <p className="text-sm text-gray-400">
              A role provides access to predefined menus and features so that
              depending on the assigned role (Super Admin, Manager, Customer
              Support), a user can have access to what they needs
            </p>
          </div>
          <div className="w-full flex gap-4">
            <div className="w-[25%] rounded-md border border-gray-300 border-dashed p-2 flex items-center">
              <div className="w-[60%]">
                <h3 className="text-lg font-semibold">Super Admin</h3>
                <p className="text-sm">3 Users</p>
                <Link href="#" className="text-blue-500 text-xs">
                  Learn More
                </Link>
              </div>
              <div className="w-[40%]">
                <AvatarGroup number={3} images={imageSources.slice(0, 3)} />
              </div>
            </div>
            <div className="w-[25%] rounded-md border border-gray-300 border-dashed p-2 flex items-center">
              <div className="w-[60%]">
                <h3 className="text-lg font-semibold">Customer Support</h3>
                <p className="text-sm">9 Users</p>
                <Link href="#" className="text-blue-500 text-xs">
                  Learn More
                </Link>
              </div>
              <div className="w-[40%]">
                <AvatarGroup number={3} images={imageSources.slice(0, 9)} />
              </div>
            </div>
            <div className="w-[25%] rounded-md border border-gray-300 border-dashed p-2 flex items-center">
              <div className="w-[60%]">
                <h3 className="text-lg font-semibold">Database Manager</h3>
                <p className="text-sm">4 Users</p>
                <Link href="#" className="text-blue-500 text-xs">
                  Learn More
                </Link>
              </div>
              <div className="w-[40%]">
                <AvatarGroup number={3} images={imageSources.slice(0, 4)} />
              </div>
            </div>
            <div className="w-[25%] rounded-md border border-gray-300 border-dashed p-2 flex items-center">
              <div className="w-[60%]">
                <h3 className="text-lg font-semibold">Moderation Office</h3>
                <p className="text-sm">6 Users</p>
                <Link href="#" className="text-blue-500 text-xs">
                  Learn More
                </Link>
              </div>
              <div className="w-[40%]">
                <AvatarGroup number={3} images={imageSources.slice(0, 6)} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-5 bg-white rounded-lg p-6 ">
        <div className="mb-8">
          <h2 className="text-2xl font-bold">User Roles Available</h2>
          <p className="text-sm text-gray-400 my-2">
            View all your users and their verification status below in each tabs
          </p>
        </div>
        <Tabs>
          <Tab label="All Users (19)">
            <Table
              tableHeader={
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email Address</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Access</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              }
              tableBody={[1, 2, 3, 4, 5].map((item, index) => (
                <TableRow key={index}>
                  <TableData>
                    <Link
                      href={`/user-management/1/Al-Mohammad-Aliyu `}
                      className="flex items-center gap-3 cursor-pointer"
                    >
                      <Avatar src={imageSources[0]} size="md" />
                      <p className="text-sm font-bold">Al-Mohammad Aliyu </p>
                    </Link>
                  </TableData>
                  <TableData>
                    <div className="flex items-center gap-2">
                      <EmailVerifiedIcon /> <p>vickzdev@gmail.com</p>
                    </div>
                  </TableData>
                  <TableData>Database Manager</TableData>
                  <TableData>custom</TableData>
                  <TableData>
                    <div className="flex items-center gap-3">
                      <div className="cursor-pointer">
                        <EditIcon />
                      </div>
                      <div
                        className="cursor-pointer"
                        onClick={userDeleteConfirmationModalHandler.onOpen}
                      >
                        <TrashIcon />
                      </div>
                    </div>
                  </TableData>
                </TableRow>
              ))}
            />
            <Pagination
              currentPage={1}
              itemsPerPage={10}
              onPageChange={(page) => console.log(page)}
              totalItems={100}
              totalPages={10}
            />
          </Tab>
          <Tab label="Verified (1)">
            <Table
              tableHeader={
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email Address</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Access</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              }
              tableBody={[1, 2, 3, 4, 5].map((item, index) => (
                <TableRow key={index}>
                  <TableData>
                    <div className="flex items-center gap-3">
                      <Avatar src={imageSources[0]} size="md" />
                      <p className="text-sm font-bold">Al-Mohammad Aliyu </p>
                    </div>
                  </TableData>
                  <TableData>
                    <div className="flex items-center gap-2">
                      <EmailVerifiedIcon /> <p>vickzdev@gmail.com</p>
                    </div>
                  </TableData>
                  <TableData>Database Manager</TableData>
                  <TableData>custom</TableData>
                  <TableData>
                    <div className="flex items-center gap-3">
                      <div className="cursor-pointer">
                        <EditIcon />
                      </div>
                      <div
                        className="cursor-pointer"
                        onClick={userDeleteConfirmationModalHandler.onOpen}
                      >
                        <TrashIcon />
                      </div>
                    </div>
                  </TableData>
                </TableRow>
              ))}
            />
            <Pagination
              currentPage={1}
              itemsPerPage={10}
              onPageChange={(page) => console.log(page)}
              totalItems={100}
              totalPages={10}
            />
          </Tab>
          <Tab label="Unverified (4)">
            <Table
              tableHeader={
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email Address</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Access</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              }
              tableBody={[1, 2, 3, 4, 5].map((item, index) => (
                <TableRow key={index}>
                  <TableData>
                    <div className="flex items-center gap-3">
                      <Avatar src={imageSources[0]} size="md" />
                      <p className="text-sm font-bold">Al-Mohammad Aliyu </p>
                    </div>
                  </TableData>
                  <TableData>
                    <div className="flex items-center gap-2">
                      <EmailVerifiedIcon /> <p>vickzdev@gmail.com</p>
                    </div>
                  </TableData>
                  <TableData>Database Manager</TableData>
                  <TableData>custom</TableData>
                  <TableData>
                    <div className="flex items-center gap-3">
                      {true ? (
                        <Button className="rounded-lg py-2">
                          Resend Verification
                        </Button>
                      ) : (
                        <>
                          <div className="cursor-pointer">
                            <EditIcon />
                          </div>
                          <div
                            className="cursor-pointer"
                            onClick={userDeleteConfirmationModalHandler.onOpen}
                          >
                            <TrashIcon />
                          </div>
                        </>
                      )}
                    </div>
                  </TableData>
                </TableRow>
              ))}
            />
            <EmptyState
              title="There are no users yet."
              info="Click “Add New User” to create new users"
            />
            <Pagination
              currentPage={1}
              itemsPerPage={10}
              onPageChange={(page) => console.log(page)}
              totalItems={100}
              totalPages={10}
            />
          </Tab>
        </Tabs>
      </div>
      <AddNewUserModal
        isOpen={newUserModalHandler.isOpen}
        onClose={newUserModalHandler.onClose}
      />
      <ActionSuccessfulModal
        isOpen={userDeletedModalHandler.isOpen}
        onClose={userDeletedModalHandler.onClose}
        onProceed={() => console.log("proceeding")}
        proceedButtonText="Add New"
        content={
          <>
            <HeaderText text="Action Successful" className="text-blue-500" />
            <p className="text-center text-sm">
              Users have been deleted from your account. You can still add new
              users by clicking the “Add New” button below.
            </p>
          </>
        }
      />
      <ConfirmationModal
        isOpen={userDeleteConfirmationModalHandler.isOpen}
        onClose={userDeleteConfirmationModalHandler.onClose}
        onProceed={handleDeleteUser}
        title="ARE YOU SURE?"
        titleColor="text-red-600"
        info="DELETE USER"
        description="When you delete these users, their roles and permissions will be vacated and their logs will be lost forever"
      />
    </div>
  );
};

export default UserManagement;

UserManagement.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
