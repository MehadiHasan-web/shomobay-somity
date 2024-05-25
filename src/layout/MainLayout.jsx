import { Outlet } from "react-router-dom";



const MainLayout = () => {
  return (
    <div>
      {/* mainLayout section start */}
        {/* content section start */}
        <Outlet></Outlet>
        {/* content section end */}
      {/* mainLayout section end */}
    </div>
  );
};

export default MainLayout;