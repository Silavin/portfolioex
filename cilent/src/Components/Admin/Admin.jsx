import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import Avatar from "@material-ui/core/Avatar";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Icon from "@material-ui/core/Icon";
import AddIcon from "@material-ui/icons/Add";
import Edit from "@material-ui/icons/Edit";
import Delete from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import SilavinPhoto from "../../Photos/GeneralUse/SilavinEX.png";

import AdminNavBar from "../AdminNavBar";
import AdminEditor from "../AdminEditor";
import AdminArticleList from "../AdminArticleList";

import { styles } from "./styles";

class Admin extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }

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
  }

  edit = () => {
    console.log("edit");
  };

  render() {
    const { classes } = this.props;
    return (
      <main>
        <AdminNavBar />
        <section>
          <AdminEditor />
        </section>
      </main>
    );
  }
}

export default withStyles(styles)(Admin);
