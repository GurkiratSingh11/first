import React from 'react'
import { Outlet } from 'react-router-dom'
import SideNav from '../compnents/SideNav'
import Box from '@mui/material/Box';
import NavigationBar from '../compnents/NavigationBar';

const Layout = () => {
  return (
    <div>
          <NavigationBar/>
          <Box height={70}/>

         <Box sx={{ display: 'flex' }}>
        
        <SideNav/>
       
            <Outlet/>
        
        </Box>
    </div>
  )
}

export default Layout