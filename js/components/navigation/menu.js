import React from 'react';

import Navigation from "./navigation";
import MainMenu from "./main_menu";

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false,
    }
  }
  clickToOpen(){
    this.setState({
      opened: (this.state.opened ? false : true),
    });
  }
  render() {
    return (
      <div>
        <Navigation toggleOpenClick={()=>this.clickToOpen()} opened={this.state.opened} />
        <MainMenu opened={this.state.opened} />
      </div>
    )
  }
}






