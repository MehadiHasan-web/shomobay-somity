import React from 'react';
import { GoArrowSwitch } from "react-icons/go";
import { IoDocumentTextOutline } from "react-icons/io5";

import { Link } from 'react-router-dom';

const MyLoan = () => {
    return (
        <div className='p-20'>
            <div className="flex gap-4 pl-4 items-center mb-5">
            <h2 className='text-5xl font-bold mr-2'>My Loan </h2>
            <button className='btn btn-success rounded-full btn-sm text-white'>Active</button>
            </div>
            <div className='bg-slate-100 rounded-sm p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 '>
                <div className='tep-4'>
                    <span>Original loan amount</span>
                    <p className='text-4xl font-semibold'>TK 70,0000</p>
                    <Link to={""} className="flex justify-start mt-10 items-center text-slate-400"><GoArrowSwitch className='mr-2' />Transactions history</Link>
                </div>
                <div className='tep-4'>
                    <span>Outstanding balance</span>
                    <p className='text-4xl font-semibold'>TK 65,0000</p>
                    <Link to={""} className="flex justify-start mt-10 items-center text-slate-400"><IoDocumentTextOutline className='mr-2' />Payment schedule</Link>
                </div>
                <div className='tep-4'>
                    <span>Loan term</span>
                    <p className='text-4xl font-semibold'>12 mounths</p>
                    
                </div>
                <div className='tep-4'>
                    <span>Next payment by jun 24</span>
                    <p className='text-4xl font-semibold'>TK 7,0000</p>
                    <Link to={""} className="btn bg-black text-white px-10 mt-4">Pay off debt</Link>
                </div>
            </div>
            <div className='mt-5'>
                <h4 className='text-2xl font-semibold'>loan details </h4>
                <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    <ul className='space-y-2'>
                        <li className='flex items-center text-slate-400 justify-between'><span> Original loan amount</span> <span className='text-end'>Tk 70000</span></li>
                        <li className='flex items-center text-slate-400 justify-between'><span>Interest rate</span> <span className='text-end'>12%</span></li>
                        <li className='flex items-center text-slate-400 justify-between'><span> Principal debt</span> <span className='text-end'>Tk 65000</span></li>
                        <li className='flex items-center text-slate-400 justify-between'><span> Interest balance</span> <span className='text-end'>Tk 7000</span></li>
                        <li className='flex items-center text-slate-400 justify-between'><span> Overdue principal debt</span> <span className='text-end'>Tk 0</span></li>
                        <li className='flex items-center text-slate-400 justify-between'><span> Overdue interest</span> <span className='text-end'>Tk 0</span></li>
                    </ul>
                    <ul className='space-y-2'>
                        <li className='flex items-center text-slate-400 justify-between'><span> Loan term</span> <span className='text-end'> 12 months</span></li>
                        <li className='flex items-center text-slate-400 justify-between'><span>issue date</span> <span className='text-end'>20-04-24</span></li>
                        <li className='flex items-center text-slate-400 justify-between'><span> Maturity date</span> <span className='text-end'>20-04-25</span></li>
                        
                        
                        <li className='flex items-center justify-between mt-10 text-slate-400'><span> Outstanding LTV% 99.08</span> <span className='text-end'>Tk 0</span></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MyLoan;