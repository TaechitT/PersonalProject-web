import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Button() {
  const { user } = useAuth();
  const btnContent = user?.role || "USER";

  return (
    <div className="flex gap-4 ">
      <Link
        className="border-solid border-2 border-yellow-300 p-1 rounded-xl focus:ring-1 ring-yellow-200 text-white"
        to={"/"}
      >
        Home
      </Link>
      <Link
        className="border-solid border-2 border-yellow-300 p-1 rounded-xl focus:ring-1 ring-yellow-200 text-white"
        to={"/about"}
      >
        About Us
      </Link>
      <Link
        className="border-solid border-2 border-yellow-300 p-1 rounded-xl focus:ring-1 ring-yellow-200 text-white"
        to={"/column"}
      >
        Column
      </Link>
      {/* <Link
        className="border-solid border-2 border-yellow-300 p-1 rounded-xl focus:ring-1 ring-yellow-200 text-white"
        to={"/favorite"}
      > */}
      {/* Favorite
      </Link> */}
      {btnContent === "ADMIN" ? (
        <Link
          className="border-solid border-2 border-yellow-300 p-1 rounded-xl focus:ring-1 ring-yellow-200 text-white"
          to={"/admin"}
        >
          Create Content
        </Link>
      ) : (
        <></>
      )}
    </div>
  );
}
