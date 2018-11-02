import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

import { styles } from "./styles";

import SilavinPhoto from "../../Photos/GeneralUse/SilavinEX.png";

class AdminLogin extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };
  state = {
    userIdentity: "",
    password: ""
  };

  updateUserIdentity = e => {
    this.setState({ userIdentity: e.target.value });
  };
  updatePassword = e => {
    this.setState({ password: e.target.value });
  };

  onSubmit = () => {
    const { userIdentity, password } = this.state;
    console.log(userIdentity + password);
  };

  render() {
    const { classes } = this.props;
    const { userIdentity, password } = this.state;
    return (
      <main className={classes.loginContainer}>
        <Paper className={classes.loginPaper}>
          <Avatar
            alt="Silavin"
            src={SilavinPhoto}
            className={classes.profilePhoto}
          />

          <form className={classes.form}>
            <Input
              id="user-identity"
              label="username or email"
              className={classes.textField}
              placeholder="Username or Email"
              value={userIdentity}
              onChange={this.updateUserIdentity}
              margin="dense"
            />

            <Input
              id="password-input"
              label="Password"
              className={classes.textField}
              type="password"
              placeholder="Password"
              value={password}
              onChange={this.updatePassword}
              margin="dense"
            />

            <Button
              variant="contained"
              onClick={this.onSubmit}
              className={classes.loginButton}
            >
              Login
            </Button>
          </form>
        </Paper>

        <div className={classes.background} />
      </main>
    );
  }
}

export default withStyles(styles)(AdminLogin);
