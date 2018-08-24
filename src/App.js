import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./styles.css";
import ChatWindow from "./components/ChatWindow";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Jibber Jabber</h1>
        </header>
        <div className="main-window">
          <ChatWindow />
        </div>
      </div>
    );
  }
}

export default App;
