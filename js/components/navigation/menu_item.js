import React from 'react';
import * as Scroll from 'react-scroll';


export default class MenuItem extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
        active: false,
      }
    }
  componentDidMount(){
    Scroll.scrollSpy.update();
  }
  removeActive() {
    var actives = document.getElementsByClassName("menu-item");
    for(let item = 0;item<actives.length;item++) {
      actives[item].classList.remove("active");
    }
  }
  scrollToAnchor(e) {
    e.preventDefault();
    this.removeActive();
    Scroll.animateScroll.scrollTo(document.getElementById(this.props.name.split(" ")[0]).offsetTop);
    this.setState({
      active: true,
    });
  }
  render() {
        var name = this.props.name;
        return (
            <li>
                <a href={"#" + name.split(" ")[0]} class={(this.state.active ? "menu-item active" : "menu-item")} onClick={(e)=>this.scrollToAnchor(e)}>
                    <firstletter>{name.substr(0, 1)}</firstletter>{name.substr(1, name.length)}
                </a>
            </li>
        );
    }
}