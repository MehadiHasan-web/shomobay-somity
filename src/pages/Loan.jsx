import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import axios from "axios";
import Swal from "sweetalert2";




const Loan = () => {

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());



  const loanForm = (event) => {
    event.preventDefault();
    const form = event.target;

    const user_id = 1;
    const amount = form.amount.value;
    const reason = form.reason.value;
    const totalInstallmentCount = form.totalInstallmentCount.value;
    const installmentFee = form.installmentFee.value;
    const details = form.details.value;
    const loanDateFrom = format(new Date(startDate), "yyyy-MM-dd");
    const loanDateTo = format(new Date(endDate), "yyyy-MM-dd");
    const token = 'ef7c3c35d4d5928611da93ea788131ae89833ddf';

    const fromData = {
      user_id: parseInt(user_id),
      amount: parseInt(amount),
      reason: reason,
      totalInstallmentCount: parseInt(totalInstallmentCount),
      installmentFee: parseInt(installmentFee),
      details: details,
      loanDateFrom: loanDateFrom,
      loanDateTo: loanDateTo
    };

    axios.post('http://somobay.xcode.com.bd/api/v1/loan/', fromData, {
      headers: { 'Authorization': 'token ' + token },
    }).then((response) => {
      console.log(response)
      if (response.status === 201) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Loan submit successfully",
          showConfirmButton: false,
          timer: 1500
        });
        form.reset()
      }
    })
      .catch(function (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.message}`,
        });
      });



  }



  return (
    <div className="">

      {/* Breadcrumb */}
      <nav
        className="flex bg-gray-50 text-gray-700 border border-gray-200 py-3 px-5 rounded-lg  mt-12  mx-auto w-full max-w-[550px]"
        aria-label="Breadcrumb"
      >
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <a
              href="#"
              className="text-sm text-gray-700 hover:text-gray-900 inline-flex items-center "
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              Home
            </a>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg
                className="w-6 h-6 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 ml-1 md:ml-2 text-sm font-medium "
              >
                Loan
              </a>
            </div>
          </li>
        </ol>
      </nav>

      {/* form  */}
      <div className="w-full mt-6">
        <div className="formbold-form-wrapper mx-auto  w-full max-w-[550px] rounded-lg border border-[#e0e0e0] bg-white">
          <form onSubmit={loanForm} className="py-6 px-9" >

            <div className="mb-2">
              <label
                htmlFor="amount"
                className="mb-2 block text-base font-medium text-[#07074D]"
              >
                Amount
              </label>
              <input
                type="number"
                name="amount"
                id="amount"
                placeholder="Enter your amount"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <div className="mb-2">
              <label
                htmlFor="reason"
                className="mb-1 block text-base font-medium text-[#07074D]"
              >
                Reason
              </label>
              <input
                type="text"
                name="reason"
                id="reason"
                placeholder="Enter your reason"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            {/* date picker  */}
            <div className="mb-2">
              <label htmlFor="form" className="mb-1 block text-base font-medium text-[#07074D]" > Date </label>
              <div className="flex justify-between items-center">
                <div>
                  <DatePicker className="rounded-md border border-[#e0e0e0] bg-white py-3 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" selected={startDate} onChange={(date) => setStartDate(date)} />
                </div>
                <h2 className="font-bold">To</h2>
                <div>
                  <DatePicker className="rounded-md border border-[#e0e0e0] bg-white py-3 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" selected={endDate} onChange={(date) => setEndDate(date)} />
                </div>
              </div>

            </div>

            <div className="mb-2">
              <label
                htmlFor="totalInstallmentCount"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Total Installment Count
              </label>
              <input
                type="number"
                name="totalInstallmentCount"
                id="totalInstallmentCount"
                placeholder="Enter your totalInstallmentCount"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="installmentFee"
                className="mb-1 block text-base font-medium text-[#07074D]"
              >
                Installment Fee
              </label>
              <input
                type="number"
                name="installmentFee"
                id="installmentFee"
                placeholder="Enter your installmentFee"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="details"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Details
              </label>
              <textarea
                rows={4}
                name="details"
                id="details"
                placeholder="Explain your details"
                className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                defaultValue={""}
              />
            </div>
            <div>
              <button type="submit" className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">Submit</button>
            </div>
          </form>
        </div>
      </div>

    </div>
  );
};

export default Loan;