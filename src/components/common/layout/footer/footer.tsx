import React from 'react'

import {useLocation} from 'react-router-dom';

import Footer1 from './footer1';
import Footer2 from './footer2';

export default function Footer() {

const {pathname} = useLocation();

const condition = ['/', '/login', '/signup'];

if( condition.indexOf(pathname) !== -1 ){
    return(
        <Footer1 />
    );
 }
  return (
    <Footer2 />
  )
}
