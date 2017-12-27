import React from 'react';

import Header from 'components/header';
import ArticleList from 'components/article/articleList';
import ArticleSearch from 'components/article/articleSearch';
import ArticleUtility from 'utilities/articleUtility';

export default class Article extends React.Component {
    constructor(props) {
        super(props);
        this.articleUtility = new ArticleUtility();
        this.state = {
            articles : this.articleUtility.getArticles(),
            authors : this.articleUtility.getAuthors(),
            searchKey : ''
        };

        this.filterArticles = this.state.articles;
    }

    articleFunction = {
        searchArticle : (searchKey) => {
            this.filterArticles = this.articleUtility.searchArticle(searchKey);
            this.setState({
                searchKey : searchKey
            });
        }
    };

    render() {
        return <div>
            <Header path={this.props.match.path}/>
            <ArticleSearch articleFunction={this.articleFunction}/>
            <ArticleList articles={this.filterArticles}/>
        </div>;
    }
}