import { useEffect, useState } from "react";
import Axios from "axios";
import User from "./User";

const UsersList = () => {
  const [isLoading, setLoading] = useState(true);
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:5000/users/userslist")
      .then((response) => {
        setUsersList(response.data.info);
        setLoading(false);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  if (isLoading) {
    return <div className="flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-w-full h-fit">
      <div className="min-w-max grid grid-cols-2 content-evenly justify-evenly justify-items-center h-[3rem] bg-gray-400 rounded-t-md text-gray-900 font-semibold">
        <div>Email</div>
        <div>Delete.</div>
      </div>
      <div>
        {usersList.map((user) => {
          return <User userData={user} />;
        })}
      </div>
    </div>
  );
};

export default UsersList;
