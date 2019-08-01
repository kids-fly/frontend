import React from "react";
//import { Card, CardText, CardBody, CardTitle } from "reactstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";
// Material UI Trying Something
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import Avatar from "@material-ui/core/Avatar";

// const StyleCard = styled.div`
//   margin-top: 10%;
//   margin-bottom: 20px;
// `;

// const Button = styled.button`
//   background: lightgrey;
//   border-radius: 10px;
//   padding: 4px 10px;
//   text-decoration: none;
// `;
// const Title = styled.h2`
//   text-align: center;
//   margin-top: 20px;
//   color: green;
//   font-weight: 300;
// `;

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    margin: "10% auto"
  },
  media: {
    height: 140
  },
  avatar: {
    backgroundColor: red[500],
    margin: "10px auto",
    width: "50px",
    height: "50px",
    fontSize: "15px"
  }
});

const Title = styled.h2`
  text-align: center;
  color: green;
  margin-top: 10px;
  font-weight: 300;
`;

const UserCard = props => {
  const classes = useStyles();
  return (
    // <div>
    //   <Title>Welcome to your profile {props.users.firstname}</Title>
    //   <StyleCard>
    //     <Card
    //       style={{
    //         backgroundColor: "rgba(9,108,8,0.3)",
    //         boxShadow: "1px 1px 15px #333"
    //       }}
    //     >
    //       <CardBody>
    //         <CardTitle>
    //           Name: {props.users.firstname} {props.users.lastname}
    //         </CardTitle>
    //         <CardText>Contact: {props.users.contact}</CardText>
    //         <CardText>Username: {props.users.username}</CardText>
    //         <CardText>Image: {props.users.image_url}</CardText>
    //       </CardBody>
    //     </Card>
    //   </StyleCard>
    //   <Button>
    //     <Link style={{ textDecoration: "none" }} to="/profile/new">
    //       Home
    //     </Link>
    //   </Button>
    // </div>
    <div>
      <Title>Welcome to your profile {props.users.firstname} !</Title>
      <Card className={classes.card}>
        <CardActionArea>
          {/* <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        /> */}

          {
            <Avatar aria-label="recipe" className={classes.avatar}>
              USER
            </Avatar>
          }
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Name: {props.users.firstname} {props.users.lastname}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Contact: {props.users.contact}
            </Typography>
            <br />
            <Typography variant="body2" color="textSecondary" component="p">
              Username: {props.users.username}
            </Typography>
            <br />
            <Typography variant="body2" color="textSecondary" component="p">
              image: {props.users.image_url}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to="/profile/new">
            <Button size="small" color="primary">
              Home
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};

export default UserCard;
