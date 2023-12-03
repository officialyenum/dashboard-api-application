import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { RxDashboard } from "react-icons/rx";
import { twMerge } from "tailwind-merge";
import { useAppSelector } from "../utils/redux";

const Sidebar = ({ children }) => {
  const user = useAppSelector((state) => state?.user);

  const { pathname } = useRouter();

  const links = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: <RxDashboard />,
      type: "link",
      canShow: true,
      isActive: pathname === "/dashboard",
    },
    {
      type: "group",
      title: "Management",
    },
    {
      name: "User Management",
      href: "/user-management",
      icon: <RxDashboard />,
      type: "link",
      canShow: true,
      // user?.accountEnabled && user?.subscriptionStatus !== "UNSUBSCRIBED",
      isActive: pathname === "/user-management",
    },
    {
      name: "Payment History",
      href: "/payment-history",
      icon: <RxDashboard />,
      type: "link",
      canShow:
        user?.accountEnabled && user?.subscriptionStatus !== "UNSUBSCRIBED",
      isActive: pathname === "/payment-history",
    },
    {
      name: "Invoices",
      href: "/invoice-management",
      icon: <RxDashboard />,
      type: "link",
      canShow: true,
      // user?.accountEnabled && user?.subscriptionStatus !== "UNSUBSCRIBED",
      isActive: pathname === "/invoice-management",
    },
    {
      name: "API Keys",
      href: "/api-management",
      icon: <RxDashboard />,
      type: "link",
      canShow: true,
      // user?.accountEnabled && user?.subscriptionStatus !== "UNSUBSCRIBED",
      isActive: pathname === "/api-management",
    },
    {
      type: "group",
      title: "Administration",
    },
    {
      name: "Subscription",
      href: "/subscription",
      icon: <RxDashboard />,
      type: "link",
      canShow: true,
      // user?.accountEnabled,
      isActive: pathname === "/subscription",
    },
    {
      name: "Settings",
      href: "/settings",
      icon: <RxDashboard />,
      type: "link",
      canShow: true,
      // user?.accountEnabled && user?.subscriptionStatus !== "UNSUBSCRIBED",
      isActive: pathname === "/settings",
    },
  ];

  return (
    <div className="flex flex-row h-[calc(100vh-5rem)]">
      <aside className="w-[15%] overflow-y-auto">
        <div className="flex flex-col gap-4 mx-3">
          {links.map((link, _idx) => (
            <React.Fragment key={_idx}>
              {link.type === "link" ? (
                <Link
                  href={link.href}
                  className={twMerge(
                    "flex flex-row w-full my-2 items-center p-2",
                    !link?.canShow &&
                      "text-gray-200 cursor-not-allowed pointer-events-none",
                    link?.isActive && "border-l-[3px] border-l-blue-500"
                  )}
                >
                  <RxDashboard size={20} />
                  <h1 className="ml-2 text-sm">{link?.name}</h1>
                </Link>
              ) : link.type === "group" ? (
                <h1 className="pl-2 my-2 text-slate-400 font-bold text-sm uppercase">
                  {link?.title}
                </h1>
              ) : null}
            </React.Fragment>
          ))}
        </div>
      </aside>
      <main className="w-[85%] overflow-y-auto px-5">{children}</main>
    </div>
  );
};

export default Sidebar;
