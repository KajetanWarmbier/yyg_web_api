import Axios from "axios";
import { useState } from "react";
import UsersList from "./UsersList";

const UsersMain = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const addUser = () => {
    Axios.post("http://localhost:5000/users/signup", {
      email: email,
      password: password,
    })
      .then(() => {
        setEmail("");
        setPassword("");

        Array.from(document.querySelectorAll("input")).forEach(
          (input) => (input.value = "")
        );
        alert("User has been added!");
      })
      .catch((error) => {
        alert("Something went wrong.");
      });
  };

  return (
    <div className="w-full">
      <div className="w-fit my-5">
        <div className="grid grid-cols-3 gap-2 mx-5">
          <div>
            <input
              type="text"
              name="email"
              placeholder="E-mail"
              className="rounded-md py-2"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            ></input>
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="rounded-md py-2"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            ></input>
          </div>
          <div>
            <button
              className="bg-slate-200 font-bold text-zinc-500 p-2 rounded-md transition ease-out duration-300 hover:bg-slate-600 hover:text-zinc-200"
              onClick={addUser}
            >
              Add User
            </button>
          </div>
        </div>
        <div className="m-5">
          <UsersList />
        </div>
      </div>
    </div>
  );
};

export default UsersMain;
