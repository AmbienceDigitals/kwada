import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {currentStatus, earnings, request, repaymentPlan} from '../feature/payment';


function Option() {
    const [status, setStatus] = useState('');
    const [amount, setAmount] = useState(undefined);
    const [earning, setEarning] = useState(undefined);
    const [repayment, setRepayment] = useState('');
    const dispatch = useDispatch()
    

    const statusValue = (e) => {
        e.preventDefault();
        setStatus(e.target.value);
    }

    const submit = () => {
        dispatch(request(amount));
        dispatch(repaymentPlan(repayment));
        dispatch(currentStatus(status));
        dispatch(earnings(earning))
    }


    return (
        <>
        <div className='border-gray-300 border-t-0 border h-auto'>
            <div className='flex flex-row items-center justify-evenly '>
                <h1 className='text-xl text-blue-900 font-bold'>Payment Option</h1>
                <div className='flex flex-row items-center justify-items-end'>
                    <p className='mr-3'>1 of 3</p>
                    <div className='rounded-full h-10 w-10 border-8 colored'>
                    </div>
                </div>
            </div>

            <div className='mt-6 ml-10'>
                <div>
                    <h3 className=' text-sm md:text-md xl:text-lg justify-evenly text-gray-400 font-bold'>What's your accommodation status? </h3>
                    <div className='flex flex-col bg-transparent mt-1 mb-5'>
                        <button 
                        className=' input rounded-lg p-3 mb-2 border border-gray-200 hover:border-blue-500'>
                            <input 
                            type="button" 
                            onClick={(e) => statusValue(e)}
                            value='Looking to renew my rent'
                            className='font-bold text-sm text-gray-300 bg-white hover:text-blue-500'
                            />
                        </button>
                        
                        <button
                        className=' input rounded-lg p-3 mb-2 border border-gray-200 hover:border-blue-500'>
                            <input 
                            type="button" 
                            value='Want to pay for a new place'
                            className='font-bold text-sm text-gray-300 bg-white hover:text-blue-500'
                            onClick={(e) => statusValue(e)}/>
                        </button>
                        
                        <button
                        className=' input rounded-lg p-3 mb-2 border border-gray-200 hover:border-blue-500'>
                            <input 
                            type="button" 
                            value="I'm still searching"
                            className='font-bold text-sm text-gray-300 bg-white hover:text-blue-500'
                            onClick={(e) => statusValue(e)}/>
                        </button>
                        
                    </div>
                </div>

                <div className='mb-4'>
                    <h3 className=' text-sm md:text-md xl:text-lg justify-evenly text-gray-400 font-bold mb-2'>How much is your rent request amount? </h3>
                    <input 
                        type="number" 
                        value={amount}
                        placeholder="Amount"
                        className='font-semibold input text-sm text-gray-300 bg-white hover:text-blue-500 rounded-lg p-3 mb-2 border border-gray-200 focus:outline-none'
                        onChange={(e) => setAmount(e.target.value)}
                        onClick={(e) => setAmount(e.target.value)}/>
                </div>
                    
                <div className='mb-4'>
                    <h3 className=' text-sm md:text-md xl:text-lg justify-evenly text-gray-400 font-bold mb-2'>How much do you earn monthly? </h3>
                    <input 
                        type="number" 
                        placeholder="Amount"
                        value={earning}
                        className='font-semibold input text-sm text-gray-300 bg-white  hover:text-blue-500  rounded-lg p-3 mb-2 border border-gray-200 focus:outline-none'
                        onChange={(e) => setEarning(e.target.value)}
                        onClick={(e) => setEarning(e.target.value)}/>
                </div>

                <div>
                    <h3 className=' text-sm md:text-md xl:text-lg justify-evenly text-gray-400 font-bold mb-2'>Choose a monthly payment plan? </h3>
                    <select
                    value={repayment}
                    className='font-semibold input text-sm text-gray-300 bg-white rounded-lg p-3 mb-2 border border-gray-200 focus:outline-none'
                    onChange={(e) => setRepayment(e.target.value)}>
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
                    <div className='justify-evenly input bg-green-400 mt-4 mb-4 rounded-lg shadow-xl'>
                    <button
                    type='submit'
                    className='font-semibold input text-md text-white p-3 mb-2 focus:outline-none text-center'
                    onClick={() => submit()}>
                        <Link to='/payment'>
                            Next
                        </Link>
                    </button>
                    </div>

            </div>
            
        </div>
    </>
    )
}

export default Option
