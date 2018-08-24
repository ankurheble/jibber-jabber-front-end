import React from "react";

export default function CreateMessage(props) {
  return (
    <React.Fragment>
      <input
        type="text"
        placeholder="Write Something here..."
        className="create-message"
      />
      <div className="fa fa-play post-message-button" />
    </React.Fragment>
  );
}
