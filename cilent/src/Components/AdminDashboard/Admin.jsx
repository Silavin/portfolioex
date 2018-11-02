import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";

import AdminNavBar from "../AdminNavBar";
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
        <section className={classes.articlesHeading}>
          <Badge
            className={classes.margin}
            badgeContent={
              <IconButton className={classes.addButton}>
                <AddIcon className={classes.addIcon} />
              </IconButton>
            }
            color="secondary"
          >
            <Typography variant="h3">Articles</Typography>
          </Badge>
        </section>

        <section className={classes.expansionPanel}>
          <AdminArticleList />
        </section>

        <div className={classes.background} />
      </main>
    );
  }
}

export default withStyles(styles)(Admin);
