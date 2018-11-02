import { PureComponent } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";

export default class ExternalWindow extends PureComponent {
  static propTypes = {
    children: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.containerEx = document.createElement("div");
    this.externalWindow = null;
  }

  componentDidMount() {
    const { toggleCloseExternalWindow } = this.props;
    this.externalWindow = window.open(
      ``,
      "",
      "width=600,height=400,left=200,top=200"
    );

    this.externalWindow.document.body.appendChild(this.containerEx);
    this.externalWindow.onbeforeunload = () => {
      toggleCloseExternalWindow();
    };
  }

  componentWillUnmount() {
    this.externalWindow.close();
  }

  render() {
    const { children } = this.props;
    return ReactDOM.createPortal(children, this.containerEx);
  }
}
