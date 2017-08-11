import React from 'react';

import MenuItem from "./menu_item";

export default class MainMenu extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var pages= ["home", "oferta", "artykuły i wywiady", "o mnie", "kontakt"];
    const items = pages.map((item , i) => {
      return(
        <MenuItem name={item} active={false} key={i}  />
      );
    });
    var classMenu = (this.props.opened ? "main-menu opened" : "main-menu");
    return (
      <div class={classMenu}>
        <div class="to-left">
          <span></span>
        </div>
        <div class="to-right">
          <ul>
              {items}
          </ul>
        </div>
      </div>
    );
  }
  
}