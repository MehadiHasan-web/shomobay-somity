import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import axios from "axios";
import useAuth from './../hooks/useAuth';


const LoneList = () => {
    //baseURL
    const {baseURL} = useAuth()

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [lone, setLone] = useState([]);
    // const { baseURL } = useContext(AuthContext)
    const [searchText, setSearchText] = useState("");
    const [filteredData, setFilteredData] = useState([]);
  
    const [loanInstallment, setLoanInstallment] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(20);
    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;
    const currentPosts = filteredData.slice(firstPostIndex, lastPostIndex);
  
    const pageCount = Math.ceil(filteredData.length / postPerPage);


    // Fetch data (replace with your actual data fetching logic)
    useEffect(() => {
        const token = localStorage.getItem('token');

        // fetch(`http://somobay.xcode.com.bd/api/v1/loan/`, {
        //     headers: { 'Authorization': 'token ' + 'ef7c3c35d4d5928611da93ea788131ae89833ddf' }
        // })
        //     .then((res) => res.data)
        //     .then((data) => {
        //         console.log(data)
        //         setLone(data)
        //     })
        //     .catch((error) => console.error("Error fetching data:", error));


        axios.get(`${baseURL}/loan/`, {
            headers: { 'Authorization': 'token ' + token },
        }).then((response) => {
            setLoanInstallment(response.data);
      setFilteredData(response.data);
        }).catch(function (error) {
            console.log(error.massage)
        });

    }, [baseURL]);

      

  // pagination button
  const nextPage = () => {
    if (currentPage < pageCount) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // per page show data
  const showDataPerPage = (e) => {
    e.preventDefault();
    setPostPerPage(parseInt(e.target.value));
  };

    // Handle search input change
    const handleSearchInputChange = (e) => {
        setSearchText(e.target.value);
    };

    // clear search
    const handleClearSearch = (e) => {
        e.preventDefault();
        setSearchText("");
    };



    return (
        <div>
            {/* table section start */}
            <div >
                <div className="md:container md:mx-auto md:px-12 px-2">
                    <div className="flex justify-center my-3 ">
                        <h2 className="font-semibold border-b-[1px] border-indigo-500 text-2xl  ">Loan List</h2>
                    </div>

                    {/* search bar  */}
                    <div className="py-2 mb-3 bg-slate-100 rounded-lg">
                        <div className="flex justify-center mt-1">
                            <form action="" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-1 sm:gap-2  lg:flex md:gap-0 lg:justify-around lg:items-center">
                            <select
                  className="select select-sm select-bordered w-full xl:w-44 max-w-xs rounded-full mx-1 mb-1 shadow hover:shadow-lg"
                  onChange={showDataPerPage}
                >
                  <option value={2} className="font-bold">
                    Show 2
                  </option>
                  <option value={20} className="font-bold">
                    Show 20
                  </option>
                  <option value={30} className="font-bold">
                    Show 30
                  </option>
                  <option value={40} className="font-bold">
                    Show 40
                  </option>
                  <option value={50} className="font-bold">
                    Show 50
                  </option>
                  <option value={100} className="font-bold">
                    Show 100
                  </option>
                </select>

                                {/* <div className="w-full xl:w-44 mx-1 mb-1">
                                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="w-full overflow-hidden border input input-sm  rounded-full" />
                                </div>
                                <div className="w-full xl:w-44 mx-1 mb-1">
                                    <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} className="w-full overflow-hidden border input input-sm  rounded-full" />
                                </div> */}
                                {/* search bar  */}
                                <input
                  value={searchText}
                  onChange={handleSearchInputChange}
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-sm max-w-xs w-full xl:w-44 rounded-full mx-1 mb-1  shadow hover:shadow-lg"
                />
                                <button type="submit" className="btn btn-outline btn-sm rounded-full mx-3  hover:text-white ">Search</button>
                                <button onClick={handleClearSearch} type="button" className="btn btn-outline btn-sm rounded-full mx-1  hover:text-white ">Clear filter</button>
                                {/* <button type="button" onClick={handleExcel} className="btn btn-outline btn-sm rounded-full mx-1 hover:text-white shadow hover:shadow-lg hover:gap-3">Download <SiMicrosoftexcel className="text-lg " /></button>
                                <Link to={'/scanner'} type="button" className="btn btn-outline btn-sm rounded mx-1  hover:text-white "><BiBarcodeReader className="text-2xl" /></Link> */}

                            </form>
                        </div>
                    </div>
                    {/* search bar end  */}

                    <div className="overflow-x-auto  shadow-lg rounded">
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
                                    (loanInstallment && currentPosts).map((item, index) => <tr key={item.id}
                                    className={`${
                                      index % 2 == 1
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
                        {/* pagination section start */}
                        <div className="mx-auto text-center">
                        <div className="join ">
                <button className="join-item btn" onClick={prevPage}>
                  «
                </button>
                {Array.from({ length: pageCount }, (_, i) => (
                  <button
                    key={i + 1}
                    className="join-item btn"
                    onClick={() => setCurrentPage(i + 1)}
                  >
                    {i + 1}
                  </button>
                ))}
                <button className="join-item btn" onClick={nextPage}>
                  »
                </button>
              </div>
                        </div>
                        {/* pagination section end */}

                    </div>
                </div>
            </div>
            {/* table section end */}
        </div>
    );
};

export default LoneList;