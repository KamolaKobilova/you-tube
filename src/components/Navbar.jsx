import React from 'react';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { logo } from '../utils/constants';
// import Logo from '../assets/images/Logo.png';

const Navbar = () => {
 <Stack direction="row" alignItems="center" p={2} sx={{position: "sticky", background: "#000", top:"0", justifyContent: "space-between"}}>
  
  <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }} 
  ><img src={logo} alt="logo"/>
    Home
  </Link>
      <SearchBar/>
 </Stack>
}

export default Navbar