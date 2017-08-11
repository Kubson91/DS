import React from 'react';
import ArticleListItem from './article_list_item';


export default class ArticleCarousel extends React.Component {
	constructor(props) {
		super(props);
	}
    
    componentWillMount() {
      this.state = {
        marginLeft: '-100%'
      } 
    }
  componentDidMount() {
      this.setState = {
        marginLeft: 'initial'  
      }
  }
	render() {
		let articles = this.props.items.map((item,i) => {
          let active = (item.id <= this.props.current_page + 2 && item.id >=this.props.current_page);
          return(
              <ArticleListItem item={item} key={i} active={active} />
          )
		})
    
        if (!articles) {
          return(
            <div>
              <h1> No Articles Here YET</h1>
            </div>
          );
        }
        return(
          <div class="article-carousel">
            { articles }
          </div>
        );
	}
}





