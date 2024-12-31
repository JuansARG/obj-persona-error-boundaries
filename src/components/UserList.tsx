import type { User } from "../types";

interface UserListProps {
  userList: User[] | null;
}

export const UserList = ({ userList }: UserListProps) => {
  return (
    <ul>
      {userList!.map(({ name }) => (
        <li key={name}>{name}</li>
      ))}
    </ul>
  );
};
