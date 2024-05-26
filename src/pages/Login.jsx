
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>

      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>open modal</button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click the button below to close</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>

      <div className='bg-gradient-to-r from-pink-100  to-green-100 py-12'>
        <div className='container mx-auto flex justify-center items-center px-5 md:px-0 '>
          <div className="w-full md:w-4/5 lg:3/4 shadow-2xl bg-base-200 sm:flex sm:justify-between sm:items-center rounded-2xl p-5">
            <div className='sm:flex-1 sm:px-5 md:px-7 lg:px-10 flex flex-col justify-stretch'>
              <div>
                {/* <img src={formlogo} className='w-[40%] h-[15%] sm:w-[35%] md:w-[32%] lg:w-[30%] lg:h-[10%]'></img> */}
              </div>
              <div className='my-4 sm:my-5 md:my-7 space-y-3'>
                <h1 className='text-xl sm:text-base md:text-lg lg:text-2xl text-black'>WellCome Back!</h1>
                <p className='text-sm sm:text-sm md:text-base lg:text-sm text-gray-500'>Please enter log in details below</p>
              </div>
              <form className="space-y-5 sm:space-y-2 md:space-y-3">
                <div className="form-control">
                  <input type="email" placeholder="Email" className="input input-bordered" />
                </div>
                <div className="form-control">
                  <input type="password" placeholder="password" className="input input-bordered" />
                  <label className="label text-end inline-block">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                  </label>
                </div>
                <div className="form-control mt-6 sm:mt-3 md:mt-2 lg:mt-6">
                  <button type='submit' className="btn bg-black text-white hover:bg-black">Login</button>
                </div>
              </form>
              <div className="divider">or continue</div>
              {/* <button className=" flex justify-center items-center gap-2 border-[1px] border-gray-300 py-2 rounded-xl my-3">
            <img src={googlelogo} className='w-7 h-7'></img>
            <span className='text-base'>Log in with Goole</span>
            </button> */}
              <div className='flex justify-center items-center gap-2'>
                <p className='text-sm sm:text-sm md:text-base lg:text-base text-gray-500'>Don't have an account? </p> <Link to="#" className='text-black font-semibold text-sm sm:text-sm md:text-base lg:text-base'> SignUp</Link>
              </div>
            </div>
            <div className='hidden sm:block sm:flex-1'>
              {/* <img src={formImg} className=' w-full h-full rounded-es-[10%] rounded-xl'></img> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;