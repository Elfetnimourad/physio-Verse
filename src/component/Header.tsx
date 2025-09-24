import React from 'react'
import Button from '@mui/material/Button';

function Header() {
  return (
    <div className='d-flex justify-content-between' style={{width:"100%",padding:"15px",height:"184px"}}>
        <h2>PhysioVerse.</h2>
        <Button variant="contained" style={{height:"40px"}}>Sign Up</Button>
    </div>
  )
}

export default Header