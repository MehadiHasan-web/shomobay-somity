import axios from "axios";


const Register = () => {

  const registerForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const username = form.username.value;
    const phoneNumber = parseInt(form.phoneNumber.value);
    const user_type = form.user_type.value
    const password = form.password.value;
    const registerData = { username, phoneNumber, password, user_type }

    axios.post(`http://127.0.0.1:8000/api/v1/register/`, registerData)
    .then((data) => {
      console.log(data.data)
    })

    form.reset()
  }
  return (
    <div className="">
      {/* content section start */}
      <div className='container mx-auto flex justify-center mt-10 px-5 h-full'>
        <div className="card shrink-0 w-full md:w-2/3 shadow-2xl bg-base-100 h-[100%]">
          <form onSubmit={registerForm} className="card-body h-full">
            {/* title section start */}
            <h1 className="text-xl text-blue-600">User Register Form</h1>
            {/* title section end */}
            <div className="grid grid-cols-1 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="username" placeholder="enter name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input type="number" name="phoneNumber" placeholder="enter photo number" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">User Type</span>
                </label>
                <select name="user_type" className="select select-bordered w-full">
                  <option>Member</option>
                  <option>President</option>
                  <option>Secretary</option>
                  <option>Treasurer</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">password</span>
                </label>
                <input type="password" name="password" placeholder="enter your password" className="input input-bordered" />
              </div>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">Register Data</button>
            </div>
          </form>
        </div>
      </div>
      {/* content section end */}
    </div>
  );
};

export default Register;