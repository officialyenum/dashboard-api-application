import Link from "next/link";
import { BsStars } from "react-icons/bs";
import { RxPerson } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";

import React, { useEffect, useState } from "react";
import { AppLogo } from "./logo";
import { twMerge } from "tailwind-merge";
import { useRouter } from "next/router";
import { Avatar } from "./avatar";
import { TrashIcon, VMessageIcon, VNotificationIcon } from "./icons";
import { SubHeaderText } from "./texts";
import ConfirmationModal from "./modals/ConfirmationModal";
import useDisclosure from "../utils/useDisclosure";
import { SideModal } from "./modals/SideModal";
import { useGetRequest } from "api/useGetRequest";
import { Spinner } from "./loaders";

const AppHeader = ({ currentUser }) => {
  const notificationDeleteHandler = useDisclosure();
  const notificationPreviewHandler = useDisclosure();
  const { pathname } = useRouter();
  const handleSignOut = (e) => {
    e.preventDefault();
  };

  const [animateHeader, setAnimateHeader] = useState(false);

  useEffect(() => {
    const listener = () => {
      if (window.scrollY > 100) {
        setAnimateHeader(true);
      } else setAnimateHeader(false);
    };
    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  const { data, isLoading } = useGetRequest<undefined, any>({
    service: "/api/Notification",
    tag: "NotificationService",
    enabled: notificationPreviewHandler.isOpen,
  });

  const activeClassName =
    "font-medium text-blue-500 rounded-lg underline underline-offset-4";
  return (
    <header
      className={twMerge(
        "w-full sticky top-0 z-30 backdrop-filter backdrop-blur-lg trasition ease-in-out duration-500 px-5",
        animateHeader && "shadow-lg shadow-blue-100/30 bg-white/50"
      )}
    >
      <div
        className={twMerge(
          "flex justify-between h-16 w-full mx-auto trasition ease-in-out duration-500",
          animateHeader && "h-16"
        )}
      >
        <div className="flex justify-center items-center cursor-pointer">
          <div className="cursor-pointer m-2 p-1 rounded-lg">
            <GiHamburgerMenu size={20} />
          </div>
          <Link href="/dashboard">
            <AppLogo />
          </Link>
        </div>
        <div className="cursor-pointer m-2 p-1 rounded-lg inline-block lg:hidden">
          <GiHamburgerMenu size={20} />
        </div>
        <div className="hidden lg:flex items-center justify-between w-full">
          <nav className="flex justify-center items-center gap-7 w-[65%]">
            <div>
              <input
                placeholder="Search by User, transaction ID, invoice ID ...."
                className="outline-none bg-blue_fade border-none focus:ring-0 w-full"
              />
            </div>
          </nav>
          <div className="flex items-center justify-end gap-4 w-[32%]">
            <div>
              <VMessageIcon className="cursor-pointer" />
            </div>
            <div>
              <VNotificationIcon
                className="cursor-pointer"
                onClick={() => notificationPreviewHandler.onOpen()}
              />
            </div>
            <div className="flex items-center gap-3">
              <Avatar src={require("../public/assets/profile.png")} size={30} />
              <div>
                <p className="text-sm font-bold">Ret Silo</p>
                <p className="text-gray-400 text-xs">Admin</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SideModal
        isOpen={notificationPreviewHandler.isOpen}
        onClose={notificationPreviewHandler.onClose}
      >
        {isLoading ? (
          <Spinner />
        ) : (
          (data || []).map((notif) => (
            <NotificationItem
              key={notif}
              onDeleteClick={(id) => {
                console.log(id);
                notificationDeleteHandler.onOpen();
              }}
            />
          ))
        )}
      </SideModal>
      <ConfirmationModal
        description="Are you sure you want to delete?"
        isOpen={notificationDeleteHandler.isOpen}
        onClose={notificationDeleteHandler.onClose}
        onProceed={() => console.log("data")}
        info="Awesome"
      />
    </header>
  );
};

export default AppHeader;

interface INotifProps {
  onDeleteClick?: (id: string) => void;
}

const NotificationItem: React.FC<INotifProps> = ({ onDeleteClick }) => {
  return (
    <div className="border-b border-dashed border-gray-500 p-1 group">
      <label
        className={twMerge(
          "border-l-4 border-l-blue-500 p-2",
          "flex gap-4 items-start rounded-md overflow-hidden"
        )}
      >
        <input
          type="checkbox"
          className="ml-2 focus:ring-0 rounded-md w-5 h-5 cursor-pointer"
        />
        <div className="w-[80%]">
          <h1 className="font-bold text-xl">
            New Api has been created successfully
          </h1>
          <p className="text-sm text-gray-400">21/03/2023 4:16:33 PM</p>
        </div>
        <div className="group-hover:flex hidden cursor-pointer">
          <TrashIcon onClick={() => onDeleteClick("1")} />
        </div>
      </label>
    </div>
  );
};
