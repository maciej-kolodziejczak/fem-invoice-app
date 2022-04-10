import { Routes, Route, Navigate, Outlet } from "react-router-dom";

import { Sidebar } from "@/components/Sidebar";
import { Content } from "@/components/Content";

import { Invoice } from '@/views/Invoice';
import { Invoices } from '@/views/Invoices';

import s from "./Main.module.scss";

export function Main() {
  return (
    <div className={s.root}>
      <Sidebar />
      <Content>
        <Routes>
          <Route path='/invoices' element={<Outlet />}>
            <Route path='' element={<Invoices />} />
            <Route path=':id' element={<Invoice />} />
          </Route>
          <Route path='*' element={<Navigate to='/invoices' replace />} />
        </Routes>
      </Content>
    </div>
  );
}
