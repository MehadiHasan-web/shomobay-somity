
import axios from "axios";
import Swal from "sweetalert2";




const LoanInstallmentCreate = () => {




    const installmentAmount = (event) => {
        event.preventDefault();
        const form = event.target;

        const installmentAmount = form.installmentAmount.value;
        const token = 'ef7c3c35d4d5928611da93ea788131ae89833ddf';

        const fromData = {
            loan_id: 1,
            installmentAmount: parseInt(installmentAmount),
        };

        axios.post('http://somobay.xcode.com.bd/api/v1/loanInstallment/', fromData, {
            headers: { 'Authorization': 'token ' + token },
        }).then((response) => {
            console.log(response)
            if (response.status === 201) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "LoanInstallment submit successfully",
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
                                receiver
                            </a>
                        </div>
                    </li>
                </ol>
            </nav>

            {/* form  */}
            <div className="w-full mt-6">
                <div className="formbold-form-wrapper mx-auto  w-full max-w-[550px] rounded-lg border border-[#e0e0e0] bg-white">
                    <form onSubmit={installmentAmount} className="py-6 px-9" >

                        <div className="mb-2">
                            <label
                                htmlFor="installmentAmount"
                                className="mb-2 block text-base font-medium text-[#07074D]"
                            >
                                Installment Amount
                            </label>
                            <input
                                type="number"
                                name="installmentAmount"
                                id="installmentAmount"
                                placeholder="Enter your installmentAmount"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
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

export default LoanInstallmentCreate;