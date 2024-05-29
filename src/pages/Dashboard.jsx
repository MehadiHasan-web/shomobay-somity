import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";


const Dashboard = () => {
  return (
    <>
      {/* sidebar and page section start */}
      <div className="h-full lg:flex lg:justify-between lg:items-center lg:gap-5">
            {/* sidebar section start */}
            <div className="w-[13%] h-[100%] lg:py-4">
              <Sidebar></Sidebar>
            </div>
            {/* sidebar section end */}
            {/* page section start */}
            <div className="w-[87%] bg-[#F3F8FC] h-[100%]">
             <Outlet></Outlet>
            </div>
            {/* page section end */}
          </div>
          {/* sidebar and page section end */}
    </>
  );
};

export default Dashboard;