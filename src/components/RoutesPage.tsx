import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import SignUp from './SignUp'
import ExpenseTracker from './ExpenseTracker';
const RoutesPage = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/home" element={<ExpenseTracker />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesPage
