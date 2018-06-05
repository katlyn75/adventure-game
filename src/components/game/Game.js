import React, { Component } from 'react';
import Rooms, { start as currentRoom } from '../rooms/Rooms';
import Room from '../rooms/Room';

export default class Game extends Component {

  state = {
    player: {
      name: 'Player 1',
      inventory: []
    },
    Rooms,
    currentRoom: currentRoom
  };

  // handleMove = key => {

  // };

  render() {
    const { currentRoom } = this.state;

    return (
      <section>
        <Room room={ currentRoom } onMove={this.handleMove} />
      </section>
    );
  }
}