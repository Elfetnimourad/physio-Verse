import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';

function Footer() {
  return (
      <>

       <Divider style={{border:'1px solid white'}}></Divider>
     <Box sx={{ gap: 1 }}>
      <Grid container spacing={2}>
        <Grid size={6}>
         <h2>PhysioVerse.</h2>
        </Grid>
        <Grid size={2}>
         size=4
        </Grid>
        <Grid size={2}>
         size=4
        </Grid>
        <Grid size={2}>
         size=8
        </Grid>
      </Grid>
    </Box>
        </>

  )

}

export default Footer