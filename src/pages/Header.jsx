import { Outlet } from "react-router-dom";
import LifeHackLogo from "../assets/logo.png";
import ButtonForm from "../components/ButtonForm";
import Button from "../components/ButtonHeader";

export default function Header() {
  return (
    <>
      <div className="flex items-center justify-between border-b-2 mb-8 p-4 mx-8">
        <div className="row-1">
          <img className="w-[6rem] h-[6rem] rounded-full" src={LifeHackLogo} />
        </div>
        <div>
          <Button />
        </div>
        <div>
          <ButtonForm />
        </div>
      </div>
    </>
  );
}
