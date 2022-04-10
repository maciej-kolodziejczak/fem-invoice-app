import { PropsWithChildren } from "react";

import s from './Content.module.scss';

export function Content({ children }: PropsWithChildren<{}>) {
  return (
    <div className={s.root}>{children}</div>
  );
}