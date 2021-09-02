import React, { Component } from "react";
import { makeStyles, Grid, Paper, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import CardCustom from "./commoncomponent/CardCustom";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
}));

export default class Album extends Component {
  state = {
    dataAlbum: [],
  };

  async componentDidMount() {
    const res = await axios.get("https://jsonplaceholder.typicode.com/albums");
    this.setState({
      dataAlbum: res.data,
    });
  }

  render() {
    const { dataAlbum } = this.state;
    return (
      <React.Fragment>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={useStyles.root}>
              <Typography variant="h2" gutterBottom align='center'>
                <Box color="success.main">This is My Albums</Box>
              </Typography>
            </Paper>
          </Grid>
          {dataAlbum &&
            dataAlbum.length > 0 &&
            dataAlbum.map((data) => (
              <Grid item xs={12} sm={6} key={data.id}>
                <Paper className={useStyles.paper}>
                  <CardCustom title={data.title} />
                </Paper>
              </Grid>
            ))}
        </Grid>
        
      </React.Fragment>
    );
  }
}
