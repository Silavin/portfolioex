import React, { Component } from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import { styles } from "./styles";

import PostTitle from "./component/post-title/PostTitle";
import Trumbowyg from "./component/trumbowyg/Trumbowyg";
import ExternalWindow from "./component/external-window/ExternalWindow";
import { CONSTANTS } from "./utils/Constants";

import WindowViewButton from "./component/window-view-button/WindowViewButton";

import Paper from "@material-ui/core/Paper";

class PostingPage extends Component {
  static propType = {
    classes: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      titleValue: "",
      urlValue: "",
      isUrlValid: true,
      openExternalWindow: false,
      previewSize: {
        width: 120,
        height: 120,
        left: 120,
        top: 0
      },
      htmlValue: "<p>Were you too excited to see me?</p>"
    };
    window.onbeforeunload = () => {
      this.toggleCloseExternalWindow();
    };
  }

  urlChecker = string => {
    const url = CONSTANTS.WEBSITEURLPOST + string;
    const urlTester = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/g;
    return urlTester.test(url);
  };

  alertInvalidUrl = () => {
    this.setState({ isUrlValid: false });
  };

  titleChange = e => {
    const { titleValue } = this.state;
    const newUrlValue = e.target.value.toLowerCase().replace(/ /g, "-");

    this.setState(
      {
        titleValue: titleValue,
        urlValue: newUrlValue,
        isUrlValid: true
      },
      () => {
        if (this.urlChecker(newUrlValue) === false) {
          this.alertInvalidUrl();
        }
      }
    );
  };

  urlChange = e => {
    const newUrlValue = e.target.value;
    if (this.urlChecker(newUrlValue)) {
      this.setState({ urlValue: newUrlValue, isUrlValid: true });
    } else {
      this.alertInvalidUrl();
    }
  };

  updateHtmlFile = trumbowyg => {
    this.setState({ htmlValue: trumbowyg });
  };

  toggleOpenExternalWindow = () => {
    this.setState({ openExternalWindow: true });
  };
  toggleCloseExternalWindow = () => {
    this.setState({ openExternalWindow: false });
  };

  setSizeForPreviwWindow = ({ width, height, left, top }) => {
    this.setState({
      previewSize: {
        width: width,
        height: height,
        left: left,
        top: top
      }
    });
  };

  setHtmlInWindow = () => {
    const { htmlValue } = this.state;
    return {
      __html: htmlValue
    };
  };

  render() {
    const { classes } = this.props;
    const { titleValue, urlValue, openExternalWindow, isUrlValid } = this.state;
    return (
      <main className={classes.mainBody}>
        <header className={classes.postingPageHeader}>
          <PostTitle
            urlChange={this.urlChange}
            titleChange={this.titleChange}
            titleValue={titleValue}
            urlValue={urlValue}
            isUrlValid={isUrlValid}
          />
          <WindowViewButton
            openExternalWindow={openExternalWindow}
            toggleCloseExternalWindow={this.toggleCloseExternalWindow}
            toggleOpenExternalWindow={this.toggleOpenExternalWindow}
          />
        </header>

        <Paper>
          <Trumbowyg updateHtmlFile={this.updateHtmlFile} />
        </Paper>

        {openExternalWindow && (
          <ExternalWindow
            toggleCloseExternalWindow={this.toggleCloseExternalWindow}
          >
            <main dangerouslySetInnerHTML={this.setHtmlInWindow()} />
          </ExternalWindow>
        )}
      </main>
    );
  }
}

export default withStyles(styles)(PostingPage);
