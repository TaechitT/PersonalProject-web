import Router from "../src/route/Router";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="bg-[url('https://cdn.pixabay.com/photo/2020/02/07/21/12/everest-4828404_1280.png')] ">
      <Router />
      <ToastContainer position="top-center" theme="dark" autoClose={3000} />
    </div>
  );
}

export default App;
