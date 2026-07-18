import { useEffect, useState } from "react";
import UserContext from "./UserContext";

function UserProvider({ children }) {

  const [users, setUsers] = useState([]);

  useEffect(() => {

    async function getUsers() {

      const response = await fetch("https://dummyjson.com/users");

      const data = await response.json();

      setUsers(data.users);

    }

    getUsers();

  }, []);

  return (

    <UserContext.Provider value={users}>

      {children}

    </UserContext.Provider>

  );

}

export default UserProvider;