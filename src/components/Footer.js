import { Box, Grid, IconButton, makeStyles } from "@material-ui/core";
import React from "react";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import HomeIcon from "@material-ui/icons/Home";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles({
  fondo: {
    background: "#3f51b5",
  },
  icon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default function Footer() {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      className={classes.fondo}
    >
      <Grid item xs={6}>
        <Box textAlign="center" className={classes.icon}>
          <EmailIcon fontSize="large" style={{ marginRight: "10px" }} />
          <span>builes@utp.edu.co</span>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box textAlign="center">
          <IconButton>
            <a
              href="https://wa.me/573008557545?text=Hola%20Me%20Gustaria%20Contratarte%20Como%20Desarrollador"
              target="blank"
            >
              <WhatsAppIcon
                fontSize="large"
                style={{ color: "#00bb2d" }}
              ></WhatsAppIcon>
            </a>
          </IconButton>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box textAlign="center" className={classes.icon}>
          <PhoneIphoneIcon fontSize="large" style={{ marginRight: "10px" }} />
          <span>+57 301-320-1103</span>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box textAlign="center">
          <IconButton>
            <a
              href="https://www.linkedin.com/in/mauricio-builes/"
              target="blank"
            >
              <LinkedInIcon
                fontSize="large"
                style={{ color: "#0e76a8" }}
              ></LinkedInIcon>
            </a>
          </IconButton>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box textAlign="center" className={classes.icon}>
          <HomeIcon fontSize="large" style={{ marginRight: "10px" }} />
          <span>Medellin-Colombia</span>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box textAlign="center">
          <IconButton>
            <a href="https://github.com/builes" target="blank">
              <GitHubIcon
                fontSize="large"
                style={{ color: "#171515" }}
              ></GitHubIcon>
            </a>
          </IconButton>
        </Box>
      </Grid>
    </Grid>
  );
}
