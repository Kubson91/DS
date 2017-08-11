import React from 'react';
import _ from 'lodash';
import ArticleCarousel from "./article_carousel";


export default class ArticlesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current_page: 1,
      where_to: "right"
    }
  }
  componentDidMount() {
    this.interval = setInterval(this.incrementPage.bind(this), 5000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  showNext(e) {
    e.preventDefault();
    if(this.state.current_page + 3 <= this.props.articles.length) {
      this.setState({
        current_page: this.state.current_page + 1
      });
    }
  }
  showPrev(e) {
    e.preventDefault();
    if(this.state.current_page > 1) {
      this.setState({
        current_page: this.state.current_page - 1
      });
    }
  }
  incrementPage() {
    if(this.state.where_to === "right") {
      if(this.state.current_page + 3 <= this.props.articles.length) {
        this.setState({
          current_page: this.state.current_page + 1
        })
      } else {
        this.setState({
          where_to: "left"
        })
      }
    } else {
      if(this.state.current_page > 1) {
        this.setState({
          current_page: this.state.current_page - 1
        });
      } else {
        this.setState({
          where_to: "right"
        })
      }
    }
  }
  render() {
    var current_items = this.props.articles
    return(
      <div class="container-fluid articles">
        <div class="row">
          <div class="col-xs-2 col-sm-2">
            {this.state.current_page == 1 ? "" : <a class="article-nav" onClick={(e)=>this.showPrev(e)}><img src="/images/prev.png" /></a>}
          </div>
          <div class="col-xs-8 col-sm-8">
            <ArticleCarousel items={current_items} current_page={this.state.current_page} />
          </div>
          <div class="col-xs-2 col-sm-2">
            {this.state.current_page == current_items.length - 2 ? "" : <a class="article-nav" onClick={(e)=>this.showNext(e)}><img src="/images/next.png" /></a> }
          </div>
        </div>
      </div>
    );
  }
}
