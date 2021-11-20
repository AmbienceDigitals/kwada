import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {selectRequestedAmount, 
    selectRepaymentPlan,
    selectStatus,
    selectEarning,
    request, repaymentPlan} from '../feature/payment';
import Naira from 'react-naira';
import {Link} from 'react-router-dom';
import axios from 'axios'

function Breakdown() {
    const [err,setErr] = useState('');
    const requestedAmount = useSelector(selectRequestedAmount);
    const repayment = useSelector(selectRepaymentPlan);
    const earning  = useSelector(selectEarning);
    const status = useSelector(selectStatus);
    const dispatch = useDispatch();
    const month = Number(repayment.charAt(0))
    const payment =(requestedAmount / month) + (requestedAmount * 0.02)

    const submitRequest = async () => {
        try {
            await axios.post('https://kwada.herokuapp.com/payments', {
                status: status,
                amount: requestedAmount,
                earning: earning,
                repaymentPlan: repayment,
                monthlyPayment: payment
            })
        } catch (error) {
            setErr(error.message)
        }
        
    }

    return (
        <div className='border-t-0 border border-purple-500 h-auto mb-10 wide shadow-xl rounded-lg'>
        <div className='flex flex-row items-center justify-evenly '>
            <h1 className='text-xl text-blue-900 font-bold justify-between'>Payment Breakdown </h1>
        </div>

        <div className='mt-6 ml-10'>
                
            <div className='mb-4'>
                <h3 className=' text-sm md:text-md xl:text-lg justify-evenly text-gray-400 font-bold mb-2'>Rent request amount </h3>
                <input 
                    type="text" 
                    value={requestedAmount}
                    className='input font-semibold text-sm md:text-md xl:text-lg text-black bg-white rounded-lg p-3 mb-2 border border-gray-200 focus:outline-none shadow-lg'
                    onChange={(e) => dispatch(request(e.target.value))}/>
            </div>

            <div>
                <h3 className=' text-sm md:text-md xl:text-lg justify-evenly text-gray-400 font-bold mb-2'>Monthly payment plan </h3>
                <select
                value={repayment}
                className='input font-semibold w-64 text-sm md:text-md xl:text-lg text-gray-300 bg-white rounded-lg p-3 mb-2 border border-gray-200 focus:outline-none'
                onChange={(e) => dispatch(repaymentPlan(e.target.value))}>
                    <option >1 Month</option>
                    <option >2 Months</option>
                    <option >3 Months</option>
                    <option >4 Months</option>
                    <option >5 Months</option>
                    <option >6 Months</option>
                    <option >7 Months</option>
                    <option >8 Months</option>
                    <option >9 Months</option>
                    <option >10 Months</option>
                    <option >11 Months</option>
                    <option >12 Months</option>
                </select>
            </div>

            <div className='mb-6 mt-6'>
                <h3 className=' text-sm md:text-md xl:text-lg justify-evenly text-gray-400 font-bold mb-2'>Payment option </h3>

                <div
                className='input font-semibold w-64 text-sm md:text-md xl:text-lg bg-gray-200 rounded-lg p-3 mb-2 border border-gray-200'>
                    <div className='flex flex-row justify-between mb-5 mt-3'>
                        <h3 className='font-semibold text ml-4 text-blue-900'>Pre-approved amount</h3>
                        <h3 className='font-bold text-xs text-blue-900 mr-5'><Naira>{requestedAmount}</Naira></h3>
                    </div>

                    <div className='flex flex-row justify-between mt-3 mb-5'>
                        <h3 className='font-semibold text ml-4 text-blue-900'>Monthly Payment</h3>
                        <h3 className='font-bold text-xs text-blue-900 mr-2'><Naira>{payment}</Naira></h3>
                    </div>

                    <div className='flex flex-row justify-between mt-3 mb-5'>
                        <h3 className='font-semibold text ml-4 text-blue-900'>Tenure</h3>
                        <h3 className='font-bold text-xs text-blue-900 mr-2'>{repayment}</h3>
                    </div>
                </div>
            </div>

            <div className='input justify-center bg-blue-900 mt-4 mb-4 rounded-lg'>
                <h1>{err}</h1>
            </div>

            <div className='input justify-center bg-blue-900 mt-4 mb-4 rounded-lg'>
            <button
            type='submit'
            className='font-semibold input text-md text-white p-3 mb-2 focus:outline-none text-center'
            onClick={() => submitRequest()}>
                <Link to='/'>
                    Accept
                </Link>
            </button>
            </div>

        </div>
        
    </div>
    )
}

export default Breakdown
