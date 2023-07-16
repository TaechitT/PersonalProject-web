import { useState } from "react";

import { addColumn } from "../api/LifeHackApi";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// const {user} = {user: value, setUser: fn, logout: fn}

export default function ModalAdmin() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [loading, setloading] = useState(false);
  const [input, setInput] = useState({
    // userId: "",
    title: "",
    step1: "",
    step2: "",
    step3: "",
  });
  const [files, setFiles] = useState({});

  const hdlChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleChangeFile = (e) => {
    if (e.target.files[0]) {
      setFiles({ ...files, [e.target.name]: e.target.files[0] });
    }
  };
  const hdlSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("userId", user.id);
    for (let key in input) {
      formData.append(key, input[key]);
    }

    formData.append("image", files.coverImage);
    formData.append("image", files.image1);
    formData.append("image", files.image2);
    formData.append("image", files.image3);

    let token = localStorage.getItem("token");
    setloading(true);
    addColumn(formData, token)
      .then((rs) => {
        console.log(rs);
        toast.success("Create Success");
        setloading(false);
        navigate("/column");
      })
      .catch((err) => console.log(err));
  };

  // const cloneInput = { ...input };
  // console.log(cloneInput);
  // console.log(files);
  return (
    <div className="bg-gray-400 w-[80%] h-[30rem] items-center m-auto border-2 p-4 border-white rounded-xl">
      <div className="">
        <form className=" flex gap-8 p-2 justify-center " onSubmit={hdlSubmit}>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label htmlFor="title">Title</label>
              <input
                id="title"
                type="text"
                placeholder="title"
                name="title"
                onChange={hdlChangeInput}
              />
            </div>
            <div>
              <label htmlFor="coverImage">Cover Image</label>
              <input
                id="coverImage"
                type="file"
                name="coverImage"
                placeholder="coverImage"
                onChange={handleChangeFile}
              />
            </div>
            <div>
              <label htmlFor="image1">Image1</label>
              <input
                id="image1"
                type="file"
                name="image1"
                placeholder="image1"
                onChange={handleChangeFile}
              />
            </div>
            <div>
              <label htmlFor="step1">Step1</label>
              <input
                id="step1"
                type="text"
                name="step1"
                placeholder="step1"
                onChange={hdlChangeInput}
              />
            </div>
            <div>
              <label htmlFor="image2">Image2</label>
              <input
                id="image2"
                type="file"
                name="image2"
                placeholder="image2"
                onChange={handleChangeFile}
              />
            </div>
            <div>
              <label htmlFor="step2">Step2</label>
              <input
                id="step2"
                type="text"
                name="step2"
                placeholder="step2"
                onChange={hdlChangeInput}
              />
            </div>
            <div>
              <label htmlFor="image3">Image3</label>
              <input
                id="image3"
                type="file"
                name="image3"
                placeholder="image3"
                onChange={handleChangeFile}
              />
            </div>
            <div>
              <label htmlFor="step3">Step3</label>
              <input
                id="step3"
                type="text"
                name="step3"
                placeholder="step3"
                onChange={hdlChangeInput}
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
  );
}
