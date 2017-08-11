import React from 'react';


export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var classBurger = (this.props.opened ? "burger-menu opened" : "burger-menu");
    var classLogo = (this.props.opened ? "logo opened" : "logo");
    var classNavigation = (this.props.opened ? "navigation opened" : "navigation");
    return(
      <div class={classNavigation}>
          <p class={classLogo}>DAWID STRASZAK</p>
          <a class={classBurger} onClick={this.props.toggleOpenClick}>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
          </a>
      </div>
    );
  } 
}