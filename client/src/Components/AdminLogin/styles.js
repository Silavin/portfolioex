import BackgroundPhoto from "../../Photos/GeneralUse/beautiful-forest-art.webp";

export const styles = () => ({
  loginContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    position: "relative",
    overflow: "hidden"
  },
  loginPaper: {
    boxSizing: "border-box",
    position: "relative",
    width: "100%",
    maxWidth: "500px",
    margin: "auto"
  },
  profilePhoto: {
    height: "150px",
    width: "150px",
    position: "absolute",
    top: "-75px",
    left: "0",
    right: "0",
    marginLeft: "auto",
    marginRight: "auto"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    padding: "20% 10% 0% 10%",
    zIndex: "1"
  },
  textField: {
    marginTop: "24px",
    width: "100%"
  },
  loginButton: {
    width: "18px",
    margin: "48px auto 24px auto",
    color: "white",
    backgroundColor: "purple",
    "&:hover": {
      color: "white",
      backgroundColor: "#8e44ad"
    }
  },
  background: {
    position: "absolute",
    top: "0px",
    bottom: "0px",
    left: "0px",
    right: "-8px",
    zIndex: "-2",
    backgroundColor: "black",
    backgroundImage: `url(${BackgroundPhoto})`,
    filter: "blur(4px)",
    boxShadow: "inset 0px 0px 20px 20px"
  }
});
