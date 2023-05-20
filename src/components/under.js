import React from 'react'
import Typography from '@mui/material/Typography';
import { Paper, Box } from '@mui/material';
import Image from 'next/image';
function Under() {
  return (
    <Paper elevation={2} sx={{textAlign: "center"}}>
        <Box sx={{minHeight: 200}}>
        <Image
        src="/under.svg"
        width={500}
        height={500}/>
        <Typography variant='h5'>Under Construction</Typography>
        </Box>
    </Paper>
  )
}

export default Under