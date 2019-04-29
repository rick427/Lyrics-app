import React, { Component } from 'react';

const Context = React.createContext();

export class Provider extends Component {
  state = {
    track_list: [
        {
            track: {track_name: 'love me'}
        },
        {
            track:{track_name: 'lift me'}
        }
    ],
    heading: 'Top ten tracks'
  };

  componentDidMount(){
      
  }

  render() {
    return (
      <Context.Provider value={this.state}>
         {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;

