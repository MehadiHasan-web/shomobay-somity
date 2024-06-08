import { useEffect, useState } from "react";
import axios from "axios";


const Installment = () => {


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



    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch(
            "http://somobay.xcode.com.bd/api/v1/installment/",
            {
              headers: {
                Authorization:
                  "token " + "ef7c3c35d4d5928611da93ea788131ae89833ddf",
              },
            }
          );
          const data = await response.json();
          setLoanInstallment(data);
          setFilteredData(data);
        };
        fetchData();
      }, []);

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
                        <h2 className="font-semibold border-b-[1px] border-indigo-500 text-2xl  ">Installment</h2>
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
                                <input value={searchText} onChange={handleSearchInputChange} type="text" placeholder="Type here" className="input input-bordered input-sm max-w-xs w-full xl:w-44 rounded-full mx-1 mb-1  shadow hover:shadow-lg" />
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
                                    <th className="text-black">Amount</th>
                                    <th className="text-black">Date</th>
                                    <th className="text-black">Receiver Name</th>
                                    <th className="text-black">User</th>
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
                                                    <div className="font-bold">{item?.amount}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p>{item?.date}</p>
                                        </td>
                                        <td>
                                            <p>{item?.receiverName}</p>
                                        </td>
                                        <td>
                                            <p>{item?.user}</p>
                                        </td>

                                    </tr>)
                                }
                            </tbody>
                            {/* foot */}
                            <tfoot className="bg-slate-200	">
                                <tr>
                                    <th className="text-black">No.</th>
                                    <th className="text-black">Amount</th>
                                    <th className="text-black">Date</th>
                                    <th className="text-black">Receiver Name</th>
                                    <th className="text-black">User</th>
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

export default Installment;