import React from 'react'
import Typography from '@mui/material/Typography';
import { Paper, Box } from '@mui/material';
import ConstructionIcon from '@mui/icons-material/Construction';
function Under() {
  return (
    <Paper elevation={2} sx={{textAlign: "center"}}>
        <Box sx={{minHeight: 200}}>
        <ConstructionIcon sx={{fontSize: 90, mt:3}}/>
        <Typography variant='h5'>Under Construction</Typography>
        </Box>
    </Paper>
  )
}

export default Under