import React from 'react';
import PropTypes from 'prop-types';

export default class ArticleSearch extends React.Component {
    constructor(props) {
        super(props);
        this.searchHandler = this.searchHandler.bind(this);
    }

    searchHandler(event) {
        event.preventDefault();
        this.props.articleFunction.searchArticle(this.searchInput.value);
    }

    render() {
        const style = {
            form : {
                margin : 20
            }
        };
        return <form style={style.form} onSubmit={this.searchHandler}>
            <input type="text" placeholder="Search Article" ref={(input) => this.searchInput = input}/>
            <input type="submit" value="Search"/>
        </form>;
    }
}

ArticleSearch.propTypes = {
    articleFunction: PropTypes.object.isRequired
};