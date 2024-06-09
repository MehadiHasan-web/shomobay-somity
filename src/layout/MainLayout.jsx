import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";



const MainLayout = () => {

  

  return (
    <>
    <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
    <Outlet></Outlet>
   
  
  </div> 
  <div className="drawer-side h-full ">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <div className="menu p-4 w-72 h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      <Sidebar></Sidebar>
    </div>
  
  </div>
</div>
    </>
  );
};

export default MainLayout;