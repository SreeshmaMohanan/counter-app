import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from '../redux/counterSlice'

function Counter() {
  const [amount,setAmount]=useState("")
    const dispatch=useDispatch()

    const count=useSelector((state)=>state.counter.count)
    const handleIncrement =()=>{
      // console.log("handle increment");
      // console.log(amount);
      if(amount==""){
        alert('Please Provide amount');
      }else{
        //dispatch action
        dispatch(incrementByAmount(Number(amount)))
      }
    }
  return (
    <div style={{height:'70vh'}} className='w-100 d-flex justify-content-center align-items-center'>
        <div style={{width:'600px'}} className='d-flex justify-content-center align-items-center border rounded p-5  flex-column'>
            <h1>{count}</h1>
            <div className='d-flex justify-content-evenly w-100 mt-5'>
                <button onClick={()=>dispatch(decrement())} className='btn btn-warning'>Decrement</button>
                <button onClick={()=>dispatch(reset())} className='btn btn-danger'>Reset</button>
                <button onClick={()=>dispatch(increment())} className='btn btn-success'>Increment</button>
            </div>
            <div className='d-flex mt-5'>
              <input type="text" onChange={e=>setAmount(e.target.value)} className='form-control' placeholder='Enter Amount to be incremented!!!' />
              <button onClick={handleIncrement} className='btn btn-primary ms-5'>Increment by Amount</button>
            </div>
            </div>
        </div>
  )
}

export default Counter
