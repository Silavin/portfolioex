import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Icon from "@material-ui/core/Icon";
import Edit from "@material-ui/icons/Edit";
import Delete from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";

import { styles } from "./styles";

class AdminArticleList extends PureComponent {
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
      <div>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h5">
              {this.samplePortfolioArticle.title}
            </Typography>
          </ExpansionPanelSummary>

          <ExpansionPanelDetails className={classes.detailContainer}>
            <Typography className={classes.details} variant="caption">
              {this.samplePortfolioArticle.date}
            </Typography>
            <Typography className={classes.details} variant="subtitle1">
              {this.samplePortfolioArticle.briefDescription}
            </Typography>
          </ExpansionPanelDetails>

          <ExpansionPanelActions>
            <hr />
            <Button className={classes.button}>
              <Icon>
                <Delete />
              </Icon>
              <Typography className={classes.buttonLabel}>Delete</Typography>
            </Button>

            <Button className={classes.button}>
              <Icon>
                <Edit />
              </Icon>
              <Typography className={classes.buttonLabel}>Edit</Typography>
            </Button>
          </ExpansionPanelActions>
        </ExpansionPanel>
      </div>
    );
  }
}

export default withStyles(styles)(AdminArticleList);
