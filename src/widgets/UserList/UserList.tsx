// src/widgets/UserList/UserList.tsx
import type { FC } from "react";
import { useAppSelector } from "../../app/providers/store/hooks/redux";
import { usersSelectors } from "../../entities/user/model/slice/userSlice";
import { usersApi } from "../../entities/user/api/usersApi";

export const UserList: FC = () => {
  const { data: fetchedUsers = [] } = usersApi.useFetchUsersQuery();
  const users = useAppSelector(usersSelectors.selectAll);

  return (
    <ul>
      {(users.length ? users : fetchedUsers).map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};
