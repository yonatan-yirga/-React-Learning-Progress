import { useContext } from "react";
import UserContext from "./UserContext";

function Users() {

  const users = useContext(UserContext);

  return (

    <div>

      <h1>Users</h1>

      {users.map((user) => (

        <div key={user.id}>

          <h2>{user.firstName}</h2>

          <p>{user.email}</p>

        </div>

      ))}

    </div>

  );

}

export default Users;