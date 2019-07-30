import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import img from "../img/plane.jpg";
import { makeStyles } from "@material-ui/core/styles";

const Hero = styled.div`
  margin-top: 10px;
  height: 500px;
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${img});
  // background-image: url(${img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const useStyles = makeStyles({
  text: {
    fontSize: "20px",
    color: "white",
    paddingTop: "20%",
    paddingLeft: "10px",
    letterSpacing: "2px;",
    fontWeight: 300
  },
  btn: {
    color: "white",
    background: "green",
    marginTop: "10px"
  }
});

const HeroImage = () => {
  const classes = useStyles();
  return (
    <div>
      <Hero>
        <Typography className={classes.text}>
          Our mission is to give parents a pleasant flight experience
        </Typography>
        <Button className={classes.btn}>Get Started</Button>
      </Hero>
    </div>
  );
};

export default HeroImage;
