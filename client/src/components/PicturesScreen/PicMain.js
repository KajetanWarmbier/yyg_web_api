import PicList from "./PicList";
import { Link } from "react-router-dom";

const PicMain = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 justify-items-start w-fit">
        <div className="m-10">
          <input
            type="text"
            name="id"
            placeholder="PIC ID"
            className="bg-slate-50 rounded-l-md p-2"
          ></input>
          <button className="bg-slate-100 py-2 px-4 rounded-r-md text-slate-500 font-bold transition ease-in-out duration-300 hover:bg-gray-200">
            Filtr
          </button>
        </div>
        <div className="m-10">
          <Link to="/pictures/addpicture">
            <button className="bg-slate-100 py-2 px-4 rounded-md text-slate-500 font-bold transition ease-in-out duration-300 hover:bg-gray-200">
              Add Picture
            </button>
          </Link>
        </div>
      </div>

      <PicList />
    </div>
  );
};

export default PicMain;
