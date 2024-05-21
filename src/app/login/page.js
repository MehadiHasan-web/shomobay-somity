'use client'
import  Link  from 'next/link';
import Image from 'next/image'
import formLogo from '../../../public/img/formlogo.png';
import formImage from '../../../public/img/formImg.png';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"


export default function Login(){
    return(
        <div className='bg-gradient-to-r from-pink-100  to-green-100 py-12 h-screen' >
        <div className='container mx-auto flex justify-center items-center px-5 md:px-0 '>
          <div className="w-full md:w-4/5 lg:3/4 shadow-2xl bg-base-200 sm:flex sm:justify-between sm:items-center rounded-2xl p-5">
            <div className='sm:flex-1 sm:px-5 md:px-7 lg:px-10 flex flex-col justify-stretch'>
              <div>
                <Image src={formLogo}  alt="Picture of the author" className='w-[40%] h-[15%] sm:w-[35%] md:w-[32%] lg:w-[30%] lg:h-[10%]' />
              </div>
              <div className='my-4 sm:my-5 md:my-7 space-y-3'>
                <h1 className='text-xl sm:text-base md:text-lg lg:text-2xl text-black'>WellCome Back!</h1>
                <p className='text-sm sm:text-sm md:text-base lg:text-sm text-gray-500'>Please enter log in details below</p>
              </div>
              <form className="space-y-5 sm:space-y-2 md:space-y-3">
                <div className="form-control">
                  <Input placeholder="Email" type='email' />

                </div>
                <div className="form-control">
                  <Input placeholder="password" type="password" />
                    <p className="label-text-alt mt-4 text-end hover:text-blue-400 cursor-pointer">Forgot password?</p>
                </div>
                <div className="form-control mt-6 sm:mt-3 md:mt-2 lg:mt-6">
                  {/* <button type='submit' className="btn bg-black text-white hover:bg-black">Login</button> */}
                  <Button variant="outline " className="btn bg-black text-white hover:bg-black w-full py-4 hover:font-bold shadow">Button</Button>
                </div>
              </form>
            </div>
            <div className='hidden sm:block sm:flex-1'>
              <Image src={formImage} alt='This in from image' className=' w-full h-full rounded-es-[10%] rounded-xl' />
            </div>
          </div>
        </div>
      </div>
    )
}