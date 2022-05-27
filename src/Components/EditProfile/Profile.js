import "./styles.css";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
//import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
//import { Radio } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  bar: {
    backgroundColor: "#2160A0"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  HeaderButton: {
    margin: "0 2% 0 2%"
  },
  formStyles: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    margin: "3%"
  },
  imgStyles: {
    width: "35%",
    marginLeft: "2.5%",
    borderRadius: "150px"
  },
  formInputs: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    width: "60%",
    marginBottom: "2%"
  },
  input: {
    margin: "5%",
    marginRight: "50%",
    padding: "3%",
    borderRadius: "10px",
    fontSize: "1.25rem"
  },
  input2: {
    margin: "5%",
    padding: "5%",
    borderRadius: "10px",
    fontSize: "1.25rem",
    marginLeft: "5%"
  },
  formRadios: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    marginLeft: "80%"
  },
  textStylingRadios: {
    padding: "0",
    margin: "3%",
    marginLeft: "100%",
    width: "100%",
    color: "rgb(0, 0, 0, 60%)",
    textAlign: "center"
  },
  textStylingInputs: {
    padding: "0",
    margin: "1%",
    marginLeft: "15%",
    color: "rgb(0, 0, 0, 60%)",
    textAlign: "center"
  }
}));

export default function Profile() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.bar} position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <Button className={classes.HeaderButton} color="inherit">
            Profile
          </Button>
        </Toolbar>
      </AppBar>
      <section className="profile-page">
        <form className={classes.formStyles}>
          <div id="aviurl" className={classes.formInputs}>
            <img
              src="https://harchi.info/files/1356-kosher-food.jpg"
              alt=""
              className={classes.imgStyles}
            />
            {/* <input name='aviurl' type='file' /> */}
          </div>
          <div className={classes.formInputs}>
            <label>
              <p className={classes.textStylingInputs}>Full name</p>
              <input name="name" type="text" className={classes.input} />
            </label>
            <label>
              <p className={classes.textStylingInputs}>Email</p>
              <input name="email" type="email" className={classes.input} />
            </label>
            <label>
              <p className={classes.textStylingInputs}>Location</p>
              <input
                name="location"
                type="text"
                placeholder="City, State"
                className={classes.input2}
              />
            </label>
            <label>
              <p className={classes.textStylingInputs}>Bio</p>
              <textarea name="bio" className={classes.input2} />
            </label>
            <div>
              <label className={classes.formInputs}>
                <p className={classes.textStylingRadios}> </p>
                <div className={classes.formRadios}>
                  <label>
                    <p className={classes.textStylingInputs}>Favourite Food</p>
                    <textarea
                      name="Favourite Food"
                      className={classes.input2}
                    />
                  </label>
                </div>

                <p className={classes.textStylingRadios}></p>
              </label>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}