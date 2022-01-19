import { useState } from "react";
import Axios from "axios";
import { useSelector } from "react-redux";

const AddPicture = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [picData, setPicData] = useState("");
  const [token, setToken] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const formData = new FormData();
  const jwtToken = useSelector((state) => state.jwtToken);

  function uploadData() {
    setToken(jwtToken);
    formData.append("pictureImage", imageFile);
    formData.append("name", name);
    formData.append("type", type);
    formData.append("description", description);
    formData.append("picData", picData);
    formData.append("token", token);
    formData.append("imageUrl", imageUrl);

    Axios.post("http://localhost:5000/pictures/", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  }

  return (
    <div className="w-full mt-20 items-center justify-center align-middle">
      <div className="flex items-center justify-center">
        <div className="grid justify-items-end gap-2 m-5">
          <div>
            <label className="font-semibold">Name: </label>
            <input
              type="text"
              className="rounded-md"
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </div>
          <div>
            <label className="font-semibold">Type: </label>
            <input
              type="text"
              className="rounded-md"
              onChange={(event) => {
                setType(event.target.value);
              }}
            />
          </div>
          <div>
            <label className="font-semibold">Description: </label>
            <input
              type="text"
              className="rounded-md"
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />
          </div>
          <div>
            <label className="font-semibold">Pic. Data: </label>
            <input
              type="text"
              className="rounded-md"
              onChange={(event) => {
                setPicData(event.target.value);
              }}
            />
          </div>
          <div>
            <label className="font-semibold">Image URL: </label>
            <input
              type="text"
              className="rounded-md"
              onChange={(event) => {
                setImageUrl(event.target.value);
              }}
            />
          </div>

          <input
            type="file"
            className="block w-full float-right mt-2 text-sm text-slate-500
          file:mr-4 file:py-2 file:px-4
          file:rounded-md file:border-0 cursor-pointer
          file:text-medium file:font-semibold
          file:bg-slate-100 file:text-black
          hover:file:bg-slate-200"
            onChange={(event) => setImageFile(event.target.files[0])}
          ></input>
          <button
            className="block float-right w-fit px-4 py-2 mt-2 rounded-md text-medium text-white font-semibold bg-slate-500"
            onClick={uploadData}
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPicture;
