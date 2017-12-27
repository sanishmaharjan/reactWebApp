import React from 'react';
import PropTypes from 'prop-types';

import ArticleUtility from 'utilities/articleUtility';

export default class ArticleBlock extends React.Component {
    constructor(props) {
        super(props);

        this.articleUtility = new ArticleUtility();
        this.initData = this.initData.bind(this);
        this.initData(props);
    }

    componentWillUpdate(nextProps, nextState) {
        if (nextProps != this.props) {
            this.initData(nextProps);
        }
    }

    initData(props) {
        this.article = props.article;
        this.author = this.articleUtility.getAuthorById(this.article.authorId);
        this.publishDate = new Date(this.article.date).toDateString();
    }

    render() {
        const style = {
            'wrapper': {
                paddingBottom: 10,
                borderBottom: 'solid',
                borderBottomColor: '#aaa',
                borderBottomWidth: 1,
                marginBottom: 10
            },
            'title': {
                fontweight: 'bold'
            },
            'date': {
                fontsize: '0.85em',
                color: '#888'
            },
            'body': {
                paddingLeft: 20
            },
            'author': {
                paddingTop: 10,
                paddingBottom: 10
            }
        };

        return <div style={style.wrapper}>
            <h3 style={style.header}>{this.article.title}</h3>
            <span style={style.date}>{this.publishDate}</span>
            <p style={style.body}>{this.article.body}</p>
            <p style={style.author}>
                <a href={this.author.website}>
                    {this.author.firstName} {this.author.lastName}
                </a>
            </p>
        </div>;
    }
}

ArticleBlock.propTypes = {
    article: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        authorId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired
    }).isRequired
};