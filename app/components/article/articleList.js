import React from 'react';
import PropTypes from 'prop-types';

import ArticleBlock from 'components/article/articleBlock';

export default class ArticleList extends React.Component {
    render() {
        return <div>
            {Object.keys(this.props.articles).map((key) => <ArticleBlock key={key} article={this.props.articles[key]} />)}
        </div>;
    }
}

ArticleList.propTypes = {
    articles: PropTypes.object.isRequired
};