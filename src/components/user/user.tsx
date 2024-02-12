import { useEffect } from "react";
import { useActions } from "../../hooks/useActions";
import { useUser } from "../../hooks/useUser";

export default function User() {
  const { isLoading, error, user } = useUser();
  const { getUserById } = useActions();

  return (
    <div>
      <button onClick={() => getUserById(1)}>get user</button>
      <h1>
        User:&nbsp;
        {isLoading && "Loading..."}
        {error && "error with getting user!"}
        {!isLoading && user.name && user.name}
      </h1>
    </div>
  );
}
