
import { FaListOl, FaUsers} from "react-icons/fa";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { FaClipboardUser } from "react-icons/fa6";
import { IoCreate } from "react-icons/io5";
import { GiReceiveMoney } from "react-icons/gi";
import { Link } from "react-router-dom";
import userProfile from "../../public/userProfile.svg"


const Sidebar = () => {
  return (
    <div className="xl:space-y-8 bg-[#FFFFFF]">
      {/* title section start */}
      <h1 className="xl:text-xl xl:uppercase xl:font-bold text-center text-[#363434]"><Link to="/">dashboard</Link></h1>
      {/* title section end */}
      {/* userProfile section start */}
      <div>
        <img src={userProfile} alt="" className="xl:w-[50%] xl:h-[50%] mx-auto"/>
      </div>
      {/* userProfile section end */}
      {/* link section start */}
      <ul className=" pl-3 space-y-3">
        <li className="text-[#BDBDC2]"><Link to="/users" className="flex items-center gap-3"><FaUsers className="xl:text-3xl"></FaUsers><span className="xl:text-base">Total User</span></Link></li>
        <li className="text-[#BDBDC2]"><Link to="/register" className="flex items-center gap-3"><MdOutlineVerifiedUser className="xl:text-3xl"></ MdOutlineVerifiedUser><span className="xl:text-base">Register</span></Link></li>
        <li className="text-[#BDBDC2]"><Link to="/myloan" className="flex items-center gap-3"><FaClipboardUser className="xl:text-3xl"></ FaClipboardUser><span className="xl:text-base">User Details</span></Link></li>
        <li className="text-[#BDBDC2]"><Link to="/" className="flex items-center gap-3"><FaListOl className="xl:text-3xl"></ FaListOl><span className="xl:text-base">Lone List</span></Link></li>
        <li className="text-[#BDBDC2]"><Link to="/" className="flex items-center gap-3"><IoCreate className="xl:text-3xl"></ IoCreate><span className="xl:text-base">Lone Create</span></Link></li>
        <li className="text-[#BDBDC2]"><Link to="/" className="flex items-center gap-3"><GiReceiveMoney className="xl:text-3xl"></ GiReceiveMoney><span className="xl:text-base">Lone Received</span></Link></li>
      </ul>
      {/* link section end */}

    </div>
  );
};

export default Sidebar;