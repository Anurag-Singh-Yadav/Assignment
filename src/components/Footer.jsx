import React from 'react'
import { AiTwotoneCopyright } from "react-icons/ai";
function Footer() {
  return (
    <div className='mx-8 my-4 flex text-sm py-6 justify-between items-center rounded-2xl bg-[#F5F5F5] px-6'>
      <div><AiTwotoneCopyright className='inline'/>{" "}Talup 2023. All rights reserved</div>
      <div className='flex justify-end items-end gap-6'>
        <div className=' underline'>Terms & Conditions</div>
        <div className=' underline'>Privacy Policy</div>
      </div>
    </div>
  )
}

export default Footer
