import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Alert from "@mui/material/Alert";
import Layout from "../src/Layout";

function Dashboard() {
  return (
    <Box sx={{ width: "100%" }}>
      <Alert variant="outlined" severity="info" sx={{ mb: 1 }}>
        This is an info alert — check it out!
      </Alert>
      <Paper elevation={3} sx={{ p: 2 }}>
        <Typography variant="h6" component="h5">
          Business Overview
        </Typography>
        <Grid container spacing={2} sx={{ p: 2 }}>
          <Grid xs={6} md={3}>
            <Typography variant="h4" component="p">
              500
            </Typography>
            Bids
          </Grid>
          <Grid xs={6} md={3}>
            <Typography variant="h4" component="p">
              500
            </Typography>
            Orders
          </Grid>
          <Grid xs={6} md={3}>
            <Typography variant="h4" component="p">
              500
            </Typography>
            Incidents
          </Grid>
          <Grid xs={6} md={3}>
            <Typography variant="h4" component="p">
              ₹ 500
            </Typography>
            EMD & ePBG
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

export default Dashboard;

Dashboard.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
