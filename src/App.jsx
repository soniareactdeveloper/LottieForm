import { useState } from 'react';
import './App.css'
import Animation from './Component/Animation'
import { IoMdEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";

function App() {
 const [pass, setPass] =useState(false)

 const handlePass = ()=>{
   setPass(!pass)
 }

  return (
    <>
      <div className='w-full h-screen bg-gradient-to-r from-cyan-500 to-blue-500 flex justify-center items-center'>
         <div className='flex justify-start  w-[900px] p-3 bg-white rounded-xl shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]'>
           <div>
            <Animation/>
           </div>
           <div className='pl-3 pr-9 mb-[10px]'>
             <h1 className='text-[34px] font-sans font-bold text-black'>Registration</h1>
             <form className='flex flex-wrap justify-between gap-5'>
              {/* full name */}
               <div className='flex flex-col mt-2 '>
                <label className='text-[15px] text-black font-sans font-semibold mb-2' htmlFor="fname">Full Name</label>
                <input className='w-[200px] p-1 border-[1px] border-[#c0c0c0] outline-none rounded-sm' type="text" name='fname' id='fname' placeholder='Enter your name'/>
               </div>
               {/* email */}
               <div className='flex flex-col mt-2'>
                <label className='text-[15px] text-black font-sans font-semibold mb-2' htmlFor="email">Email</label>
                <input className='w-[200px] p-1 border-[1px] border-[#c0c0c0] outline-none rounded-sm' type="email" name='email' id='email' placeholder='Enter your email'/>
               </div>
               {/* phone */}
               <div className='flex flex-col'>
                <label className='text-[15px] text-black font-sans font-semibold mb-2' htmlFor="phone">Phone Number</label>
                <input className='w-[200px] p-1 border-[1px] border-[#c0c0c0] outline-none rounded-sm' type="number" name='phone' id='phone' placeholder='Phone Number'/>
               </div>
               {/* positition */}
               <div className='flex flex-col'>
                <label className='text-[15px] text-black font-sans font-semibold mb-2' htmlFor="position">Position you are applying for?</label>
                <select className='w-[200px] p-1 border-[1px] border-[#c0c0c0] outline-none rounded-sm' name="position" id="position">
                  <option  value="#">Select</option>
                  <option  value="#"> Front-End Developer</option>
                  <option  value="#">Back-End Developer</option>
                  <option  value="#">Full-Stack Developer</option>
                  <option  value="#"> Mobile Developer</option>
                  <option  value="#">Database Developer</option>
                </select>
               </div>
               {/* country */}
               <div className='flex flex-col'>
                <label className='text-[15px] text-black font-sans font-semibold mb-2' htmlFor="country">Country</label>
                <input className='w-[200px] p-1 border-[1px] border-[#c0c0c0] outline-none rounded-sm' type="text" name='country' id='country' placeholder='Enter your Country'/>
               </div>
               {/* City */}
               <div className='flex flex-col'>
                <label className='text-[15px] text-black font-sans font-semibold mb-2' htmlFor="city">City</label>
                <input className='w-[200px] p-1 border-[1px] border-[#c0c0c0] outline-none rounded-sm' type="text" name='city' id='city' placeholder='Enter your City'/>
               </div>
               {/* password */}
               <div className='flex flex-col'>
                <label className='text-[15px] text-black font-sans font-semibold mb-2' htmlFor="password">Password</label>
                <div className="icon relative">
                  {
                    pass?
                    <IoMdEye onClick={handlePass} className='absolute top-[30%] right-[15px] text-[15px]'/>
                    :
                    <IoIosEyeOff onClick={handlePass} className='absolute top-[30%] right-[15px] text-[15px]' />

                  }
                  <input className='w-[200px] p-1 border-[1px] border-[#c0c0c0] outline-none rounded-sm' type={pass? "text": "password" } name='password' id='password' placeholder='Enter your Password'/>
                </div>
               </div>
               {/* Confirm Password */}
               <div className='flex flex-col'>
                <label className='text-[15px] text-black font-sans font-semibold mb-2' htmlFor="confirm">Confirm Password</label>
                <div className="icon relative">
                  {
                    pass?
                    <IoMdEye onClick={handlePass} className='absolute top-[30%] right-[15px] text-[15px]'/>
                    :
                    <IoIosEyeOff onClick={handlePass} className='absolute top-[30%] right-[15px] text-[15px]' />
                  }
                  <input className='w-[200px] p-1 border-[1px] border-[#c0c0c0] outline-none rounded-sm' type={pass? "text": "password" } name='confirm' id='confirm' placeholder='Confirm Password'/>
                </div>
               </div>
               {/* gender */}
               <div className='flex flex-col'>
                <h2>Gender</h2>
                <div className='flex gap-8'>
                    <div className='flex gap-2 items-center'>
                      <input type="radio" id='male' name='male'/>
                      <label htmlFor="male">Male</label>
                    </div>
                    <div className='flex gap-2 items-center'>
                      <input type="radio" id='male' name='male'/>
                      <label htmlFor="male">Female</label>
                    </div>
                    <div className='flex gap-2 items-center'>
                      <input type="radio" id='male' name='male'/>
                      <label htmlFor="male">Other</label>
                    </div>
                    <div className='flex gap-2 items-center'>
                      <input type="radio" id='male' name='male'/>
                      <label htmlFor="male">Prefer not to say</label>
                    </div>
                </div>
               </div>
               {/* button */}
               <div>
                <button className='w-[400px] p-1 bg-gradient-to-r from-cyan-500 to-blue-500 ml-[10px] rounded-full text-[20px] text-white font-sans font-semibold hover:text-pink-600' type='submit'>Submit</button>
               </div>
             </form>
           </div>
         </div>
      </div>
    </>
  )
}

export default App
