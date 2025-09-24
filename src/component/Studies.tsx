import React from 'react'
import TextField from '@mui/material/TextField';

function Studies() {
  return (
    <div className='d-flex row justify-content-center' >
          <TextField  label="fullWidth" id="fullWidth" className="w-50" style={{width:"40%"}} />

    <div className='d-flex column justify-content-evenly' style={{width:"60%"}}>
        <nav>All</nav>
        <nav>blz</nav>
        <nav>clz </nav>
        <nav>dvd</nav>
        <nav>csz</nav>
      </div>
    
      <div>
            here  whare you see the studies.
        </div>

    </div>
  )
}

export default Studies