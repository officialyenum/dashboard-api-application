import { Spinner } from "components/loaders";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonOptions {
  isLoading?: boolean;
  forceHover?: boolean;
  rounded?: boolean;
}
export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  ButtonOptions;

export const Button = (props: ButtonProps) => {
  const {
    type = "button",
    children,
    className,
    disabled,
    isLoading,
    rounded,
    ...rest
  } = props;
  return (
    <button
      className={twMerge(
        "bg-blue-500 hover:bg-blue-700 w-full py-3 flex items-center justify-center text-sm text-white",
        disabled &&
          "bg-blue_fade hover:bg-blue_fade cursor-not-allowed !text-gray-300",
        rounded && "rounded",
        className
      )}
      type={type}
      {...rest}
    >
      {isLoading ? <Spinner /> : children}
    </button>
  );
};

export const PaleButton = (props: ButtonProps) => {
  const {
    type = "button",
    children,
    disabled,
    rounded,
    className,
    ...rest
  } = props;
  return (
    <button
      className={twMerge(
        "bg-white shadow hover:bg-blue-400 group w-full py-3 flex items-center justify-center ",
        disabled && "bg-blue_fade hover:bg-blue_fade cursor-not-allowed",
        rounded && "rounded",
        className
      )}
      {...rest}
    >
      <p
        className={`text-sm text-blue-500 group-hover:text-white ${
          props.disabled ? "!text-gray-300" : ""
        }`}
      >
        {children}
      </p>
    </button>
  );
};

export const DangerButton = (props: ButtonProps) => {
  const {
    type = "button",
    children,
    disabled,
    className,
    rounded,
    ...rest
  } = props;
  return (
    <button
      className={twMerge(
        "bg-red-500 shadow hover:bg-red-700 w-full py-3 flex items-center justify-center rounded",
        disabled && "bg-blue_fade hover:bg-blue_fade cursor-not-allowed",
        rounded && "rounded",
        className
      )}
      {...rest}
    >
      <p
        className={`text-sm text-white ${
          props.disabled ? "!text-gray-300" : ""
        }`}
      >
        {children}
      </p>
    </button>
  );
};

export const DangerPaleButton = (props: ButtonProps) => {
  const {
    type = "button",
    children,
    disabled,
    rounded,
    className,
    ...rest
  } = props;
  return (
    <button
      className={twMerge(
        "bg-white shadow hover:bg-red-500 group w-full py-3 flex items-center justify-center transition duration-300",
        disabled && "bg-red-200 hover:bg-red-200 cursor-not-allowed",
        rounded && "rounded",
        className
      )}
      {...rest}
    >
      <p
        className={`text-sm text-red-500 group-hover:text-white ${
          props.disabled ? "!text-gray-500" : ""
        }`}
      >
        {children}
      </p>
    </button>
  );
};
