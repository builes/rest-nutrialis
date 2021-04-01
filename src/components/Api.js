import { Box, Grid, Typography, Button, makeStyles } from "@material-ui/core";
import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
  },
  media: {
    height: 300,
  },
});

export default function Api() {
  const [usuario, setUsuario] = useState({});

  async function obtenerUsuario() {
    try {
      const res = await axios.get(
        "https://0q27loouph.execute-api.us-east-1.amazonaws.com/"
      );
      console.log(res.data);
      setUsuario(res.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    obtenerUsuario();
  }, []);

  const classes = useStyles();

  return (
    <Fragment>
      <Grid item xs={12}>
        <Typography variant="h3">
          <Box textAlign="center" m={5}>
            Servicio Rest Nutrialus
          </Box>
        </Typography>
      </Grid>
      {/*  */}
      <Grid item xs={false} md={1}></Grid>
      <Grid item xs={12} md={5}>
        <Box textAlign="center" m={2}>
          <Button
            variant="contained"
            fullWidth
            onClick={obtenerUsuario}
            color="primary"
            size="large"
          >
            Obtener Paciente
          </Button>
        </Box>
      </Grid>
      <Grid item xs={12} md={5}>
        <Box m={2}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={usuario.image}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Nombre: {usuario.name}
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">
                  Email: {usuario.email}
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">
                  Phone: {usuario.phone}
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">
                  Nutritionist: {usuario.nutritionist}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Compartir
              </Button>
            </CardActions>
          </Card>
        </Box>
      </Grid>
    </Fragment>
  );
}
