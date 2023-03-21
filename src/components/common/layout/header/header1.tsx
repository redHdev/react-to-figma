import React from 'react'

import {
    AiOutlineArrowRight
  } from "react-icons/ai";

import Vector from '../../../../assets/image/svg/Vector.svg';

export default function header1() {
  return (
    <div className='h-[83px] t-0 l-0 px-[63px] flex flex-wrap justify-between'>
        <img className='mt-[24px] mb-[23px] w-[196px] h-[36px]' alt = "logo" src = {Vector} />
        <ul className='flex font-raleway font-medium text-dark_blue align-center leading-[17px] text-[14.8px] -tracking-[0.5px] mt-[30px] mb-[35px]'>
            <li className='ml-[40px]'>About us</li>
            <li className='ml-[40px]'>How It Works</li>
            <li className='ml-[40px]'>Services</li>
            <li className='ml-[40px]'>Contact Us</li>
        </ul>
        <div className='text-[14.8px]'>
            <span className='mt-[22px] mb-[35px] mr-[40px] text-raleway font-medium leading-[17px] hover:underline font-semibold cursor-pointer'>login</span>
            <button className='my-[20px] w-[140px] h-[42px] font-medium text-center bg-dark_blue text-white rounded-[2px]'><div className='flex w-full justify-center align-center'><span>Get Started</span> <AiOutlineArrowRight className='ml-2 mt-[4px]'/></div></button>
        </div>
    </div>
  )
}
