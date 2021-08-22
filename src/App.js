import React from 'react';
import { Container, Typography, Paper } from '@material-ui/core';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../src/components/LoginButton';
import LoggedInScreen from '../src/Screen/LoggedInScreen';
import LogoutButton from '../src/components/LogoutButton';
import HomeScreen from './Screen/HomeScreen';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    borderRadius: "1.5rem",
    backgroundColor: "#f8f9fa",
    margin: "2rem",
    padding: "1.5rem ",
    maxWidth: "30rem"
  },
  hidden: {
    visibility: "hidden",
    maxHeight: "1rem"
  }
}));


const App = () => {
  const { isAuthenticated } = useAuth0();
  const classes = useStyles();


  return (
    <Container maxWidth="lg">
      {!isAuthenticated ? (
        <Paper elevation={3} className={classes.root}>
          <Typography variant="h4" component="h2" gutterBottom>
            Indigineous History Makers.
          </Typography>
          <br></br>
          <HomeScreen />
          <br></br>
          <LoginButton />
          <iframe className={classes.hidden} src="https://famousindigenous.herokuapp.com/"></iframe>
        </Paper>
      ) :
        <div>
          <LogoutButton />
          <LoggedInScreen />
        </div>}
    </Container>
  );
};

export default App;