import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Link from 'next/link';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import LinearProgress from '@mui/material/LinearProgress';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Head from "next/head";
import { UserAuth } from '@/src/context/AuthContext';

function Forget() {
    const {sendPasswordReset} = UserAuth()
    const [formLoading, setFormLoading] = React.useState(false);
  const [MessageStatus, setMessageStatus] = React.useState();
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };


  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  
  const handleSubmit = async (event) => {
    setFormLoading(true);
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    try {
      await sendPasswordReset(email)
      setMessageStatus("Email Sent Successfully")
    } catch (e) {
      setMessageStatus(e.message)
      console.log(e.message)
    }
    setOpen(true);
    setFormLoading(false);
  }
    return (
        <Container component="main" maxWidth="xs">
            <Head>
            <meta name="robots" content="noindex" />
            <title>Recover your password - GeM Portal Course</title>
            </Head>
        {formLoading && <LinearProgress />}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Recover your Password
          </Typography>
          <Box component="div" sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: "2ch",
            marginTop: "2ch",
            border: "1px solid #1976d2",
            // backgroundColor: "#F6F6F6",
            borderRadius: "2ch"
          }}>
            <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Get Link
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/login" variant="body2">
                    Already haven an account? Login
                  </Link>
                </Grid>
              </Grid>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/signup" variant="body2">
                    haven&apos;t an account? Signup
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
        <Snackbar
          open={open}
          autoHideDuration={4000}
          onClose={handleClose}
          message={MessageStatus}
          action={action}
        />
      </Container>
    )
}

export default Forget