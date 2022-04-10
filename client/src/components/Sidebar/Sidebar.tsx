import { UserImage } from "@/components/UserImage";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

import s from "./Sidebar.module.scss";

export function Sidebar() {
  return <div className={s.root}>
    <a href='/' className={s.logo}>
      <img src='/logo.svg' alt='Invoice App' />
    </a>
    <div className={s.sidebarItem}>
      <ThemeSwitcher />
    </div>
    <div className={s.sidebarItem}>
      <UserImage src='/image-avatar.jpg' />
    </div>
  </div>;
}
