import React, { Component } from "react";
import { Menu, List, Header, Icon } from "semantic-ui-react";

export default class MyBuilds extends Component {
  render() {
    return (
      <div>
        <Header as="h2" icon>
          <Icon name="react" />
          My other Builds...
        </Header>
        <Menu vertical inverted fluid>
          <Menu.Item href="//vijay-node-chat-app.herokuapp.com" target="_blank">
            <List.Icon name="rocketchat" size="large" verticalAlign="middle" />
            <Menu.Header>Chat App</Menu.Header>
          </Menu.Item>
          <Menu.Item href="//my-burger-react.netlify.app" target="_blank">
            <List.Icon name="bars" size="large" verticalAlign="middle" />
            <Menu.Header>Burger App</Menu.Header>
          </Menu.Item>
          <Menu.Item href="//pika-adventure-vijay.netlify.app" target="_blank">
            <List.Icon name="gamepad" size="large" verticalAlign="middle" />
            <Menu.Header>Pika Adventure</Menu.Header>
          </Menu.Item>
          <Menu.Item href="//guess-my-number-vijay.netlify.app" target="_blank">
            <List.Icon name="gitter" size="large" verticalAlign="middle" />
            <Menu.Header>Guess My Number</Menu.Header>
          </Menu.Item>
          <Menu.Item href="//rolldice-game-vijay.netlify.app" target="_blank">
            <List.Icon
              name="american sign language interpreting"
              size="large"
              verticalAlign="middle"
            />
            <Menu.Header>Roll Dice</Menu.Header>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}
