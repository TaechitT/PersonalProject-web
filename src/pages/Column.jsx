import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getColumn } from "../api/LifeHackApi";
import ShowColumn from "../components/Column";
import { deleteColumn } from "../api/LifeHackApi";
import EditForm from "../components/EditForm";
import ShowAllcol from "./ShowAllcol";

function Column() {
  const [column, setColumn] = useState([]);

  // console.log(column, "columnnnnnnnnnnnnnnn");
  useEffect(() => {
    let token = localStorage.getItem("token");
    getColumn(token).then((rs) => {
      setColumn(rs.data);
    });
  }, []);

  return (
    <div className="grid grid-cols-4 gap-8 p-4">
      {column &&
        column.length > 0 &&
        column.map((item) => {
          return (
            <ShowAllcol
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image1}
              item={item}
              setColumn={setColumn}
              column={column}
            />
          );
        })}
    </div>
  );
}

export default Column;
