import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearToken } from "../../actions";

const Nav = () => {
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(clearToken());
  };

  return (
    <div className="bg-slate-200 rounded-md min-w-max h-[4rem] mt-5 mx-4">
      <div className="flex h-[4rem] ml-4 items-center float-left">
        <Link to="/">
          <h1 className="font-bold text-zinc-600 text-4xl transition ease-in-out duration-300 hover:text-zinc-900">
            YYG
          </h1>
        </Link>
      </div>
      <div className="flex h-[4rem] items-center float-right">
        <ul className="flex mx-4">
          <Link to="/pictures">
            <li className="mx-2 text-xl text-zinc-400 transition ease-in-out duration-300 hover:text-zinc-900">
              Pictures
            </li>
          </Link>
          <Link to="/users">
            <li className="mx-2 text-xl text-zinc-400 transition ease-in-out duration-300 hover:text-zinc-900">
              Users
            </li>
          </Link>
          <li
            className="mx-2 text-xl hover:cursor-pointer  text-zinc-400 transition ease-in-out duration-300 hover:text-zinc-900"
            onClick={logout}
          >
            Logout
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
