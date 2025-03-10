import React, { useEffect, useState } from "react";
import UserContext from "./userContext";

const UserState = ({ children }) => {
  const [users, setUser] = useState([]);
  const [ err, setError ] =useState(false)
  const [ loading , setLoading ] = useState(false)

  const url = "https://jsonplaceholder.typicode.com/users";

  const getUser = async () => {
    // API call
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();
    // console.log(json)
    setUser(json);
  };

  const deletefun =  (els) => {
    setLoading(true)
    fetch(`https://jsonplaceholder.typicode.com/users/${els.id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json"
      }
    })
    .then((res) => res.json())
    .then((datas) => {
      setUser(
        users.filter((el) => {
          return el.id !== els.id;
        })
      );
      setLoading(false);
    })
    .catch((err) => {
      setError(true);
      setLoading(false);
    });
  };

  return (
    <UserContext.Provider value={{ getUser, users , deletefun }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserState;
