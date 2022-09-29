import Link from "next/link";
import React from "react";

const LinkButton = ({
  href = "",
  text = "insert text here",
  color = "primary",
  textColor = "light",
  disabled = false,
}) => {
  const colors = {
    primary:
      "bg-primary text-light shadow-primary/50 hover:bg-primary-hover hover:shadow-primary/50 active:bg-primary-active active:shadow-primary/50 disabled:bg-primary-disabled",
    secondary:
      "bg-secondary text-light shadow-secondary/50 hover:bg-secondary-hover hover:shadow-secondary/50 active:bg-secondary-active active:shadow-secondary/50 disabled:bg-secondary-disabled",
    success:
      "bg-success text-light shadow-success/50 hover:bg-success-hover hover:shadow-success/50 active:bg-success-active active:shadow-success/50 disabled:bg-success-disabled",
    warning:
      "bg-warning text-light shadow-warning/50 hover:bg-warning-hover hover:shadow-warning/50 active:bg-warning-active active:shadow-warning/50 disabled:bg-warning-disabled",
    danger:
      "bg-danger text-light shadow-danger/50 hover:bg-danger-hover hover:shadow-danger/50 active:bg-danger-active active:shadow-danger/50 disabled:bg-danger-disabled",
    info: "bg-info text-light shadow-info/50 hover:bg-info-hover hover:shadow-info/50 active:bg-info-active active:shadow-info/50 disabled:bg-info-disabled",
    light:
      "bg-light text-dark shadow-light/50 hover:bg-light-hover hover:shadow-light/50 active:bg-light-active active:shadow-light/50 disabled:bg-light-disabled",
    dark: "bg-dark text-light shadow-dark/50 hover:bg-dark-hover hover:shadow-dark/50 active:bg-dark-active active:shadow-dark/50 disabled:bg-dark-disabled",
  };
  return (
    <Link href={href}>
      <button
        className={`rounded px-3 py-2 shadow transition-all duration-200 ease-in-out hover:shadow-lg active:shadow disabled:shadow-none ${colors[color]}`}
        disabled={disabled}
      >
        {text}
      </button>
    </Link>
  );
};

export default LinkButton;
