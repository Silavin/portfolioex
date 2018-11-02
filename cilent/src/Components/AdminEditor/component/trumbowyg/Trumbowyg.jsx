import $ from "jquery";
import React, { Component } from "react";
import "trumbowyg";
import "trumbowyg/dist/ui/trumbowyg.min.css";
import svgIcons from "trumbowyg/dist/ui/icons.svg";
import "trumbowyg/dist/plugins/colors/ui/trumbowyg.colors.min.css";
import "trumbowyg/dist/plugins/colors/trumbowyg.colors.min.js";

export default class Trumbowyg extends Component {
  shouldComponentUpdate() {
    return false;
  }
  componentDidMount() {
    const updateHtml = this.props.updateHtmlFile;
    $("#trumbowygEditor")
      .trumbowyg({
        btns: [
          ["viewHTML"],
          ["formatting"],
          ["strong", "em", "del"],
          ["superscript", "subscript"],
          ["link"],
          ["insertImage"],
          ["justifyLeft", "justifyCenter", "justifyRight", "justifyFull"],
          ["unorderedList", "orderedList"],
          ["horizontalRule"],
          ["foreColor", "backColor"],
          ["removeformat"],
          ["fullscreen"]
        ],
        semantic: false,
        autogrow: false,
        imageWidthModalEdit: true,
        svgPath: svgIcons
      })
      .on("tbwinit", function() {
        this.focus();
        document.execCommand("formatBlock", false, "<p>");
      })
      .on("tbwchange", function() {
        if (this.innerHTML === "") {
          document.execCommand("formatBlock", false, "<p>");
        }
        updateHtml($("#trumbowygEditor").trumbowyg("html"));
      });
  }
  render() {
    return (
      <section
        style={{
          textAlign: "left",
          margin: "auto"
        }}
      >
        <div id="trumbowygEditor" />
      </section>
    );
  }
}
