import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useState } from "react";



const MainLayout = () => {

  // toggle sidebar
  const [open, setOpen] = useState(false)

  const openFun = () => {
    setOpen(!open)
  }

  return (
    <>
      {/*  */}
      {/* sidebar and page section start */}
      <div className="lg:flex lg:justify-between lg:items-center h-screen ">
        {/* sidebar section start */}

        <div className="hidden md:flex md:w-[13%] h-[100%] lg:py-4 border-r-[2px] border-r-slate-200">
          <Sidebar></Sidebar>
        </div>
        {/* sidebar section end */}
        {/* page section start */}
        <div className="w-full md:lg:w-[87%] bg-[#F3F8FC] h-[100%]">
          <Outlet></Outlet>
        </div>
        {/* page section end */}
      </div>
      {/* sidebar and page section end */}

      {/* mobile sidebar */}
      {/* <div className={`h-full bg-slate-100 ${open ? '-left-56' : 'left-0'}fixed top-0 w-[20%] z-10 `}>
        <div className="absolute top-[50%] -right-5 z-20 ">
          {
            open ? <button onClick={openFun}>open</button> :
            <button onClick={openFun}>close</button>
          }
          </div>

        <Sidebar></Sidebar>
      </div> */}
    </>
  );
};

export default MainLayout;