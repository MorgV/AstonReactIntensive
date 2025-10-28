import { type FC } from "react";
import { MainLayout } from "../shared/layouts/MainLayout";
import { PostList } from "../widgets/PostList/PostList";

export const App: FC = () => {
  return (
    <MainLayout>
      <PostList />
    </MainLayout>
  );
};
