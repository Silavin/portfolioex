import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

import { styles } from "./styles";

import SilavinPhoto from "../../Photos/GeneralUse/SilavinEX.png";

class AdminLogin extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    window.onkeypress = this.onKeyPressLogin;
  }

  onKeyPressLogin = keypressed => {
    if (keypressed.key === "Enter") {
      const { onSubmitLogin } = this.props;
      onSubmitLogin();
    }
  };

  render() {
    const {
      classes,
      updateUserIdentity,
      updatePassword,
      onSubmitLogin,
      userIdentity,
      password
    } = this.props;
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
              onChange={updateUserIdentity}
              margin="dense"
            />

            <Input
              id="password-input"
              label="Password"
              className={classes.textField}
              type="password"
              placeholder="Password"
              value={password}
              onChange={updatePassword}
              margin="dense"
            />
            <Link to="/Admin">
              <Button
                variant="contained"
                onClick={onSubmitLogin}
                onKeyPress={e => {
                  console.log("Enter key pressed");
                  if (e.key === "Enter") {
                  }
                }}
                className={classes.loginButton}
              >
                Login
              </Button>
            </Link>
          </form>
        </Paper>

        <div className={classes.background} />
      </main>
    );
  }
}

export default withStyles(styles)(AdminLogin);
