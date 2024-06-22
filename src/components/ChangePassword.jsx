import axios from 'axios';
import Swal from 'sweetalert2';
import useAuth from "../hooks/useAuth";


function ChangePassword() {

    // close model 
    const CloseModel = (e) => {
        e.preventDefault()
        let form = e.target;
        const dialog = form.closest('dialog');
        if (dialog) {
            dialog.close();
        }
        console.log('close')
    }
    const { baseURL } = useAuth()
    const ChangePass = (e) => {
        e.preventDefault()
        // call close function 
        CloseModel(e);

        // get password 
        let form = e.target;
        let password = form.password.value;
        let confimPass = form.confirmPassword.value;
        const token = 'ef7c3c35d4d5928611da93ea788131ae89833ddf';


        const fromData = {
            password: password,
            confimPassword: confimPass
        };





        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axios.put(`${baseURL}/change-password/`, fromData, {
                    headers: { 'Authorization': 'token ' + token },
                }).then((response) => {
                    console.log(response)
                    if (response.status === 200) {
                        Swal.fire({
                            title: "Changed!",
                            text: "Your password has been changed.",
                            icon: "success"
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
        });
    }



    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form onSubmit={CloseModel} method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <div>
                        <form onSubmit={ChangePass}>
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">New Password</span>
                                </div>
                                <input name='password' type="text" placeholder="Type here new password" className="input input-bordered w-full max-w-xs" />

                            </label>
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">Confirm Password</span>
                                </div>
                                <input name='confirmPassword' type="text" placeholder="Type here confirm password" className="input input-bordered w-full max-w-xs" />

                            </label>

                            <button className="btn btn-neutral mt-4">Change</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default ChangePassword
