import { useState } from "react";
import ShowColumn from "../components/Column";
import EditForm from "../components/EditForm";
import { deleteColumn } from "../api/LifeHackApi";

export default function ShowAllcol({ item, setColumn, column }) {
  const [open, setOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editColumn, setEditColumn] = useState({});
  const updateColumn = (input) => {
    setColumn(input);
  };
  const toggleModal = (item = null) => {
    setOpen((prev) => !prev);
    if (item) {
      setEditColumn(item);
    } else setEditColumn({});
  };
  console.log(column, "55555555555555555555555555555");
  const handleDelete = (id) => {
    let token = localStorage.getItem("token");
    deleteColumn(id, token).then((rs) => {
      if (rs.data > 0) {
        const deleteIndex = column.findIndex((el) => el.id == id);
        const newColumn = [...column];
        newColumn.splice(deleteIndex, 1);
        setColumn(newColumn);
      }
    });
  };

  return (
    <>
      <div>
        <ShowColumn
          key={item.id}
          id={item.id}
          title={item.title}
          image={item.image1}
          handleDelete={handleDelete}
          toggleModal={toggleModal}
          item={item}
          setColumn={setColumn}
        />
      </div>
      <EditForm
        image={item.image}
        open={open}
        toggle={toggleModal}
        updateEditColumn={updateColumn}
        item={item}
        setColumn={setColumn}
        column={column}
      />
    </>
  );
}
