import React, { ReactNode } from 'react'
import Header from './header/header';
import Footer from './footer/footer';
import Navbar from './navbar/navbar';

interface LayoutProps {
    children : ReactNode;
}

const isLogin = false;

export default function Layout({children} : LayoutProps) {
  return (
    <div className='flex justify-center'>
        <div className='max-w-[1440px] flex flex-col'>
            <Header />
            {isLogin ? <Navbar /> : <></>}
            {children}
            <Footer />
        </div>
    </div>
  )
}
