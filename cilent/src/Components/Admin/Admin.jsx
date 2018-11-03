import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Route, Switch, Redirect } from "react-router-dom";
import axios from "axios";

// import Badge from "@material-ui/core/Badge";
// import Avatar from "@material-ui/core/Avatar";
// import ExpansionPanel from "@material-ui/core/ExpansionPanel";
// import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
// import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
// import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";
// import Typography from "@material-ui/core/Typography";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import Icon from "@material-ui/core/Icon";
// import AddIcon from "@material-ui/icons/Add";
// import Edit from "@material-ui/icons/Edit";
// import Delete from "@material-ui/icons/Delete";
// import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
// import SilavinPhoto from "../../Photos/GeneralUse/SilavinEX.png";

import AdmingLogin from "../AdminLogin";
import AdminDashboard from "../AdminDashboard";
import AdminNavBar from "../AdminNavBar";
import AdminEditor from "../AdminEditor";
import AdminArticleList from "../AdminArticleList";

import { styles } from "./styles";
import AdminLogin from "../AdminLogin";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.samplePortfolioArticle = {
      date: "20 December 2016",
      title: "My First Website Ever",
      briefDescription:
        "My first step ever taken is this proud website of mine.",
      previewPhoto: "123",
      fullArticle: "asd",
      techTags: "sample",
      articleUrl: "http://www.testing.com",
      taskingUrl: "http://www.divinedaolibrary.com"
    };
    this.state = {
      loggedIn: false,
      userIdentity: "",
      password: ""
    };
  }

  toggleLogin = () => {
    const { loggedIn } = this.state;
    this.setState({ loggedIn: !loggedIn });
  };

  //For Login
  jwtCheck = () => {
    axios
      .get("/api/user/jwt-check")
      .then(() => {
        this.toggleLogin();
      })
      .catch(() => {
        "No cookies found for login";
      });
  };
  componentDidMount() {
    this.jwtCheck();
  }
  updateUserIdentity = e => {
    this.setState({ userIdentity: e.target.value });
  };
  updatePassword = e => {
    this.setState({ password: e.target.value });
  };
  onKeyPressLogin = keypressed => {
    console.log(keypressed);
    if (keypressed.charCode === 13) {
      this.onSubmitLogin();
    }
  };
  onSubmitLogin = async () => {
    const { userIdentity, password } = this.state;
    const response = await axios.post("/api/user/login", {
      username: userIdentity,
      email: userIdentity,
      password
    });

    if (response.status === 200 && response.data.email === userIdentity) {
      this.toggleLogin();
    }
  };

  // For Logout

  onLogout = () => {
    axios.post("/api/user/logout").then(response => {
      const done = "done";
      if (response.status === 200 && response.data.status === done) {
        this.toggleLogin();
      }
    });
  };

  // For Render
  renderAdmin = () => {
    const { loggedIn, userIdentity, password } = this.state;
    return loggedIn ? (
      <Redirect to="/Admin/Dashboard" />
    ) : (
      <AdminLogin
        updateUserIdentity={this.updateUserIdentity}
        updatePassword={this.updatePassword}
        onSubmitLogin={this.onSubmitLogin}
        onKeyPressLogin={this.onKeyPressLogin}
        userIdentity={userIdentity}
        password={password}
      />
    );
  };
  noMatch = () => <Redirect to="/Admin" />;

  render() {
    const { classes, match } = this.props;
    const { loggedIn } = this.state;
    return (
      <main>
        {loggedIn && <AdminNavBar onLogout={this.onLogout} />}
        <Switch>
          <Route exact path={match.url + "/"} render={this.renderAdmin} />
          {loggedIn === false && <Route render={this.noMatch} />}
          <Route
            exact
            path={match.url + "/Dashboard"}
            component={AdminDashboard}
          />
          <Route exact path={match.url + "/Post/:id"} component={AdminEditor} />
          <Route exact path={match.url + "/Edit/:id"} component={AdminEditor} />
        </Switch>
      </main>
    );
  }
}

export default withStyles(styles)(Admin);
