import React, {useEffect} from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "next/link";
import Avatar from "@mui/material/Avatar"
import Container from "@mui/material/Container";
import GoogleIcon from "@mui/icons-material/Google";
import LinearProgress from "@mui/material/LinearProgress";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Head from "next/head";
import { useRouter } from "next/router";
import { UserAuth } from "@/src/context/AuthContext";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import Typography from "@mui/material/Typography"

function Login() {
  const router = useRouter();
  const [formLoading, setFormLoading] = React.useState(false);
  const [MessageStatus, setMessageStatus] = React.useState();
  const [open, setOpen] = React.useState(false);
  const { user, googleSignin } = UserAuth();

  useEffect(() => {
    const CheckUserLogin = () =>{
      if(user){
        router.push("/");
      }
    }
  
    return () => {
      CheckUserLogin();
    }
  }, [])
  

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };


  const SignupwithGoogle = async () => {
    setFormLoading(true);
    try {
      await googleSignin()
      router.push('/')
    } catch (e) {
      setMessageStatus(e.message)
      setOpen(true);
      console.log(e.message)
    }
    setFormLoading(false);
  };

  const googleSigninButton = () => {
    return (
      <div style={{ marginTop: 15 }}>
        <Button
          variant="outlined"
          startIcon={<GoogleIcon />}
          onClick={SignupwithGoogle}
        >
          Login with Google
        </Button>
      </div>
    );
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

  return (
    <Container component="main" maxWidth="xs">
      <Head>
        <title>Login - GeM Hub</title>
        <meta
          name="description"
          content="Login to use GeM Seller Hub"
        />
      </Head>
      {formLoading && <LinearProgress />}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "3ch",
            marginTop: "2ch",
            border: "1px solid #1976d2",
            // backgroundColor: "#F6F6F6",
            borderRadius: "2ch",
          }}
        >
          {googleSigninButton()}
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
  );
}

export default Login;