import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import useStyles from './styles';
import { createPost, updatePost } from '../../actions/posts';
import Author from '../Author';
import {useAuth0} from '@auth0/auth0-react';

const Form = ({ currentId, setCurrentId }) => {
  const {user} = useAuth0();
  const adName = user.name;
  const [postData, setPostData] = useState({ admirer: adName, name: '', achivement: '', tags: '', selectedFile: '' });
  const post = useSelector((state) => (currentId ? state.posts.find((achivement) => achivement._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({ admirer: '', name: '', achivement: '', tags: '', selectedFile: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
  };

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? `Editing "${post.fullname}"` : 'Create a Hero Card'}</Typography>
        {/* <TextField name="admirer" variant="outlined" label="Added by (Admirer's name)" fullWidth value={postData.admirer} onChange={(e) => setPostData({ ...postData, admirer: e.target.value })} /> */}
        {/* <TextField name="admirer" variant="outlined" label="Added by (Admirer's name)" fullWidth value={user.name}  /> */}
        <TextField name="fullname" variant="outlined" label="Your Hero's name" fullWidth value={postData.fullname} onChange={(e) => setPostData({ ...postData, fullname: e.target.value })} />
        <TextField name="achivement" variant="outlined" label="Hero's Achivement" fullWidth multiline rows={4} value={postData.achivement} onChange={(e) => setPostData({ ...postData, achivement: e.target.value })} />
        <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit 🍂</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear 🍃</Button>
      </form>
      <Author/>
    </Paper>
  );
};

export default Form;