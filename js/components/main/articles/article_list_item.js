import React from 'react';

export default class ArticleListItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let component_classes = ['col-xs-6', 'col-sm-6', 'col-md-4', 'active'];
    if(!this.props.active) {
      component_classes.push("to-non-active");
      setTimeout(() => {component_classes.push("non-active")},100);
    }
    return(
      <div class={component_classes.join(" ")}>
        <div class="article-thumb">
          <figure>
            <img src={this.props.item.thumb} />
            <span> 
                {this.props.item.title}
            </span>
          </figure>
        </div>
      </div>
    );
  }
}