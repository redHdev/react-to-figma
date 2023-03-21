import React from 'react'

import Vector from '../../../../assets/image/svg/Vector.svg';
import Facebook from '../../../../assets/image/svg/facebook.svg'
import Instagram from '../../../../assets/image/svg/instagram.svg'
import Youtube from '../../../../assets/image/svg/youtub.svg'

export default function footer1() {
  return (
    <div className='bg-footer_bg flex justify-center'>
      <div className='w-[878px] h-[327px]'>
        <div className='flex items-[center] justify-between pt-[108px]'>
          <div>
            <img alt = "footerImag" className='w-[120px] h-[22px]' src = {Vector}></img>
          </div>
          <div>
            <ul className='flex font-gilroy font-medium text-dark_blue align-center text-[14px] leading-[14px] -tracking-[0.5px]'>
              <li className='ml-[45px]'>Home</li>
              <li className='ml-[45px]'>About Us</li>
              <li className='ml-[45px]'>Services</li>
              <li className='ml-[45px]'>Contact Us</li>
            </ul>
          </div>
          <div>
            <ul className='flex items-center font-raleway font-medium text-dark_blue align-center leading-[17px] text-[14.8px] -tracking-[0.5px]'>
              <li className='ml-[29px]'>
                <img alt = "facebook" src = {Facebook}></img>
              </li>
              <li className='ml-[29px]'>
                <img alt = "facebook" src = {Instagram}></img>
              </li>
              <li className='ml-[29px]'>
                <img alt = "facebook" src = {Youtube}></img>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
