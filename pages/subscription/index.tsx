/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { HeaderText } from "../../components/texts";
import ActionSuccessfulModal from "../../components/modals/ActionSuccessfulModal";
import useDisclosure from "../../utils/useDisclosure";
import ConfirmationModal from "../../components/modals/ConfirmationModal";
import { Button } from "../../components/forms";
import ChangePaymentOptionModal from "../../components/modals/ChangePaymentOptionModal";
import Layout from "../../components/layouts/Layout";
import AtmCard from "../../components/cards/AtmCard";
import { VHorizontalMenuIcon } from "../../components/icons";
import { Tab, Tabs } from "../../components/tab";
import Table, { TableData, TableHead, TableRow } from "../../components/table";
import StatusPill from "../../components/Pills/StatusPill";
import AddANewCardModal from "../../components/modals/AddANewCardModal";
import { onCloseAppLoader, onOpenAppLoader } from "../../store";
import { useAppDispatch } from "../../utils/redux";
import { useGetRequest } from "api/useGetRequest";
import { SubscriptionDtoOutListSuccessResponseDtoOut } from "generated";
import { EmptyState } from "components/emptyState";

const SubscriptionPage = () => {
  const dispatch = useAppDispatch();
  const authorizePaymentModalHandler = useDisclosure();
  const paymentSuccessFulModalHandler = useDisclosure();
  const revertToDefaultModalHandler = useDisclosure();
  const changePaymentOptionsModalHandler = useDisclosure();
  const addNewCardModalHandler = useDisclosure();
  const paymentDeletedModalHandler = useDisclosure();
  const paymentMethodAddedModalHandler = useDisclosure();
  const deleteCardConfirmationModalHandler = useDisclosure();

  const { data: subscriptions, isLoading } = useGetRequest<
    {
      pageIndex?: number;
      lastId?: number;
    },
    SubscriptionDtoOutListSuccessResponseDtoOut
  >({
    service: "/api/Subscription",
    tag: "SubscriptionService",
    // payload: {
    //   lastId: 1,
    //   pageIndex: 1,
    // },
  });

  console.log(subscriptions);

  const handleDeleteCard = () => {
    deleteCardConfirmationModalHandler.onClose();
    dispatch(onOpenAppLoader());
    setTimeout(() => {
      dispatch(onCloseAppLoader());
      paymentDeletedModalHandler.onOpen();
    }, 3000);
  };
  return (
    <div>
      {/* breadcrumbs */}
      <HeaderText text="Manage Payment & Subscription" />
      <div className="w-full rounded-2xl p-6 bg-white/50 flex justify-between gap-4 mt-6">
        <div className="w-[70%] bg-white rounded-lg p-4">
          {/* left content */}
          <div className="mb-5">
            <h1 className="text-lg font-bold">Subscription List</h1>
            <p className="text-sm text-gray-400">
              From here you can see a list of all your subscriptions and their
              status as they're tabbed into different sections.
            </p>
          </div>
          <Tabs>
            <Tab
              label={`All Subscriptions (${subscriptions?.data?.length ?? 0})`}
            >
              {subscriptions?.data?.length > 0 ? (
                <Table
                  tableHeader={
                    <TableRow>
                      <TableHead>SUBSCRIPTION ID</TableHead>
                      <TableHead>USERS</TableHead>
                      <TableHead>AMOUNT</TableHead>
                      <TableHead>DATE</TableHead>
                      <TableHead>STATUS</TableHead>
                    </TableRow>
                  }
                  tableBody={subscriptions?.data?.map((item, index) => (
                    <TableRow key={index}>
                      <TableData>{item?.id ?? "--/--"}</TableData>
                      <TableData>{item?.totalUsers ?? "--/--"}</TableData>
                      <TableData>{item?.price ?? "--/--"}</TableData>
                      <TableData>{item?.createDate ?? "--/--"}</TableData>
                      <TableData>
                        <StatusPill status={item?.status} />
                      </TableData>
                    </TableRow>
                  ))}
                />
              ) : (
                <EmptyState
                  title="No Subscriptions at the moment"
                  info="We are unable to retrieve any subscriptions at this time, Try refreshing or try again later."
                />
              )}
            </Tab>
            <Tab label={`Active (${subscriptions?.data?.length ?? 0})`}>
              {subscriptions?.data?.length > 0 ? (
                <Table
                  tableHeader={
                    <TableRow>
                      <TableHead>SUBSCRIPTION ID</TableHead>
                      <TableHead>USERS</TableHead>
                      <TableHead>AMOUNT</TableHead>
                      <TableHead>DATE</TableHead>
                      <TableHead>STATUS</TableHead>
                    </TableRow>
                  }
                  tableBody={subscriptions?.data?.map((item, index) => (
                    <TableRow key={index}>
                      <TableData>{item?.id ?? "--/--"}</TableData>
                      <TableData>{item?.totalUsers ?? "--/--"}</TableData>
                      <TableData>{item?.price ?? "--/--"}</TableData>
                      <TableData>{item?.createDate ?? "--/--"}</TableData>
                      <TableData>
                        <StatusPill status={item?.status} />
                      </TableData>
                    </TableRow>
                  ))}
                />
              ) : (
                <EmptyState
                  title="No Active Subscriptions at the moment"
                  info="We are unable to retrieve any active subscriptions at this time, Try refreshing or try again later."
                />
              )}
            </Tab>
            <Tab label="Expired (4)">
              <Table
                tableHeader={
                  <TableRow>
                    <TableHead>SUBSCRIPTION ID</TableHead>
                    <TableHead>USERS</TableHead>
                    <TableHead>AMOUNT</TableHead>
                    <TableHead>DATE</TableHead>
                    <TableHead>STATUS</TableHead>
                  </TableRow>
                }
                tableBody={[1, 2, 3, 4, 5].map((item, index) => (
                  <TableRow key={index}>
                    <TableData>099199313</TableData>
                    <TableData>1-10</TableData>
                    <TableData>1,350</TableData>
                    <TableData>22/2/2022 3:45:01 PM</TableData>
                    <TableData>
                      <StatusPill status="expired" />
                    </TableData>
                  </TableRow>
                ))}
              />
            </Tab>
          </Tabs>
        </div>
        <div className="w-[30%]">
          {/* right content */}
          <div className="bg-white rounded-lg p-4">
            <div className="flex items-center justify-between border-b border-dashed border-b-gray-300 pb-3 ">
              <p className="text-md font-bold uppercase">
                Subscription Fee
                <span className="text-md font-light text-gray-300">(NGN)</span>
              </p>
              <VHorizontalMenuIcon className="cursor-pointer" />
            </div>
            <div className="mt-8">
              <h1 className="font-bold text-3xl mb-4">
                ₦ 1,398.99
                <span className="text-sm font-light text-gray-300 ml-2">
                  (TAX INCL.)
                </span>
              </h1>
              <div className="bg-red-100 px-3 py-2 rounded-xl w-fit">
                <p className="text-red-800 font-extrabold text-xs">
                  Due on mar, 20th, 2023
                </p>
              </div>
            </div>
          </div>
          <div className="p-3">
            {/* <div className="flex items-center justify-between">
              <p className="text-sm">Payment Method</p>
              <p className="text-xs uppercase text-blue-500 font-bold">
                Change Payment option
              </p>
            </div> */}
            <div className="mt-2 mb-4">
              <AtmCard
                handleDeleteCard={deleteCardConfirmationModalHandler.onOpen}
              />
            </div>
            <Button
              onClick={changePaymentOptionsModalHandler.onOpen}
              rounded
              className="uppercase font-bold"
            >
              Change Payment Option
            </Button>
          </div>
        </div>
      </div>
      <ChangePaymentOptionModal
        isOpen={changePaymentOptionsModalHandler.isOpen}
        onClose={changePaymentOptionsModalHandler.onClose}
        onRevertToDefault={() => {
          changePaymentOptionsModalHandler.onClose();
          revertToDefaultModalHandler.onOpen();
        }}
        onAddNewPaymentMethod={() => {
          changePaymentOptionsModalHandler.onClose();
          addNewCardModalHandler.onOpen();
        }}
      />
      <AddANewCardModal
        isOpen={addNewCardModalHandler.isOpen}
        onClose={addNewCardModalHandler.onClose}
        onProceed={() => {
          addNewCardModalHandler.onClose();
          paymentMethodAddedModalHandler.onOpen();
        }}
      />
      <ActionSuccessfulModal
        isOpen={authorizePaymentModalHandler.isOpen}
        onClose={authorizePaymentModalHandler.onClose}
        onProceed={() => console.log("proceeding")}
        content={
          <>
            <HeaderText text="Action Successful" className="text-blue-500" />
            <p className="text-center text-sm">
              You will be redirected to our Payment Gateway to authorize this
              transaction for future subscriptions.
            </p>
            <p className="text-sm text-center font-bold">
              Your subscription fee is NGN1,350
            </p>
          </>
        }
      />
      <ActionSuccessfulModal
        isOpen={paymentSuccessFulModalHandler.isOpen}
        onClose={paymentSuccessFulModalHandler.onClose}
        onProceed={() => console.log("successfully, proceeding")}
        content={
          <>
            <HeaderText text="Action Successful" className="text-blue-500" />
            <p className="text-center text-sm">
              Your card has been successfully billed.
            </p>
            <p className="text-center text-sm">
              Your subscription is now active and can be seen on your account.
            </p>
            <p className="text-sm text-center font-bold">
              Your subscription fee is NGN1,350
            </p>
          </>
        }
      />
      <ActionSuccessfulModal
        isOpen={paymentDeletedModalHandler.isOpen}
        onClose={paymentDeletedModalHandler.onClose}
        onProceed={() => {
          paymentDeletedModalHandler.onClose();
          addNewCardModalHandler.onOpen();
        }}
        proceedButtonText="Add New"
        content={
          <>
            <HeaderText text="CARD DELETED" className="text-blue-500" />
            <p className="text-center text-sm">
              Your payment option has been deleted from your account. You can
              add a new one by clicking the "Add New" button below.
            </p>
          </>
        }
      />
      <ActionSuccessfulModal
        isOpen={paymentMethodAddedModalHandler.isOpen}
        onClose={paymentMethodAddedModalHandler.onClose}
        onProceed={() => paymentMethodAddedModalHandler.onClose()}
        proceedButtonText="CONTINUE"
        content={
          <>
            <HeaderText text="ACTION SUCCESSFUL" className="text-blue-500" />
            <p className="text-center text-sm">
              Your payment option has been added to your account. It can now be
              used to make payments on your account.
            </p>
          </>
        }
      />
      <ConfirmationModal
        isOpen={deleteCardConfirmationModalHandler.isOpen}
        onClose={deleteCardConfirmationModalHandler.onClose}
        onProceed={handleDeleteCard}
        title="ARE YOU SURE?"
        titleColor="text-red-600"
        info="DELETE CARD?"
        description="When you delete this card, it can no longer be used to accept payment from your account."
      />
      <ConfirmationModal
        isOpen={revertToDefaultModalHandler.isOpen}
        onClose={revertToDefaultModalHandler.onClose}
        onProceed={() => console.log("reverting and proceeding")}
        title="Revert to default?"
        description="The default payment method set by the company is a “Wire Transfer”. Reverting to this means you want your subscription verifcation method to be manual."
      />
      <ActionSuccessfulModal
        isOpen={paymentSuccessFulModalHandler.isOpen}
        onClose={paymentSuccessFulModalHandler.onClose}
        onProceed={() => console.log("successfully, proceeding")}
        proceedButtonText="Add New"
        content={
          <>
            <HeaderText
              text="Payment Method Reverted"
              className="text-blue-500"
            />
            <p className="text-center text-sm">
              You will now have to send your subscription manually via a ank
              transfer and the verification will also be done manually whcih
              could lead to some delays.
            </p>
          </>
        }
      />
    </div>
  );
};

SubscriptionPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default SubscriptionPage;
