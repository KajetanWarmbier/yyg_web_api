import { useEffect, useState } from "react";
import Axios from "axios";
import Pic from "./Pic";

const PicList = () => {
  const [isLoading, setLoading] = useState(true);
  const [picturesList, setPicturesList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:5000/pictures/")
      .then((response) => {
        setPicturesList(response.data.info);
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
      <div className="min-w-max grid grid-cols-5 content-evenly justify-evenly justify-items-center h-[3rem] bg-gray-400 rounded-t-md text-gray-900 font-semibold">
        <div>Name</div>
        <div>Type</div>
        <div>Description</div>
        <div>Info</div>
        <div>Delete.</div>
      </div>
      <div>
        {picturesList.map((pic) => {
          return <Pic picData={pic} />;
        })}
      </div>
    </div>
  );
};

export default PicList;
