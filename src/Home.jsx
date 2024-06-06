import React, { useState } from 'react'
import {ReactComponent as Temp} from '../src/Icons/temp.svg'
import {ReactComponent as Humidity} from '../src/Icons/humidity.svg'
import {ReactComponent as Rain} from '../src/Icons/rain.svg'
import {ReactComponent as Ph} from '../src/Icons/ph.svg'
import {ReactComponent as Nit} from '../src/Icons/nit.svg'
import {ReactComponent as Phos} from '../src/Icons/pho.svg'
import {ReactComponent as Potash} from '../src/Icons/potash.svg'
import { IoMdArrowRoundBack } from "react-icons/io";
const Home = () => {
  const [show, setshow] = useState(false)
  function handleSubmit(value){
    setshow(value)
  }
  return (
    <>
    <div className='h-screen w-full bg flex justify-end items-center'>
        {!show ? <div className='h-[90vh] w-[35vw] bgform mr-[10%] bg-[#dce0e0] p-6 rounded-md xl:h-[75vh] xl:w-[27vw] xl:mr-[15%]'>
            <div className='text-3xl font-play text-[#278986] font-semibold text-center'>Crop Predictor</div>
            <div className='flex flex-col gap-[2vw] mt-3 '>
              <div className='relative'>
                <Temp className='absolute top-[2px]'/>
                <input type="number" name="temp" id="temp" placeholder='Temperature' className='w-full border-b-2 border-[#197B7A] py-1 pl-10 focus:outline-none bg-transparent'/>
              </div>
              <div className='relative'>
                <Humidity className='absolute top-[2px]'/>
                <input type="number" name="humidity" id="humidity" placeholder='Humidity' className='w-full border-b-2 border-[#197B7A] py-1 pl-10 focus:outline-none bg-transparent'/>
              </div>
              <div className='relative'>
                <Rain className='absolute top-[2px]'/>
                <input type="number" name="rain" id="rain" placeholder='Rain Fall (mm)' className='w-full border-b-2 border-[#197B7A] py-1 pl-10 focus:outline-none bg-transparent'/>
              </div>
              <div className='relative'>
                <Ph className='absolute top-[2px]'/>
                <input type="number" name="ph" id="ph" placeholder='pH of soil' className='w-full border-b-2 border-[#197B7A] py-1 pl-10 focus:outline-none bg-transparent'/>
              </div>
              <div className='relative'>
                <Nit className='absolute top-[2px]'/>
                <input type="number" name="nitrogen" id="nitrogen" placeholder='Nitrogen Ratio' className='w-full border-b-2 border-[#197B7A] py-1 pl-10 focus:outline-none bg-transparent'/>
              </div>
              <div className='relative'>
                <Phos className='absolute top-[2px]'/>
                <input type="number" name="phos" id="phos" placeholder='Phosphorous Ratio' className='w-full border-b-2 border-[#197B7A] py-1 pl-10 focus:outline-none bg-transparent'/>
              </div>
              <div className='relative'>
                <Potash className='absolute top-[2px]'/>
                <input type="number" name="potash" id="potash" placeholder='Potassium Ratio' className='w-full border-b-2 border-[#197B7A] py-1 pl-10 focus:outline-none bg-transparent'/>
              </div>
            </div>
            <div className='flex justify-center mt-5 xl:mt-10'>
              <button onClick={()=>handleSubmit(true)} className='bg-[#278986] py-2 w-[70%] rounded-full text-white font-pop xl:py-3'>Submit</button>
            </div>
        </div>
        : <div className='h-[90vh] w-[35vw]  mr-40 bg-[#dce0e0] p-6 rounded-md flex flex-col items-center gap-8 relative xl:h-[75vh] xl:w-[27vw] xl:mr-[15%] xl:gap-[2vw]'>
            <IoMdArrowRoundBack onClick={()=>handleSubmit(false)} className='justify-self-start absolute top-2 left-2 h-8 w-8 cursor-pointer'/>
             <div className='text-2xl font-play font-semibold '>Best Crops As Per Given Data</div>
             <img src="/crop.png" alt="" srcset="" className='h-[50%] w-[80%] xl:h-[60%] xl:w-[90%]'/>
             <div className='text-4xl font-play font-semibold'>Wheat</div>
        </div>  
      }
    </div>
    </>
  )
}

export default Home;