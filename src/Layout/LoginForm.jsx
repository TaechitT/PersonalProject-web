import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { login, getMe } from "../api/LifeHackApi";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const hdlChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const hdlSubmit = (e) => {
    e.preventDefault();

    login(input)
      .then((rs) => {
        localStorage.setItem("token", rs.data.token);
        return getMe(rs.data.token);
      })
      .then((rs) => {
        console.log(rs.data);
        navigate("/column");
        setUser(rs.data);
      })
      .catch((err) => alert(err.response.data.error || err.message));
  };
  return (
    <div>
      <button className="" onClick={() => window.Login.showModal()}>
        Login
      </button>
      <dialog id="Login" className="modal">
        <form className="modal-box w-[45vw] h-[45vh] p-2 " onSubmit={hdlSubmit}>
          <div className="border-2 border-gray-300 ">
            <h1 className="text-xl">Login</h1>
            <div className="col-span-full gap-4 p-2">
              <div className="">
                <span>username</span>
                <input
                  className="w-full border-2 border-black rounded-md"
                  type="text"
                  placeholder="username"
                  name="email"
                  onChange={hdlChangeInput}
                  value={input.email}
                />
              </div>
            </div>
            <div className="col-span-full gap-4 p-2">
              <h1>password</h1>
              <input
                className="w-full border-2 border-black rounded-md"
                type="password"
                placeholder="Password"
                name="password"
                onChange={hdlChangeInput}
                value={input.password}
              />
            </div>
            <button
              className="border-2 bg-blue-600 text-white p-2 rounded-md"
              onSubmit={hdlSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
}
