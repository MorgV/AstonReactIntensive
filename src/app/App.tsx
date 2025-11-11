import { type FC } from "react";
import { MainLayout } from "../shared/layouts/MainLayout";
import { Outlet } from "react-router-dom";

export const App: FC = () => {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};
