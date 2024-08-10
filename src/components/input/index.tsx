import { forwardRef } from "react";
import classNames from "classnames";
import { isValidObject } from "@/utils/object";

import type { FieldError } from "react-hook-form";

const classes = {
  input: `outline-none transition ease-in-out duration-300 border border-gray-150 rounded-lg peer bg-white shadow-input
    disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:border-gray-500 
    focus:border-blue focus:ring-2 focus:ring-blue-50 focus:shadow-sm`,
  error: "!border-red-500 !ring-0",
  sizing: "px-3 py-2 text-sm",
  fullWidth: "w-full",
};

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  inline?: boolean;
  fullWidth?: boolean;
  error?: FieldError;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      children,
      className,
      error,
      disabled,
      inline = false,
      fullWidth = false,
      ...props
    },
    ref
  ) => {
    const shouldShowErrors = isValidObject(error) && !disabled;

    return (
      <>
        <input
          ref={ref}
          disabled={disabled}
          className={classNames(
            classes.input,
            classes.sizing,
            {
              [classes.fullWidth]: fullWidth,
              [classes.error]: shouldShowErrors,
            },
            className
          )}
          {...props}
        />
        {shouldShowErrors && (
          <p
            className={classNames(
              "text-xs text-red-500",
              inline ? "pt-1" : "pl-3"
            )}
          >
            {error?.message}
          </p>
        )}
      </>
    );
  }
);

Input.displayName = "Input";
