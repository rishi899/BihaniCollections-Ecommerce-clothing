import { Button, Grid, Typography, Box } from "@mui/material";
import React from "react";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "black", color: "white", py: 5 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Company
          </Typography>
          <Button color="inherit" sx={{ display: "block", textAlign: "left", mb: 1 }}>About</Button>
          <Button color="inherit" sx={{ display: "block", textAlign: "left", mb: 1 }}>Blog</Button>
          <Button color="inherit" sx={{ display: "block", textAlign: "left", mb: 1 }}>Press</Button>
          <Button color="inherit" sx={{ display: "block", textAlign: "left", mb: 1 }}>Jobs</Button>
          <Button color="inherit" sx={{ display: "block", textAlign: "left", mb: 1 }}>DII</Button>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Support
          </Typography>
          <Button color="inherit" sx={{ display: "block", textAlign: "left", mb: 1 }}>Contact Us</Button>
          <Button color="inherit" sx={{ display: "block", textAlign: "left", mb: 1 }}>Help Center</Button>
          <Button color="inherit" sx={{ display: "block", textAlign: "left", mb: 1 }}>Privacy Policy</Button>
          <Button color="inherit" sx={{ display: "block", textAlign: "left", mb: 1 }}>Terms of Service</Button>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Follow Us
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button color="inherit">
              <Facebook />
            </Button>
            <Button color="inherit">
              <Twitter />
            </Button>
            <Button color="inherit">
              <Instagram />
            </Button>
            <Button color="inherit">
              <LinkedIn />
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Subscribe to our Newsletter
          </Typography>
          <input
            type="email"
            placeholder="Enter your email"
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "none",
              marginBottom: "10px",
              width: "100%",
            }}
          />
          <Button variant="contained" color="primary" sx={{ width: "100%" }}>
            Subscribe
          </Button>
        </Grid>
      </Grid>
      <Box sx={{ mt: 5, textAlign: "center", color: "gray" }}>
        <Typography variant="body2">© 2024 Your Company. All rights reserved.</Typography>
      </Box>
    </Box>
  );
};

export default Footer;