

const Loan = () => {

  const loanForm = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const phoneNumber = form.phoneNumber.value;
    const amount = form.amount.value;
    const loanData = { name, phoneNumber, amount}

    console.log(loanData)
    form.reset()
  }



  return (
    <div className="">
      {/* content section start */}
      <div className='container mx-auto flex justify-center mt-10 px-5 h-full'>
        <div className="card shrink-0 w-full md:w-2/3 shadow-2xl bg-base-100 h-[100%]">
          <form onSubmit={loanForm} className="card-body h-full">
            {/* title section start */}
            <h1 className="text-xl text-blue-600">Loan Form</h1>
            {/* title section end */}
            <div className="grid grid-cols-1 gap-1">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="enter name" defaultValue={"user name"} className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input type="number" name="phoneNumber" placeholder="enter phone number" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Amount</span>
                </label>
                <input type="number" name="amount" placeholder="enter your amount" className="input input-bordered" />
              </div>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">Save Data</button>
            </div>
          </form>
        </div>
      </div>
      {/* content section end */}
    </div>
  );
};

export default Loan;