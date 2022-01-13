import { useState } from "react";
import Axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setToken } from "../actions";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const logMeIn = () => {
    Axios.post("http://localhost:5000/users/login", {
      email: email,
      password: password,
    })
      .then((response) => {
        dispatch(setToken(response.data.token));
      })
      .catch((error) => {
        alert("Auth failed.");
      });
    setPassword("");
  };

  return (
    <div className="bg-slate-400 flex w-screen h-screen items-center justify-center font-semibold">
      <div className="flex bg-gray-200 text-black w-[45vh] h-[30vh] rounded-md items-center justify-center">
        <div className="grid grid-rows-3 w-[40vh]">
          <div className="mt-2 mb-2">
            <input
              type="text"
              name="email"
              placeholder="E-mail"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              className="bg-white p-2 rounded-md h-[6vh] w-full"
            ></input>
          </div>
          <div className="mt-2 mb-2">
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              className="bg-white p-2 rounded-md h-[6vh] w-full"
            ></input>
          </div>
          <div className="flex justify-center mt-2 mb-2">
            <button
              className="bg-slate-100 w-full rounded-md font-semibold h-[6vh] hover:bg-slate-400"
              onClick={logMeIn}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
