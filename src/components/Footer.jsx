import React from 'react'
import { AiTwotoneCopyright } from "react-icons/ai";
function Footer() {
  return (
    <div className='my-4 flex flex-col sm:flex-row gap-3 text-sm py-6 justify-between items-center rounded-2xl bg-[#F5F5F5] px-2 sm:px-6 mx-0 sm:mx-8'>
      <div className='text-xm'><AiTwotoneCopyright className='inline'/>{" "}Talup 2023. All rights reserved</div>
      <div className='flex justify-end items-end gap-6'>
        <div className=' underline'>Terms & Conditions</div>
        <div className=' underline'>Privacy Policy</div>
      </div>
    </div>
  )
}

export default Footer
