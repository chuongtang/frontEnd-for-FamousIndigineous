import React from 'react';
import { Container,  Typography } from '@material-ui/core';
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
    borderRadius: "1rem",
    background: "#f1e9e9",
    boxShadow: "1.25rem 1.25rem 2.5rem #938e8e, -1.25rem - 1.25rem 2.5rem #ffffff",
    margin: "2rem",
    padding: "2rem"
  },
}));


const App = () => {
  const { isAuthenticated } = useAuth0();
  const classes = useStyles();


  return (
    <Container maxWidth="sm">
      {!isAuthenticated ? (
        <Container className={classes.root}>
          <Typography variant="h4" component="h2" gutterBottom>
            🍁 Indigineous History Makers.
          </Typography>
          <br></br>
          <HomeScreen />
          <br></br>
          <LoginButton />
        </Container>
      ) :
        <div>
          <LogoutButton />
          <LoggedInScreen />
        </div>}
    </Container>
  );
};

export default App;