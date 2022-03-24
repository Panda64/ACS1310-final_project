// Adapted from https://codesandbox.io/s/react-download-screenshot-qmk4g?from-embed=&file=/src/ScreenCapture.js

import React, { Component } from "react";
import html2canvas from "html2canvas";
import "./ScreenShot.css"

export default class ScreenCapture extends Component {
  ref = React.createRef();

  handleClickTakeScreenShot = () => {

    let width = window.screen.availWidth
    let height = window.screen.availHeight

    if (window.devicePixelRatio > 1) {
        width = width * 2
        height = height * 2
    }
      
    const { cropPositionTop, cropPositionLeft, cropWidth, cropHeigth } = {
      cropPositionTop: 0,
      cropPositionLeft: 0,
      cropWidth: width,
      cropHeigth: height
    };

    html2canvas(this.ref.current).then(canvas => {
      let croppedCanvas = document.createElement("canvas");
      let croppedCanvasContext = croppedCanvas.getContext("2d");

      croppedCanvas.width = cropWidth;
      croppedCanvas.height = cropHeigth;

      croppedCanvasContext.drawImage(canvas, cropPositionLeft, cropPositionTop);

      const a = document.createElement("a");
      a.href = croppedCanvas.toDataURL();
      a.download = "receipt.png";
      a.click();
    });
  };

  render() {
    const { children } = this.props;

    return (
      <div>
        <div
          id="#screenshot"
          // style={{ position: "relative", left: "-1000px" }}
          ref={this.ref}
        >
        {children}
        <button className="Save" onClick={this.handleClickTakeScreenShot}>Save as PNG</button>    
        </div>
      </div>
    );
  }
}
