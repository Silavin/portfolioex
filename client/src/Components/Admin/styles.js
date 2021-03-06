import BackgroundPhoto from "../../Photos/GeneralUse/bg.png";

export const styles = theme => ({
  adminNavBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "56px",
    backgroundColor: "black"
  },
  adminPanel: {
    color: "#ecf0f1",
    display: "block",
    paddingLeft: "24px"
  },
  avatar: {
    marginRight: "24px",
    height: "48px",
    width: "48px"
  },
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
    top: "-8px",
    bottom: "-8px",
    left: "-8px",
    right: "-8px",
    zIndex: "-2",
    backgroundImage: `url(${BackgroundPhoto})`
  }
});
