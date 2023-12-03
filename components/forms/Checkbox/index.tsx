import { useField } from "formik";
import React from "react";
import useBreakpointValue from "../../../utils/useBreakpointValue";
import { twMerge } from "tailwind-merge";

interface IProps {
  containerProps?: React.HTMLProps<HTMLDivElement>;
  name: string;
  value?: string;
  label?: string;
  subtitle?: string;
  labelClassName?: string;
  placeholder?: string;
  id?: string;
  required?: boolean;
  className?: string;
  disabled?: boolean;
  checked?: boolean;
}

export const FormCheckbox = ({
  containerProps,
  label,
  required,
  placeholder,
  disabled,
  className,
  labelClassName,
  subtitle,
  checked,
  ...rest
}: IProps) => {
  const [field, meta] = useField(rest);
  const fontSize = useBreakpointValue({
    base: "16px",
    md: "14px",
  });

  return (
    <div className={`my-4 ${className}`} {...containerProps}>
      <div className="w-full flex items-center gap-3">
        <input
          className="outline-none bg-blue_fade border-none focus:ring-0" type="checkbox"
          style={{
            fontSize,
          }}
          placeholder={placeholder}
          disabled={disabled}
          {...field}
          {...rest}
          checked={checked}
        />
        <div>
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
        </div>
      </div>
      {meta.touched && meta.error ? (
        <div className="text-xs text-red-500 mt-1">{meta.error}</div>
      ) : null}
    </div>
  );
};
