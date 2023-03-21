import React from 'react'

import {useLocation} from 'react-router-dom';

import Header1 from './header1';
import Header2 from './header2';

export default function Header() {

 const {pathname} = useLocation();

 const condition = ['/', '/login', '/signup'];

 if( condition.indexOf(pathname) !== -1 ){
    return(
        <Header1 />
    );
 }
  return (
    <Header2 />
  )
}
