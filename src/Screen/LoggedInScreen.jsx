import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Posts from '../components/Posts/Posts';
import Form from '../components/Forms/Form';
import { getPosts } from '../actions/posts';
import useStyles from '../styles';
import memories from '../images/totem.jpg';
// import {useAuth0} from '@auth0/auth0-react';


const LoggedInScreen = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();
  // const {user} = useAuth0();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
 
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="sticky" color="inherit">
        <Typography className={classes.heading} variant="h3" align="center">🍁Indigenous History-Makers</Typography>
        <img className={classes.image} src={memories} alt="icon" height="60" />
        
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default LoggedInScreen;