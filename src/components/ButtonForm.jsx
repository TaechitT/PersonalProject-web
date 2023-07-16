import LoginForm from "../Layout/LoginForm";
import RegisterForm from "../Layout/RegisterForm";
import { useAuth } from "../context/AuthContext";

export default function ButtonForm() {
  const { user, logout } = useAuth();

  const hdlLogout = () => {
    logout();
  };
  return (
    <div className="flex gap-2">
      {!user ? (
        <>
          <button className="border-solid border-2 text-white border-yellow-300 p-1 rounded-xl focus:ring-1 ring-yellow-200">
            <LoginForm />
          </button>
          <button className="border-solid border-2 text-white border-yellow-300 p-1 rounded-xl focus:ring-1 ring-yellow-200">
            <RegisterForm />
          </button>
        </>
      ) : (
        <button
          className="border-solid border-2 text-white border-yellow-300 p-1 rounded-xl focus:ring-1 ring-yellow-200"
          onClick={hdlLogout}
        >
          Logout
        </button>
      )}
    </div>
  );
}
