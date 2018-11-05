import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import { CONSTANTS } from "../../utils/Constants";

import TextField from "@material-ui/core/TextField";
import InputBase from "@material-ui/core/InputBase";
import InputAdornment from "@material-ui/core/InputAdornment";
import Tooltip from "@material-ui/core/Tooltip";
import Link from "@material-ui/icons/Link";
import Error from "@material-ui/icons/Error";

import { withStyles } from "@material-ui/core/styles";
import { styles } from "./styles";

class PostTitle extends PureComponent {
  static propTypes = {
    titleChange: PropTypes.func.isRequired,
    titleValue: PropTypes.string.isRequired,
    urlChange: PropTypes.func.isRequired,
    urlValue: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired,
    isUrlValid: PropTypes.bool.isRequired
  };

  render() {
    const {
      titleChange,
      titleValue,
      urlChange,
      urlValue,
      classes,
      isUrlValid
    } = this.props;
    return (
      <section className={classes.titleContainer}>
        <TextField
          id="postInputTitle"
          label="Title"
          className={classes.title}
          variant="outlined"
          defaultValue={titleValue}
          onChange={titleChange}
          margin="dense"
        />
        <div className={classes.urlContainer}>
          <Link className={classes.urlChainIcon} />
          <InputBase
            id="postInputUrl"
            className={classes.urlInput}
            value={urlValue}
            onChange={urlChange}
            multiline={true}
            fullWidth={true}
            rowsMax={1}
            startAdornment={
              <InputAdornment position="start" variant="standard">
                {CONSTANTS.WEBSITEURLPOST}
                {isUrlValid === false && (
                  <Tooltip title="Invalid Url">
                    <Error className={classes.errorIcon} />
                  </Tooltip>
                )}
              </InputAdornment>
            }
            margin="dense"
          />
        </div>
      </section>
    );
  }
}

export default withStyles(styles)(PostTitle);
