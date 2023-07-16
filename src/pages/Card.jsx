import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getColumnById } from "../api/LifeHackApi";

function CardColumn() {
  const [showColumn, setshowColumn] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    let token = localStorage.getItem("token");
    getColumnById(id, token).then((rs) => {
      setshowColumn(rs.data);
    });
  }, [id]);
  // const col = showColumn.map((item) => {
  //   return item;
  // });
  console.log(showColumn, "Carddddddddddddddddddd");
  // console.log(col, "itemmmmmmmmmmmmmm");
  console.log(id, "id");
  return (
    <>
      <div className="flex justify-center text-[3rem] text-stone-50 bg-gray-400 p-2 m-auto w-[60rem] mb-8 rounded-xl">
        <div>{showColumn.title}</div>
      </div>
      <div className="flex justify-center">
        <img
          className="w-[60rem] rounded-xl"
          src={showColumn.image1}
          alt="error"
        />
      </div>
      <div className="text-black flex justify-center mt-8 mb-8 bg-white w-[60rem] m-auto rounded-lg">
        <div>{showColumn.step1}</div>
      </div>
      <div className="flex justify-center">
        <img className="w-[60rem] rounded-xl" src={showColumn.image2} alt="" />
      </div>
      <div className="flex justify-center">
        <div className="text-black flex justify-center mt-8 mb-8 bg-white w-[60rem] m-auto rounded-lg">
          {showColumn.step2}
        </div>
      </div>
      <div className="flex justify-center">
        <img className="w-[60rem] rounded-xl" src={showColumn.image3} alt="" />
      </div>
      <div>
        <div className="text-black flex justify-center mt-8 mb-8 bg-white w-[60rem] m-auto rounded-lg">
          {showColumn.step3}
        </div>
      </div>
    </>
  );
}

export default CardColumn;
