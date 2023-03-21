import React from 'react'

import {
    Route,
    Routes,
    Navigate,
  } from "react-router-dom";

import Landing from '../../landing/landing';
import Signup from '../signup/signup';
import Login from '../login/login';
import UserDashboard from '../../dashboard/userDashboard';
import Transaction from '../../transaction/transaction';
import Wallet from '../../wallet/wallet';
import Settings from '../../settings/setting';
import AdminDashboard from '../../dashboard/adminDashboard';


export default function RouterIndex() {

  return (
    <>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
    </>
  )
}
