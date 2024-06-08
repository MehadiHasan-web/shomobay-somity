import React from 'react';

const ExtraPage = () => {

  const [loanInstallment, setLoanInstallment] = useState([]);
  // const { baseURL } = useContext(AuthContext)
  const [searchText, setSearchText] = useState("");
  
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(20);
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = filteredData.slice(firstPostIndex, lastPostIndex)


  let page = [];
  for (let i = 1; i <= Math.ceil(filteredData.length / postPerPage); i++) {
      page.push(i)
  }

  const nextPage = () => {
      if (currentPage < page.length) {
          setCurrentPage(currentPage + 1);
      }
  };

  const prevPage = () => {
      if (currentPage > 1) {
          setCurrentPage(currentPage - 1);
      }
  };


  useEffect(() => {
      const token = localStorage.getItem('token');

      // fetch(`http://somobay.xcode.com.bd/api/v1/loan/`, {
      //     headers: { 'Authorization': 'token ' + 'ef7c3c35d4d5928611da93ea788131ae89833ddf' }
      // })
      //     .then((res) => res.data)
      //     .then((data) => {
      //         console.log(data)
      //         setLoanInstallment(data)
      //     })
      //     .catch((error) => console.error("Error fetching data:", error));


      axios.get('http://somobay.xcode.com.bd/api/v1/loanInstallment/', {
          headers: { 'Authorization': 'token ' + 'ef7c3c35d4d5928611da93ea788131ae89833ddf' },
      }).then((response) => {
          console.log(response)
          setLoanInstallment(response.data)
      }).catch(function (error) {
          console.log(error.massage)
      });

  }, []);

  console.log(loanInstallment)





  const showDataPerPage = (e) => {
      e.preventDefault();
      setPostPerPage(parseInt(e.target.value));
  }

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

    {/* select */}
    <select className="select select-sm select-bordered w-full xl:w-44 max-w-xs rounded-full mx-1 mb-1   shadow hover:shadow-lg"
                                    onChange={showDataPerPage}>
                                    <option value={20} className="font-bold">Show 20</option>
                                    <option value={30} className="font-bold">Show 30</option>
                                    <option value={40} className="font-bold">Show 40</option>
                                    <option value={50} className="font-bold">Show 50</option>
                                    <option value={100} className="font-bold">Show 100</option>
                                </select>
      {/* table */}
      <tbody>
                                {
                                    loanInstallment.map((item, index) => <tr key={item.id} className={`${index % 2 == 1 ? 'bg-slate-200 border-b-[1px] border-slate-300' : 'bg-white border-b-[1px] border-slate-300'}`}>
                                        <td>{++index}</td>
                                        <td>
                                            <div className="flex items-center gap-3">

                                                <div>
                                                    <div className="font-bold">{item?.installmentAmount}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p>{item?.installmentDate}</p>
                                        </td>
                                        <td>
                                            <p>{item?.installmentNumber}</p>
                                        </td>
                                        <td>
                                            <p>{item?.loan}</p>
                                        </td>


                                    </tr>)
                                }
                            </tbody>
                              {/* pagination button */}
                            <div className="mx-auto text-center">
                            <div className="join ">
                                <button className="join-item btn" onClick={prevPage}>«</button>
                                {page.map((page, index) => (
                                    <button key={index} className="join-item btn" onClick={() => setCurrentPage(page)}>{page}</button>
                                ))}
                                <button className="join-item btn" onClick={nextPage}>»</button>
                            </div>
                        </div>
    </div>
  );
};

export default ExtraPage;