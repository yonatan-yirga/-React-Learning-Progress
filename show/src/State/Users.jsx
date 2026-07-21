import { useContext } from "react";
import UserContext from "./UserContext";
import "./Users.css";

function Users() {

  const users = useContext(UserContext);

  return (

    <div className="users-container">

      <h1>Users</h1>

      {users.map((user) => (

        <div key={user.id} className="user-card">

          <h2>{user.firstName}</h2>

          <p>{user.email}</p>

        </div>

      ))}

    </div>

  );

}

export default Users;