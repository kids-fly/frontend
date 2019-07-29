import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  paper: {
    marginTop: "30px",
    border: "none"
  }
});

const HeroImage = () => {
  const classes = useStyles();
  return (
    <div>
      <main>
        <Paper className={classes.paper}>
          {
            <img
              src="https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/5EaiPi6/delta-airlines-plane-takes-off-airport-runway_b9fixl78l_thumbnail-full13.png"
              alt="background"
              style={{ width: "100%", height: "500px" }}
            />
          }
        </Paper>
      </main>
    </div>
  );
};

export default HeroImage;
