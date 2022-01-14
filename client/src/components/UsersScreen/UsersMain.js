import Axios from "axios";
import { useState } from "react";

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
    <div className="m-10">
      <div className="grid grid-rows-3">
        <div>
          <input
            type="text"
            name="email"
            placeholder="E-mail"
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
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default UsersMain;
