import { useField } from "formik";
import React from "react";
import useBreakpointValue from "../../../utils/useBreakpointValue";
import { twMerge } from "tailwind-merge";

interface IProps {
  containerProps?: React.HTMLProps<HTMLDivElement>;
  name: string;
  type?: string;
  label?: string;
  subtitle?: string;
  labelClassName?: string;
  placeholder?: string;
  id?: string;
  RightIcon?: React.ReactElement;
  LeftIcon?: React.ReactElement;
  required?: boolean;
  className?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const BaseInput = ({
  containerProps,
  label,
  required,
  placeholder,
  disabled,
  className,
  RightIcon,
  LeftIcon,
  labelClassName,
  subtitle,
  ...rest
}: IProps) => {
  const fontSize = useBreakpointValue({
    base: "16px",
    md: "14px",
  });

  return (
    <div className={`my-4 ${className}`} {...containerProps}>
      {label && (
        <label
          className={twMerge("mb-1 text-sm text-[#707070]", labelClassName)}
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      {subtitle && (
        <label className={twMerge("mb-4 text-sm text-gray-400 block")}>
          {subtitle}
        </label>
      )}
      <div className="w-full bg-blue_fade p-2 rounded-md flex items-center gap-3 py-4">
        {LeftIcon ? (
          <div className="border-r border-r-gray-300 px-2">{LeftIcon}</div>
        ) : null}
        <input
          className="outline-none bg-blue_fade border-none focus:ring-0 w-full"
          style={{
            fontSize,
          }}
          placeholder={placeholder}
          disabled={disabled}
          {...rest}
        />
        {RightIcon ? <div className="px-2">{RightIcon}</div> : null}
      </div>
    </div>
  );
};
