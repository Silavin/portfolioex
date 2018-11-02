import React from "react";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";

import PhoneIphone from "@material-ui/icons/PhoneIphone";
import TabletAndroid from "@material-ui/icons/TabletAndroid";
import DesktopWindows from "@material-ui/icons/DesktopWindows";
import { withStyles } from "@material-ui/core";
import { styles } from "./styles";

const DeviceIcons = ({ classes, setSizeForExternalWindow }) => {
  const setPhone = () => {
    const deviceSize = {
      width: 375,
      height: 667,
      left: 0,
      top: 0
    };
    setSizeForExternalWindow(deviceSize);
  };
  const setTablet = () => {
    const deviceSize = {
      width: 1024,
      height: 1366,
      left: 0,
      top: 0
    };
    setSizeForExternalWindow(deviceSize);
  };
  const setDesktop = () => {
    const deviceSize = {
      width: 1920,
      height: 1080,
      left: 0,
      top: 0
    };
    setSizeForExternalWindow(deviceSize);
  };
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        className={classes.deviceViewButtons}
        onClick={setPhone}
      >
        <PhoneIphone className={classes.deviceIcons} />
      </Button>
      <Button
        variant="contained"
        color="primary"
        className={classes.deviceViewButtons}
        onClick={setTablet}
      >
        <TabletAndroid className={classes.deviceIcons} />
      </Button>
      <Button
        variant="contained"
        color="primary"
        className={classes.deviceViewButtons}
        onClick={setDesktop}
      >
        <DesktopWindows className={classes.deviceIcons} />
      </Button>
    </div>
  );
};

export default withStyles(styles)(DeviceIcons);

DeviceIcons.propTypes = {
  classes: PropTypes.object.isRequired,
  setSizeForExternalWindow: PropTypes.func.isRequired
};
