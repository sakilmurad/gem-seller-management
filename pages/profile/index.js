import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import { Chip } from "@mui/material";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Layout from "@/src/components/Layout";
import LogoutIcon from "@mui/icons-material/Logout";
import { UserAuth } from "@/src/context/AuthContext";
import Protected from "@/src/components/Protected";
const infoItem = [
  "Joined",
  "Plan",
  "Plan Expire on",
  "No of Bids",
  "No of Orders",
  "Total EMD Amount",
  "No of Incidents",
];
function Profile() {
  const { user, logout } = UserAuth();

  const handleLogout = () =>{
    logout()

  }
  return (
    <Protected>
      <Box sx={{ flexGrow: 1, mt: 2 }}>
        <Paper>
          <Grid container spacing={1}>
            <Grid item sm={4} xs={12} sx={{ textAlign: "center" }}>
              <Avatar
                alt="User"
                src={
                  user &&
                  user.photoURL
                    ? user.photoURL
                    : "https://lh3.googleusercontent.com/a/AGNmyxakOE5fuf2QA_dwSot8lujtWc1Al8WPBVbqZAwq=s96-c-rg-br100"
                }
                sx={{ width: 100, height: 100, margin: "0 auto" }}
              />
              <Typography variant="h6">{user && user.displayName}</Typography>
              <Typography variant="caption">Email Id: {user && user.email}</Typography>
              <Button
                sx={{ display: "flex", margin: "5px auto" }}
                startIcon={<LogoutIcon />}
                size="small"
                onClick={handleLogout}
              >
                Logout
              </Button>
              <Divider sx={{ mt: 2, display: { xs: "block", md: "none" } }} />
            </Grid>
            <Grid item xs={6} sm={3}>
              <List dense>
                {infoItem.map((item) => (
                  <ListItem alignItems="flex-end">
                    <ListItemText key={item}>
                      <Typography variant="body1">{item}</Typography>
                    </ListItemText>
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid item xs={6} sm={5}>
              <List dense>
                <ListItem alignItems="flex-start">
                  <ListItemText>
                    <Typography variant="body1">15 April 2023</Typography>
                  </ListItemText>
                </ListItem>
                <ListItem alignItems="flex-start">
                  <ListItemText>
                    <Chip label="Active" size="small" color="success" />
                  </ListItemText>
                </ListItem>
                <ListItem alignItems="flex-start">
                  <ListItemText>
                    <Typography variant="body1">15 April 2024</Typography>
                  </ListItemText>
                </ListItem>
                <ListItem alignItems="flex-start">
                  <ListItemText>
                    <Typography variant="body1">500</Typography>
                  </ListItemText>
                </ListItem>
                <ListItem alignItems="flex-start">
                  <ListItemText>
                    <Typography variant="body1">500</Typography>
                  </ListItemText>
                </ListItem>
                <ListItem alignItems="flex-start">
                  <ListItemText>
                    <Typography variant="body1">₹ 500</Typography>
                  </ListItemText>
                </ListItem>
                <ListItem alignItems="flex-start">
                  <ListItemText>
                    <Typography variant="body1">5</Typography>
                  </ListItemText>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Protected>
  );
}

export default Profile;

Profile.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
