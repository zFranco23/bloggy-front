import { forwardRef } from "react";
import Link from "next/link";
import classNames from "classnames";

import type { ButtonVariant } from "@/types/button";

const classes = {
  button: `
    !outline-none block transition ease-in-out duration-300 
    disabled:opacity-50 disabled:cursor-not-allowed rounded-md hover:opacity-75`,
  sizing: "px-3.5 py-2 lg:px-4 lg:py-1.5 text-sm",
  variant: {
    primary: "bg-skyblue-90 hover:bg-blue text-white",
  },
};

interface IButton
  extends React.ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  variant?: ButtonVariant;
  url?: string;
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, IButton>(
  (
    {
      children,
      type = "button",
      variant = "primary",
      disabled = false,
      className,
      url = "",
      isLoading,
      ...props
    },
    ref
  ) => {
    const mainClasses = classNames(
      "text-center",
      classes.button,
      classes.sizing,
      classes.variant[variant],
      className
    );

    if (url) {
      return (
        <Link href={url} passHref className={mainClasses} {...props}>
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        disabled={disabled}
        type={type}
        className={mainClasses}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
