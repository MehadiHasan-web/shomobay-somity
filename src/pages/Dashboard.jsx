import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from './../hooks/useAuth';
import Title from "../components/Title";
import '../assets/dashboard.css'
import { GiVendingMachine } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";
import { FcPaid } from "react-icons/fc";
import { FaSitemap } from "react-icons/fa6";
import { FaSortAmountUpAlt } from "react-icons/fa";
import { MdPaid } from "react-icons/md";


const Dashboard = () => {
  //baseurl
  const { baseURL } = useAuth()

  const [dashboard, setDashboard] = useState([]);
  // loan state
  const [loanInstallment, setLoanInstallment] = useState([]);

  console.log(dashboard)
  useEffect(() => {
    const token = localStorage.getItem('token');

    axios.get(`${baseURL}/dashboard/`, {
      headers: { 'Authorization': 'token ' + token },
    }).then((response) => {
      console.log(response)
      setDashboard(response.data)
    }).catch(function (error) {
      console.log(error.massage)
    });

  }, [baseURL]);

  // Fetch data (replace with your actual data fetching logic)
  useEffect(() => {
    const token = localStorage.getItem('token');

    axios.get(`${baseURL}/loan/`, {
      headers: { 'Authorization': 'token ' + token },
    }).then((response) => {
      setLoanInstallment(response.data);
    }).catch(function (error) {
      console.log(error.massage)
    });

  }, [baseURL]);



  return (
    <>
      {/* title */}
      <Title title="Dashboard"></Title>
      <div className="container mx-auto mt-6">
        {/* card section  */}
        <h1 className="text-3xl font-bold my-6 ps-4">Good morning, {dashboard?.society}!</h1>
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 px-4">
          {/* item 1  */}
          <div>
            <div className="p-4 shadow-2xl rounded-[30px] bg-slate-100">
              <div className="flex justify-between">
                <GiVendingMachine className="text-4xl " />

                <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button" className="btn btn-circle btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                    </svg>
                  </div>
                  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow-lg bg-base-100 rounded-box w-52 ">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                  </ul>
                </div>
              </div>
              {/* heading  */}
              <h1 className="text-3xl font-bold mt-2 mb-2">${dashboard?.totalLoanGiven}</h1>
              <h4 className="mb-4 text-2xl font-bold">Total Loan Given</h4>
            </div>
          </div>
          {/* item 1  */}
          <div>
            <div className="p-4 shadow-2xl rounded-[30px] bg-slate-100">
              <div className="flex justify-between">
                <FaSortAmountUpAlt className="text-4xl " />

                <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button" className="btn btn-circle btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                    </svg>
                  </div>
                  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow-lg bg-base-100 rounded-box w-52 ">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                  </ul>
                </div>
              </div>
              {/* heading  */}
              <h1 className="text-3xl font-bold mt-2 mb-2">{dashboard?.totalLoanCount}</h1>
              <h4 className="mb-4 text-2xl font-bold">Total Loan Count</h4>
            </div>
          </div>
          {/* item 1  */}
          <div>
            <div className="p-4 shadow-2xl rounded-[30px] bg-slate-100">
              <div className="flex justify-between">
                <FaUsers className="text-4xl " />

                <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button" className="btn btn-circle btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                    </svg>
                  </div>
                  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow-lg bg-base-100 rounded-box w-52 ">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                  </ul>
                </div>
              </div>
              {/* heading  */}
              <h1 className="text-3xl font-bold mt-2 mb-2">{dashboard?.totalMember}</h1>
              <h4 className="mb-4 text-2xl font-bold">Total Member</h4>
            </div>
          </div>
          {/* item 1  */}
          <div>
            <div className="p-4 shadow-2xl rounded-[30px] bg-slate-100">
              <div className="flex justify-between">
                <FaSitemap className="text-4xl " />

                <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button" className="btn btn-circle btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                    </svg>
                  </div>
                  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow-lg bg-base-100 rounded-box w-52 ">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                  </ul>
                </div>
              </div>
              {/* heading  */}
              <h1 className="text-3xl font-bold mt-2 mb-2">{dashboard?.totalLoanInstallment}</h1>
              <h4 className="mb-4 text-2xl font-bold">Total Loan Installment</h4>
            </div>
          </div>
          {/* item 1  */}
          <div>
            <div className="p-4 shadow-2xl rounded-[30px] bg-slate-100">
              <div className="flex justify-between">
                <FcPaid className="text-4xl " />

                <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button" className="btn btn-circle btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                    </svg>
                  </div>
                  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow-lg bg-base-100 rounded-box w-52 ">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                  </ul>
                </div>
              </div>
              {/* heading  */}
              <h1 className="text-3xl font-bold mt-2 mb-2">{dashboard?.totalPaid}</h1>
              <h4 className="mb-4 text-2xl font-bold">Total Paid</h4>
            </div>
          </div>
          {/* item 1  */}
          <div>
            <div className="p-4 shadow-2xl rounded-[30px] bg-slate-100">
              <div className="flex justify-between">
                <MdPaid className="text-4xl " />

                <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button" className="btn btn-circle btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                    </svg>
                  </div>
                  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow-lg bg-base-100 rounded-box w-52 ">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                  </ul>
                </div>
              </div>
              {/* heading  */}
              <h1 className="text-3xl font-bold mt-2 mb-2">{dashboard?.totalUnpaid}</h1>
              <h4 className="mb-4 text-2xl font-bold">Total Unpaid</h4>
            </div>
          </div>

        </div>



        {/* table data show */}
        <div className="md:container md:mx-auto md:px-12 px-2 my-10">
          <div className="flex justify-center my-3 ">
            <h2 className="font-semibold border-b-[1px] border-indigo-500 text-2xl  ">Loan List</h2>
          </div>
          <div className=" shadow-lg rounded p-2">

            <table className="table table-base">
              {/* head */}
              <thead className="bg-slate-200	">
                <tr>
                  <th className="text-black">No.</th>
                  <th className="text-black">Name</th>
                  <th className="text-black">Amount</th>
                  <th className="text-black">Details</th>
                  <th className="text-black">Loan Date From</th>
                  <th className="text-black">Loan Date To</th>
                  <th className="text-black">On Going</th>
                </tr>
              </thead>
              <tbody>
                {
                  loanInstallment.map((item, index) => <tr key={item.id}
                    className={`${index % 2 == 1
                      ? "bg-slate-200 border-b-[1px] border-slate-300"
                      : "bg-white border-b-[1px] border-slate-300"
                      }`}>
                    <td>{++index}</td>
                    <td>
                      <div className="flex items-center gap-3">

                        <div>
                          <div className="font-bold">{item?.User}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p>{item?.amount}</p>
                    </td>
                    <td>
                      <p>{item?.details}</p>
                    </td>
                    <td>
                      <p>{item?.loanDateFrom}</p>
                    </td>
                    <td>
                      <p>{item?.loanDateTo}</p>
                    </td>
                    <td>
                      <p>{item?.status}</p>
                    </td>

                  </tr>)
                }
              </tbody>
              {/* foot */}
              <tfoot className="bg-slate-200	">
                <tr>
                  <th className="text-black">No.</th>
                  <th className="text-black">Name</th>
                  <th className="text-black">Amount</th>
                  <th className="text-black">Details</th>
                  <th className="text-black">Loan Date From</th>
                  <th className="text-black">Loan Date To</th>
                  <th className="text-black">On Going</th>
                </tr>
              </tfoot>

            </table>

          </div>
        </div>



      </div>
    </>
  );
};

export default Dashboard;