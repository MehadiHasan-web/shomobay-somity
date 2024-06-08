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


const Sidebar = () => {

  const { setLoading } = useAuth()

  const navigate = useNavigate()

  const logOutBtn = () => {
    localStorage.removeItem('token')
    navigate('/login')
    setLoading(false)
  }

  return (
    <div className="xl:space-y-8 bg-[#FFFFFF]">
      {/* title section start */}
      <h1 className="xl:text-xl xl:uppercase xl:font-bold text-center text-[#363434]">
        <Link to="/">dashboard</Link>
      </h1>
      {/* title section end */}
      {/* userProfile section start */}
      <div>
        <img
          src={userProfile}
          alt=""
          className="xl:w-[50%] xl:h-[50%] mx-auto"
        />
      </div>
      {/* userProfile section end */}
      {/* link section start */}
      <ul className=" pl-3 space-y-3">
        <li className="text-[#9494ad]">
          <Link to="/" className="flex items-center gap-3">
            <MdDashboard className="xl:text-3xl"></MdDashboard>
            <span className="xl:text-base">Dashboard</span>
          </Link>
        </li>
        <li className="text-[#9494ad]">
          <Link to="/register" className="flex items-center gap-3">
            <MdOutlineVerifiedUser className="xl:text-3xl"></MdOutlineVerifiedUser>
            <span className="xl:text-base">User Register</span>
          </Link>
        </li>
        <li className="text-[#9494ad]">
          <Link to="/myloan" className="flex items-center gap-3">
            <FaClipboardUser className="xl:text-3xl"></FaClipboardUser>
            <span className="xl:text-base">User Details</span>
          </Link>
        </li>
        <li className="text-[#9494ad]">
          <Link to="/" className="flex items-center gap-3">
            <FaListOl className="xl:text-3xl"></FaListOl>
            <span className="xl:text-base">Lone List</span>
          </Link>
        </li>
        <li className="text-[#9494ad]">
          <Link to="/society" className="flex items-center gap-3">
            <IoCreate className="xl:text-3xl"></IoCreate>
            <span className="xl:text-base">Create Society</span>
          </Link>
        </li>
        <li className="text-[#9494ad]">
          <Link to="/loanInstallment" className="flex items-center gap-3">
            <GiBank className="xl:text-3xl"></GiBank>
            <span className="xl:text-base">LoanInstallment</span>
          </Link>
        </li>
        <li className="text-[#9494ad]">
          <Link to="/loanInstallment-create" className="flex items-center gap-3">
            <LuBuilding2 className="xl:text-3xl"></LuBuilding2>
            <span className="xl:text-base">LoanInstallment Create</span>
          </Link>
        </li>
        <li className="text-[#9494ad]">
          <Link to="/installment-create" className="flex items-center gap-3">
            <RiBankLine className="xl:text-3xl"></RiBankLine>
            <span className="xl:text-base">Installment Create</span>
          </Link>
        </li>
        <li className="text-[#9494ad]">
          <Link to="/installment" className="flex items-center gap-3">
            <FaDownload className="xl:text-3xl"></FaDownload>
            <span className="xl:text-base">Installment</span>
          </Link>
        </li>
        <li className="text-[#9494ad]">
          <Link to="/" className="flex items-center gap-3">
            <GiReceiveMoney className="xl:text-3xl"></GiReceiveMoney>
            <span className="xl:text-base">Lone Received</span>
          </Link>
        </li>
        <li className="text-[#9494ad]">
          <Link to="/loan" className="flex items-center gap-3">
            <GiTakeMyMoney className="xl:text-3xl"></GiTakeMyMoney>
            <span className="xl:text-base">Lone</span>
          </Link>
        </li>
        <li className="text-[#9494ad]">
          <Link to="/loan-list" className="flex items-center gap-3">
            <span className="xl:text-base">Lone List</span>
          </Link>
        </li>
        <li className="text-[#9494ad]">
          <button onClick={logOutBtn} className="btn">
            LogOut
          </button>
        </li>
      </ul>
      {/* link section end */}
    </div>
  );
};

export default Sidebar;
