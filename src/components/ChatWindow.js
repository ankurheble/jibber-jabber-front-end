import React from "react";
import UserList from "./UserList";
import ChatBox from "./ChatBox";
import Axios from "axios";

export default class ChatWindow extends React.Component {
  state = {
    users: [],
    activeUser: {}
  };

  componentDidMount() {
    Axios.get("https://randomuser.me/api?results=10").then(response => {
      console.log(response.data.results);
      this.setState({
        users: response.data.results,
        activeUser: response.data.results[0]
      });
    });
  }

  render() {
    return (
      <React.Fragment>
        <UserList users={this.state.users} />
        <ChatBox activeUser={this.state.activeUser} />
      </React.Fragment>
    );
  }
}
