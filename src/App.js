import React from 'react';
// import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
// import { useDispatch } from 'react-redux';

// import Posts from './components/Posts/Posts';
// import Form from './components/Forms/Form';
// import { getPosts } from './actions/posts';
// import useStyles from './styles';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../src/components/LoginButton';
import LoggedInScreen from '../src/Screen/LoggedInScreen';
import LogoutButton from '../src/components/LogoutButton';


const App = () => {
  const { isAuthenticated } = useAuth0();
  // const [currentId, setCurrentId] = useState(0);
  // const dispatch = useDispatch();
  // const classes = useStyles();

  // useEffect(() => {
  //   dispatch(getPosts());
  // }, [currentId, dispatch]);

  return (
    <div className="App">
      {!isAuthenticated ? (
        <div>
          <p style={{ fontSize: "1.5rem" }}>Please Login.</p>
          <LoginButton />
        </div>
      ) :
        <div>
          <LogoutButton />
          <LoggedInScreen />
        </div>}
    </div>
  );
};

export default App;