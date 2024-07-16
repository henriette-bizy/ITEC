import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { Login } from './pages/auth/login'
import { FaChartBar, FaFileInvoice, FaUserEdit, FaUserPlus } from 'react-icons/fa';
import { FaFileInvoiceDollar, FaPeopleGroup } from 'react-icons/fa6';
import { BsPeopleFill } from 'react-icons/bs';
import { IoReceipt } from 'react-icons/io5';
import { CgFileDocument } from "react-icons/cg";
import Layout from './components/layout/layout'
import { IoDocumentsOutline, IoAnalytics } from "react-icons/io5";
import { GrUserManager } from "react-icons/gr";
import UserRoutes from './Routes/userRoutes'
import AdminRoutes from './Routes/adminRoutes'

function App() {

  const userTitle = 'User Dashboard';
  const adminTitle = 'Admin Dashboard';
  const userSidebarFields = [
    {id:1,destination:"/user",icon:<IoDocumentsOutline />, title:"Requests"},
    {id:2,destination:"editProfile",icon:<FaUserEdit />, title:"Edit Profile"},
    {id:3,destination:"NewRequests",icon:<CgFileDocument />, title:"New Requests"}
  ]
  const admineSiderFields =  [
    {id:1,destination:"requests",icon:<IoDocumentsOutline />, title:"Requests"},
    {id:2,destination:"statistics",icon:<FaChartBar />, title:"Statistics"},
    {id:3,destination:"/admin/newRequests ",icon:<CgFileDocument />, title:"New Requests"},
    {id:4,destination:"analytics ",icon:<IoAnalytics />, title:"Analytics"},
    {id:5,destination:"addUser",icon:<FaUserPlus />, title:"Add User"},
    {id:6,destination:"accountant",icon:<GrUserManager /> , title:"Accountant"},
    

  ]

   

  return (
    <div>
      <Router>
      <Routes>
        <Route 
        path='/login'
        // element ={<Login />}
        />
        <h2>Hello this is login</h2>
        <Route
        path='/user/*'
        element={
          <Layout Title={userTitle} sidebarFields={userSidebarFields} headerTitle="User Dashboard">
            <UserRoutes />
           </Layout>
        }>
        
        </Route>
        <Route
        path='/admin/*'
        element={
          <Layout adminTitle={adminTitle} sidebarFields={admineSiderFields} headerTitle="Admin Dashboard">
           <AdminRoutes />
           </Layout>
        }>
        
        </Route>
      </Routes>

      </Router>
    </div>
  )
}

export default App
