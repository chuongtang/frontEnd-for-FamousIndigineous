import React from "react";
import TypeWriterEffect from "react-typewriter-effect";
import { Container, Avatar } from "@material-ui/core";
import People from "../images/People.jpg";
import Inukshuk from "../images/Inukshuk.jpg";
import MLeaf from "../images/MLeaf.jpg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  
  avatar: {
    display: "flex",
    width: "8rem",
    height: "auto",
    margin: "0.5rem"
  },
}));

const HomeScreen = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <TypeWriterEffect
        textStyle={{
          fontFamily: "Red Hat Display",
          color: "#3F3D56",
          fontWeight: 500,
          fontSize: "1.5em",
        }}
        startDelay={500}
        cursorColor="#3F3D56"
        text="The first day of summer, June 21, marks National Indigenous Peoples Day, a day to recognize and celebrate First Nations people, Métis, and Inuit in Canada.
        
    
        This project was built to help my kids learn more about Aboriginal cultures, and celebrate the greatness of Indigenous Heros that they find on the internet. "
        loop={true}
        nextTextDelay={1000}
        typeSpeed={60}
      />
      <div className={classes.avatar}>
        <Avatar alt="People" src={People} className={classes.avatar}/>
        <Avatar alt="Inukshuk" src={Inukshuk} className={classes.avatar} />
        <Avatar alt="MLeaf" src={MLeaf} className={classes.avatar} />
      </div>
      <TypeWriterEffect
        textStyle={{
          fontFamily: "Red Hat Display",
          color: "#3F3D56",
          fontWeight: 500,
          fontSize: "1.5em",
        }}
        startDelay={20000}
        cursorColor="#3F3D56"
        text="Please log in to add your Hero Card"
        loop={true}
        nextTextDelay={1000}
        typeSpeed={60}
      />
    </Container>
  );
};

export default HomeScreen;
