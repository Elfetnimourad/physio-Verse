import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
function Footer() {
  return (
      <>

       <Divider style={{border:'1px solid white'}}></Divider>
     <Box sx={{ gap: 1 }} style={{padding:5}}>
      <Grid container spacing={2}>
        <Grid size={6}>
         <h2>PhysioVerse.</h2>
         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum unde quaerat eveniet cumque accusamus atque qui error quo enim fugiat?</p>
        </Grid>
        <Grid size={3}>
          <h3>Links.</h3>
         <div className="d-flex justify-content-center mb-4 row">
          <a href="#about" className="text-light me-4 text-decoration-none">
            About
          </a>
          <a href="#theories" className="text-light me-4 text-decoration-none">
            Theories
          </a>
          <a href="#research" className="text-light me-4 text-decoration-none">
            Research
          </a>
          <a href="#contact" className="text-light me-4 text-decoration-none">
            Contact
          </a>
        </div>
        </Grid>
        <Grid size={3}>
          <h3>Socials.</h3>
           <div className="mb-3 row">
          <a href="https://twitter.com" className="text-light me-3 fs-4">
            <XIcon/>
          </a>
          <a href="https://facebook.com" className="text-light me-3 fs-4">
           
             <FacebookIcon/>
          </a>
          <a href="https://github.com" className="text-light fs-4">
                         <GitHubIcon/>

          </a>
        </div>
        </Grid>
        
      </Grid>
       <p className="small mb-0 text-center">
          © {new Date().getFullYear()} Science Explorer | Made with curiosity 🪐
        </p>
    </Box>
        </>

  )

}

export default Footer