import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { RiMenuFold2Fill } from "react-icons/ri";

const MainLayout = () => {
  return (
    <div>
      {/* content section start */}
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center h-full">
          {/* outlet section start */}
          <div className="bg-slate-100 w-full h-screen">
            <Outlet></Outlet>
          </div>
          {/* outlet section end */}
          {/* drawer button */}
          <label htmlFor="my-drawer-2" className="btn btn-sm bg-slate-300 drawer-button lg:hidden fixed top-2 -left-2"><RiMenuFold2Fill className="text-2xl text-black"></RiMenuFold2Fill></label>
          {/* drawer button */}
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu w-72 min-h-full bg-[#FFFFFF] text-base-content p-5 h-full">
            {/* Sidebar content here */}
            <div className="h-full">
              <Sidebar></Sidebar>
            </div>
          </ul>
        </div>
      </div>
      {/* content section end */}
    </div>
  );
};

export default MainLayout;
