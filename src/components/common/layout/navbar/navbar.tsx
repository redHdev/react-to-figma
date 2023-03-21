import React from 'react'

import Navbar1 from './navbar1';
import Navbar2 from './navbar2';

import {useLocation} from 'react-router-dom';


const isAdmin = false;

export default function Navbar() {

  const {pathname} = useLocation();

  const condition = ['/', '/login', '/signup'];

  if( condition.indexOf(pathname) !== -1 ){
    if(isAdmin) return (
      <>
        <Navbar1 />
      </>
    );
    return (
      <>
        <Navbar2 />
      </>
    )
  }
  return (
    <></>
  );
}
