"use client";

import { animated, useSpring } from "@react-spring/web";
import * as React from "react";
import useBreakpointValue from "../../utils/useBreakpointValue";
import { AiOutlineClose } from "react-icons/ai";
import { createPortal } from "react-dom";

interface FadeProps {
  children: React.ReactElement;
  in?: boolean;
  onClick?: any;
  onEnter?: (node: HTMLElement, isAppearing: boolean) => void;
  onExited?: (node: HTMLElement, isAppearing: boolean) => void;
  ownerState?: any;
}

const Fade = React.forwardRef<HTMLDivElement, FadeProps>(function Fade(
  props,
  ref
) {
  const {
    children,
    in: open,
    onClick,
    onEnter,
    onExited,
    ownerState,
    ...other
  } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter(null as any, true);
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited(null as any, true);
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {React.cloneElement(children, { onClick })}
    </animated.div>
  );
});

interface IProps {
  title?: string | React.ReactNode;
  isOpen?: boolean;
  onClose: () => void;
  children: any;
  size?: "lg" | "sm";
  headerComponent?: React.ReactElement;
  showHeaderComponent?: boolean;
  showCloseIcon?: boolean;
  footer?: React.ReactElement;
}

export const SideModal = ({
  isOpen,
  onClose,
  children,
  size = "sm",
  title,
  headerComponent,
  showCloseIcon = true,
  showHeaderComponent = true,
  footer,
}: IProps) => {
  return (
    <ModalComponent
      aria-labelledby="spring-modal-title"
      aria-describedby="spring-modal-description"
      isOpen={isOpen}
      onClose={onClose}
      size={size}
    >
      <Fade in={isOpen}>
        <div className="flex flex-col gap-4 m-0">
          {showHeaderComponent ? (
            <div
              className={`flex justify-between sticky top-0 border-b-[0.5px] p-4 border-gray-100
              `}
            >
              {headerComponent ? (
                headerComponent
              ) : (
                <p className="text-lg font-semibold">{title}</p>
              )}
              {showHeaderComponent && showCloseIcon ? (
                <i onClick={onClose} className="text-gray-600 cursor-pointer">
                  <AiOutlineClose />
                </i>
              ) : null}
            </div>
          ) : null}
          <main className="bg-white w-full  max-h-[80vh] h-full rounded-md p-2 border border-dashed border-gray-500 overflow-y-scroll no-scrollbar">{children}</main>
        </div>
      </Fade>
    </ModalComponent>
  );
};

const ModalComponent = ({
  children,
  isOpen,
  onClose,
  size,
}: {
  isOpen: boolean;
  children: React.ReactNode;
  onClose: () => void;
  size: "sm" | "lg";
}) => {
  const sm = useBreakpointValue({
    base: "95%",
    md: "50%",
    lg: "40%",
    xl: "30%",
    xxl: "30%",
  });
  const lg = useBreakpointValue({
    base: "95%",
    md: "70%",
    lg: "70%",
    xl: "60%",
    xxl: "40%",
  });
  const width = `w-[${size === "sm" ? sm : size === "lg" ? lg : "70%"}]`;
  return (
    <>
      {isOpen
        ? createPortal(
            <div className="fixed top-0 w-screen h-screen z-[997] bg-overlay-black flex justify-end">
              <main
                className={`bg-white/30 h-fit shadow-lg w-[30%] ${width} p-4 rounded-md`}
              >
                {children}
              </main>
            </div>,
            document.body
          )
        : null}
    </>
  );
};
