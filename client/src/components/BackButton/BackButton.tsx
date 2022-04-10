import { useNavigate } from "react-router-dom";

import { Icon } from "@/components/Icon";

import s from "./BackButton.module.scss";

export function BackButton() {
  const navigate = useNavigate();

  return (
    <div className={s.root}>
      <button type="button" onClick={() => navigate(-1)}>
        <Icon icon="arrow-left" size={8} />
        <span>Go back</span>
      </button>
    </div>
  );
}
