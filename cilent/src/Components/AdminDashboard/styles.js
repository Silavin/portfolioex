import BackgroundPhoto from "../../Photos/GeneralUse/bg.png";

export const styles = theme => ({
  articlesHeading: {
    margin: "4% 0px 4% 0px",
    textAlign: "center"
  },
  addButton: {
    color: "white"
  },
  addIcon: {
    backgroundColor: "#8e44ad",
    borderRadius: "50%"
  },
  expansionPanel: {
    [theme.breakpoints.up("md")]: {
      width: "1000px",
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  detailContainer: {
    display: "block"
  },
  details: {
    marginLeft: "12px",
    display: "block"
  },
  button: {
    padding: "12px 24px 12px 24px"
  },
  buttonLabel: {
    paddingLeft: "6px",
    fontSize: "16px",
    fontWeight: "700"
  },
  background: {
    position: "absolute",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
    zIndex: "-2",
    backgroundImage: `url(${BackgroundPhoto})`
  }
});
