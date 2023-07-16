import { useState } from "react";
import { register } from "../api/LifeHackApi";
import { toast } from "react-toastify";

export default function RegisterForm() {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmpassword: "",
    role: "USER",
  });

  const hdlChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const [open, setOpen] = useState(false);
  const toggleModalRegister = (item = null) => {
    setOpen((prev) => !prev);
    if (item) {
      hdlSubmit(item);
    } else hdlSubmit({});
  };
  const hdlSubmit = (e) => {
    const { firstName, lastName, email, password, confirmpassword, role } =
      input;
    e.preventDefault();

    // console.log(input);
    if (password !== confirmpassword)
      return alert("Password not macth, recheck");
    register({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      role: role,
    })
      .then((rs) => {
        toast.success("register successfully");
        setOpen(!open);
      })
      .catch((err) => {
        console.log(err), alert("Please Fill all");
      });
  };

  if (!open) {
    return <button onClick={() => toggleModalRegister()}>Register</button>;
  }
  return (
    <div className="fixed top-0 right-0 left-0 bottom-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
      <div className="bg-white p-4 rounded-lg flex-col">
        <div className="flex justify-end">
          <button
            className="border-2 rounded-full w-[1rem] h-[1rem] flex justify-center items-center p-2 text-black"
            onClick={() => {
              toggleModalRegister();
            }}
          >
            x
          </button>
        </div>
        <form className="modal-box w-[45vw] h-[45vh] p-2 " onSubmit={hdlSubmit}>
          <h1 className="text-black">Register</h1>
          <div className="grid grid-cols-2 gap-4 p-2">
            <input
              className="border-2 border-black rounded-md text-black"
              type="text"
              placeholder="firstname"
              onChange={hdlChangeInput}
              value={input.firstName}
              name="firstName"
            />
            <input
              className="border-2 border-black rounded-md text-black"
              type="text"
              placeholder="lastname"
              onChange={hdlChangeInput}
              value={input.lastName}
              name="lastName"
            />
          </div>
          <div className="col-span-full gap-4 p-2 ">
            <input
              className="w-full border-2 border-black rounded-md text-black"
              type="email"
              placeholder="Email"
              onChange={hdlChangeInput}
              value={input.email}
              name="email"
            />
          </div>
          <div className="col-span-full gap-4 p-2">
            <input
              className="w-full border-2 border-black rounded-md text-black"
              type="password"
              placeholder="Password"
              onChange={hdlChangeInput}
              value={input.password}
              name="password"
            />
          </div>
          <div className="col-span-full gap-4 p-2">
            <input
              className="w-full border-2 border-black rounded-md text-black"
              type="password"
              placeholder="Confirmpassword"
              onChange={hdlChangeInput}
              value={input.confirmpassword}
              name="confirmpassword"
            />
          </div>
          <button
            className="border-2 bg-blue-600 text-white p-2 rounded-md "
            type="submit"
            // onClick={() => {

            //   setOpen(!open);
            // }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
