import React from 'react';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { logo } from '../utils/constants';
import SearchBar from './SearchBar';
// import logo from '../assets/images/Logo.png';

const Navbar = () => {
 return (
 <Stack direction="row" alignItems="center" p={2} sx={{position: "sticky", background: "#b16d6d", top:"0", justifyContent: "space-between", height: "100px"}}>
  
  {/* <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #99beac' }} 
  ><img src={logo} alt="logo"/> */}
    Home
  {/* </Link> */}
 
      <SearchBar/>
 </Stack>
 )
}


export default Navbar