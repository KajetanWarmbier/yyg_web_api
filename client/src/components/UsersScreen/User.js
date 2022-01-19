import { HiTrash } from "react-icons/hi";

const User = (props) => {
  return (
    <div>
      <div className="min-w-max grid grid-cols-2 content-evenly justify-evenly justify-items-center h-[3rem] bg-gray-200 text-gray-700 font-normal">
        <div>{props.userData.email}</div>
        <div>
          <HiTrash className="text-2xl hover:text-red-600 cursor-pointer" />
        </div>
      </div>
      <hr className="bg-gray-400 h-[2px]"></hr>
    </div>
  );
};

export default User;
