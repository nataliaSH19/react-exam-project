import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Box } from "@material-ui/core";
import Typed from "react-typed";

//css styles
const useStyles = makeStyles((theme) => ({
  title: {
    color: "tomato",
  },
  subtitle: {
    color: "tan",
    marginBottom: "3rem",
  },
  container: {
    marginTop: "10%",
    textAlign: "center",
  },
}));
const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography className={classes.title} variant="h4">
        <Typed strings={["Natalia Shelenko"]} typeSpeed={40} />
      </Typography>
      <br />
      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={[
            "Welcome in my Portfolio",
            "Web Development",
            "Junior Frontend",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
      </Typography>
    </div>
  );
};

export default Header;
