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
  return (
    <Box sx={{ flexGrow: 1, mt: 2 }}>
      <Paper>
        <Grid container spacing={1}>
          <Grid item sm={4} xs={12} sx={{ textAlign: "center" }}>
            <Avatar
              alt="Murad"
              src="https://lh3.googleusercontent.com/a/AGNmyxbsJjU3MomMTjmvnHSWX5oJFxW27ILY5PG8FMLWcQ=s96-c-rg-br100"
              sx={{ width: 100, height: 100, margin: "0 auto" }}
            />
            <Typography variant="h6">Murad</Typography>
            <Typography variant="caption">Email Id: sakilmura4154542555d52@gmail.com</Typography>
          <Divider sx={{mt:2, display: { xs: 'block', md: 'none' }}}/>
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
                  <Typography variant="body1" sx={{ ml: 2 }}>
                    15 April 2023
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem alignItems="flex-start">
                <ListItemText>
                  <Typography variant="body1" sx={{ ml: 2 }}>
                    <Chip label="Active" size="small" color="success" />
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem alignItems="flex-start">
                <ListItemText>
                  <Typography variant="body1" sx={{ ml: 2 }}>
                    15 April 2024
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem alignItems="flex-start">
                <ListItemText>
                  <Typography variant="body1" sx={{ ml: 2 }}>
                    500
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem alignItems="flex-start">
                <ListItemText>
                  <Typography variant="body1" sx={{ ml: 2 }}>
                    500
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem alignItems="flex-start">
                <ListItemText>
                  <Typography variant="body1" sx={{ ml: 2 }}>
                    ₹ 500
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem alignItems="flex-start">
                <ListItemText>
                  <Typography variant="body1" sx={{ ml: 2 }}>
                    5
                  </Typography>
                </ListItemText>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

export default Profile;
