import { MouseEventHandler, PropsWithChildren } from "react";

import { Icon } from "@/components/Icon";
import { IconName } from "@/components/Icon/Icon";

import s from "./Button.module.scss";

type ButtonProps = {
  icon?: IconName;
  type?: "button" | "submit";
  variant?: "primary" | 'danger' | "secondary" | "tetriary";
  onClick?: MouseEventHandler;
};

export function Button({
  icon,
  type = "submit",
  variant = "primary",
  onClick = () => {},
  children,
}: PropsWithChildren<ButtonProps>) {
  return (
    <button
      type={type}
      className={s[variant]}
      onClick={onClick}
    >
      {!!icon && (
        <span className={s.icon}>
          <Icon icon={icon} size={10} />
        </span>
      )}
      <span>{children}</span>
    </button>
  );
}
