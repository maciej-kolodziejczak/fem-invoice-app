import { useEffect, useState } from "react";
import { Icon } from "../Icon";
import s from "./ThemeSwitcher.module.scss";

enum Theme {
  DARK = "dark",
  LIGHT = "light",
}

enum ThemeIcon {
  "dark" = "moon",
  "light" = "sun",
}

const prefersDarkTheme = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches;

function setBodyClassName(theme: Theme) {
  document.body.classList.remove(`theme--${Theme.DARK}`);
  document.body.classList.remove(`theme--${Theme.LIGHT}`);
  document.body.classList.add(`theme--${theme}`);
}

export function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>(
    prefersDarkTheme ? Theme.DARK : Theme.LIGHT
  );

  useEffect(() => {
    setBodyClassName(theme);
  }, []);

  function onClick() {
    setTheme(() => {
      const nextTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;

      setBodyClassName(nextTheme);

      return nextTheme;
    });
  }

  return (
    <button type="button" className={s.root} onClick={onClick}>
      <Icon size={20} icon={ThemeIcon[theme]} />
    </button>
  );
}
