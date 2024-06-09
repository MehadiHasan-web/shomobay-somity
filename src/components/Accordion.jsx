import { useState, useRef, Children } from "react";
import "./Accordion.css";
import { Link } from "react-router-dom";
import { MdDashboard, MdOutlineVerifiedUser } from "react-icons/md";
import { FaListOl } from "react-icons/fa";
import { GiBank, GiReceiveMoney, GiTakeMyMoney } from "react-icons/gi";
import { LuBuilding2 } from "react-icons/lu";

const Accordion = () => {
  const [openTab, setOpenTab] = useState(0);

  const toggleTab = (idx) => {
    setOpenTab(openTab === idx ? 0 : idx);
  };

  const handleRotate = (idx) => {
    return openTab === idx ? "rotate-180" : "";
  };

  const handleToggle = (idx, ref) => {
    return openTab === idx
      ? { maxHeight: ref.current.scrollHeight + "px" }
      : { maxHeight: "0px" };
  };

  const items = [
    {
      title: "User",
      children: [
        {
          linkName: "Registation",
          path: "/register",
          icon: <MdOutlineVerifiedUser className="xl:text-2xl"></MdOutlineVerifiedUser>,
        },
      ],
    },
    {
      title: "Loan Section",
      children: [
        {
          linkName: "Lone",
          path: "/loan",
          icon: <GiTakeMyMoney className="xl:text-3xl"></GiTakeMyMoney>,
        },
        {
          linkName: "Lone List",
          path: "/loan-list",
          icon: <FaListOl className="xl:text-2xl"></FaListOl>,
        },
      ],
    },
    {
      title: "Loan Installment",
      children: [
        {
          linkName: "LoanInstallment List",
          path: "/loanInstallment",
          icon: <GiBank className="xl:text-2xl"></GiBank>,
        },
        {
          linkName: "LoanInstallment Create",
          path: "/loanInstallment-create",
          icon: <LuBuilding2 className="xl:text-2xl"></LuBuilding2>,
        },
      ],
    },
    {
      title: "Installment",
      children: [
        {
          linkName: "Installment List",
          path: "/installment",
          icon: <GiBank className="xl:text-2xl"></GiBank>,
        },
        {
          linkName: "Create Installment",
          path: "/installment-create",
          icon: <GiBank className="xl:text-2xl"></GiBank>,
        },
      ],
    },
    {
      title: "Society",
      children: [
        {
          linkName: "Create society",
          path: "/society",
          icon: <GiBank className="xl:text-2xl"></GiBank>,
        },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-1 py-8 text-lg leading-6 text-gray-800 md:gap-4 ">
      {items.map((item, idx) => {
        const contentRef = useRef(null);
        return (
          <div key={idx} className="space-y-3">
            <div className="relative transition-all duration-700 border rounded-xl hover:shadow-2xl hover:font-semibold ">
              <div
                onClick={() => toggleTab(idx + 1)}
                className="w-full p-4 text-left cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <span className="tracking-wide">{item.title}</span>
                  <span
                    className={`transition-transform duration-500 transform ${handleRotate(
                      idx + 1
                    )}`}
                  >
                    <svg
                      className="w-5 h-5 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </span>
                </div>
              </div>
              <div
                ref={contentRef}
                style={handleToggle(idx + 1, contentRef)}
                className="relative overflow-hidden transition-all duration-700 max-h-0"
              >
                {
                  item.children.map((data, index) => <>
                    <Link key={index} to={data.path} >
                      <div className="px-6 py-3 text-gray-600 flex items-center gap-3 hover:bg-slate-200 hover:text-dark hover:font-semibold">
                        {data?.icon}
                        <span className="xl:text-base">{data.linkName}</span>
                      </div>
                    </Link>
                  </>)
                }
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
