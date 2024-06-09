import { FaListOl, FaDownload } from "react-icons/fa";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { FaClipboardUser } from "react-icons/fa6";
import { IoCreate } from "react-icons/io5";
import { GiReceiveMoney, GiTakeMyMoney } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import userProfile from "../../public/userProfile.svg";
import useAuth from "../hooks/useAuth";
import { GiBank } from "react-icons/gi";
import { MdDashboard } from "react-icons/md";
import { RiBankLine } from "react-icons/ri";
import { LuBuilding2 } from "react-icons/lu";
import Accordion from "./Accordion";


const Sidebar = () => {

  const { setLoading } = useAuth()

  const navigate = useNavigate()

  const logOutBtn = () => {
    localStorage.removeItem('token')
    navigate('/login')
    setLoading(false)
  }

  return (
    <div className="xl:space-y-8  h-full">
      {/* title section start */}
      <h1 className="xl:text-xl xl:uppercase xl:font-bold text-center text-[#363434]">
        <Link to="/">dashboard</Link>
      </h1>
      {/* title section end */}
      {/* link section start */}
      <Accordion />

      <button onClick={logOutBtn} className="btn w-full bg-slate-200 hover:bg-slate-200 font-bold">
            Logout
          </button>

     
      {/* link section end */}
    </div>
  );
};

export default Sidebar;
