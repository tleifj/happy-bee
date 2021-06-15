import React from "react";

class Message extends React.Component {
  render() {
    const { messageType, messageActive } = this.props;
    console.log(messageType);
    return (
      <div
        className={
          "message " +
          (messageActive ? "message--active" : "") +
          " " +
          (messageType === "Score!" || messageType === "Longest Word!"
            ? "message--score"
            : "")
        }
      >
        {messageType}
      </div>
    );
  }
}

export default Message;
