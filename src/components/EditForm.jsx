import React, { useEffect, useState } from "react";
import { updateColumn, getColumnById, getColumn } from "../api/LifeHackApi";
import { toast } from "react-toastify";

export default function EditForm({
  open,
  toggle,
  item,
  updateEditColumn,
  image,
  setColumn,
  column,
}) {
  const [input, setInput] = useState({});
  const [file, setFile] = useState({});
  const { id } = item;
  const [loading, setloading] = useState(false);
  const handleChangeInput = async (e) => {
    // console.log(e.target.value);
    setInput({ ...input, [e.target.name]: e.target.value });
    if (
      e.target.name == "coverImage" ||
      e.target.name == "image1" ||
      e.target.name == "image2" ||
      e.target.name == "image3"
    ) {
      setFile({ ...file, [e.target.name]: e.target.files[0] });
    }
  };

  const hdlupdateColumn = async (e) => {
    try {
      e.preventDefault();

      const formData = new FormData();

      if (input.title) {
        formData.append("title", input.title);
      }
      if (input.step1) {
        formData.append("step1", input.step1);
      }
      if (input.step2) {
        formData.append("step2", input.step2);
      }
      if (input.step3) {
        formData.append("step3", input.step3);
      }
      if (file) {
        formData.append("image", file.coverImage);
        formData.append("image", file.image1);
        formData.append("image", file.image2);
        formData.append("image", file.image3);
      }
      let token = localStorage.getItem("token");
      console.log(id);
      setloading(true);
      await updateColumn(id, formData, token).then((rs) => {
        toast.success("Update Success");
        toggle();
        setloading(false);
      });

      getColumn(token).then((rs) => {
        setColumn(rs.data);
      });
    } catch (err) {
      toast.error("Update Error");
      console.log(err);
    }
  };
  useEffect(() => {
    setInput({
      title: item?.title,
      step1: item?.step1,
      step2: item?.step2,
      step3: item?.step3,
    });
  }, []);

  if (!open) {
    return null;
  }
  return (
    <>
      <div className="fixed top-0 right-0 left-0 bottom-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
        <div className="bg-white p-4 rounded-lg flex-col w-[50rem] h-[30rem]">
          <div className="flex justify-end">
            <button
              className="border-2 rounded-full w-[1rem] h-[1rem] flex justify-center items-center p-2"
              onClick={() => {
                toggle();
              }}
              // ((e) => { toggle() })(event)
            >
              x
            </button>
          </div>
          <div className="">
            <form onSubmit={hdlupdateColumn}>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label htmlFor="title">Title</label>
                  <input
                    id="title"
                    type="text"
                    placeholder="title"
                    name="title"
                    onChange={handleChangeInput}
                    value={item.title}
                  />
                </div>
                <div>
                  <label htmlFor="coverImage">Cover Image</label>
                  <input
                    id="coverImage"
                    type="file"
                    name="coverImage"
                    placeholder="coverImage"
                    onChange={handleChangeInput}
                  />
                </div>
                <div>
                  <label htmlFor="image1">Image1</label>
                  <input
                    id="image1"
                    type="file"
                    name="image1"
                    placeholder="image1"
                    onChange={handleChangeInput}
                  />
                </div>
                <div>
                  <label htmlFor="step1">Step1</label>
                  <input
                    id="step1"
                    type="text"
                    name="step1"
                    placeholder="step1"
                    onChange={handleChangeInput}
                  />
                </div>
                <div>
                  <label htmlFor="image2">Image2</label>
                  <input
                    id="image2"
                    type="file"
                    name="image2"
                    placeholder="image2"
                    onChange={handleChangeInput}
                  />
                </div>
                <div>
                  <label htmlFor="step2">Step2</label>
                  <input
                    id="step2"
                    type="text"
                    name="step2"
                    placeholder="step2"
                    onChange={handleChangeInput}
                  />
                </div>
                <div>
                  <label htmlFor="image3">Image3</label>
                  <input
                    id="image3"
                    type="file"
                    name="image3"
                    placeholder="image3"
                    onChange={handleChangeInput}
                  />
                </div>
                <div>
                  <label htmlFor="step3">Step3</label>
                  <input
                    id="step3"
                    type="text"
                    name="step3"
                    placeholder="step3"
                    onChange={handleChangeInput}
                  />
                </div>
                {loading ? (
                  <button className="btn">
                    <span className="loading loading-spinner"></span>
                    loading
                  </button>
                ) : (
                  <div>
                    <button className="border-2 border-black">Submit</button>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
