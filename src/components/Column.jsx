import React, { useState } from "react";
import { DeleteIcon, SettingIcon } from "../assets/Icon/Icon";
import { Link, useParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ShowColumn({
  title,
  image,
  handleDelete,
  id,
  toggleModal,
  item,
}) {
  const { user } = useAuth();
  // console.log(id, "555555555555555555555555555555");
  const btnRole = user?.role || "USER";
  // console.log(user);
  return (
    <div className="card  bg-base-100 shadow-xl p-4 z-1">
      <div className="flex justify-between">
        {btnRole === "ADMIN" ? (
          <>
            <DeleteIcon
              id={id}
              onClick={() => {
                handleDelete(id);
              }}
            />

            <div onClick={() => toggleModal(item)}>
              <SettingIcon />
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
      <div className=" p-10 z-1">
        <img
          src={item.coverImage}
          alt="story"
          className="rounded-md h-[15rem] w-[15rem]"
        />
      </div>
      <div className="card-body">
        <p>{title}</p>
        <div className="card-actions justify-end">
          <Link className="btn btn-primary" to={`/column/${id}`}>
            See
          </Link>
        </div>
      </div>
    </div>
  );
}

// <div className="card  bg-base-100 shadow-xl">
// <div>
//
// </div>
// <div className=" ">
//   <img src={image} alt="Shoes" className="rounded-xl " />
// </div>
// <div>
//   <h2 className="card-title">{title}</h2>
// </div>
// </div>
