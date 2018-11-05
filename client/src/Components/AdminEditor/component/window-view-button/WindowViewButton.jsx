import React from "react";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core";
import RemoveRedEye from "@material-ui/icons/RemoveRedEye";
import { styles } from "./styles";

const WindowViewButton = ({
  classes,
  openExternalWindow,
  toggleCloseExternalWindow,
  toggleOpenExternalWindow
}) => (
  <Button
    variant={openExternalWindow ? "outlined" : "contained"}
    onClick={
      openExternalWindow ? toggleCloseExternalWindow : toggleOpenExternalWindow
    }
    className={classes.windowViewButtons}
    color="primary"
    size="small"
  >
    <RemoveRedEye className={classes.eyeIcon} />
    Preview
  </Button>
);

export default withStyles(styles)(WindowViewButton);

WindowViewButton.propTypes = {
  classes: PropTypes.object.isRequired,
  openExternalWindow: PropTypes.bool.isRequired,
  toggleCloseExternalWindow: PropTypes.func.isRequired,
  toggleOpenExternalWindow: PropTypes.func.isRequired
};
