import axios from "axios";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";


const Register = () => {

    const {baseURL} = useAuth()


    const token = 'ef7c3c35d4d5928611da93ea788131ae89833ddf';
    const registerData = (event) => {
        event.preventDefault();
        const form = event.target;

        const username = form.name.value;
        const phoneNumber = form.number.value;
        const password = form.password.value;
        const user_type = form.user_type.value;

        const data = { username, phoneNumber, password, user_type }

        axios.post(`${baseURL}/register/`, data, {
            headers: { 'Authorization': 'token ' + token },
        }).then((response) => {
            console.log(response)
            if(response.status === 201){
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Your data has been registered",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
            .catch(function (error) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${error.message}`,
                  });
            });
        form.reset()
    }


    return (
        <div className="">
            {/* content section start */}
            <div className='container mx-auto flex justify-center mt-10 px-5 h-full'>
                <div className="card shrink-0 w-full md:w-2/3 shadow-2xl bg-base-100 h-[100%]">
                    <form onSubmit={registerData} className="card-body h-full">
                        {/* title section start */}
                        <h1 className="text-xl text-blue-600">User Register Form</h1>
                        {/* title section end */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Enter name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Number</span>
                                </label>
                                <input type="number" name="number" placeholder="Enter you number" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Enter you password" className="input input-bordered" />
                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">User Type</span>
                                </label>
                                <select name="user_type" className="select select-bordered w-full">
                                    <option disabled selected>Member</option>
                                    <option>President</option>
                                    <option>Secretary</option>
                                    <option>Treasurer</option>
                                </select>
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