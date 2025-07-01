import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginForm from './components/Auth/LoginForm'
import SignupForm from './components/Auth/SignupForm'
import Sidebar from './components/Layout/Sidebar'
import Overview from './components/Dashboard/Overview'
import Layout from './components/Layout/Layout'
import Chart from './components/Dashboard/Chart'
import Recent from './components/Dashboard/Recent'
import LicenseManagement from './components/License/LicenseManagement'
import Report from './components/report/Report'
import Notification from './components/notification/Notification'
import AccountSettings from './components/setting/Acountsetting'
import LicenseEdit from './components/License/LicenseEdit'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path='/chart' element={<Chart />} />
        <Route path='/recent' element={<Recent />} />
                <Route path='/licenseEdit' element={<LicenseEdit />} />


    
        <Route path='/' element={<Layout />}>
           <Route path="/" element={<Overview />} />
           <Route path="/licenses" element={<LicenseManagement/>} />
          <Route path="/reports" element={<Report/>} />         
           <Route path="/notifications" element={<Notification/>} />
           <Route path='/setting' element={<AccountSettings/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
