import _ from 'lodash';
import {data} from 'data/data-set.json';
export default class ArticleUtility {
    constructor() {
        this.data = data;
    }

    getArticles = () => {
        return _.reduce(this.data.articles, (articles, article) => {
            articles[article.id] = article;
            return articles;
        }, {});
    };

    getAuthors = () => {
        return _.reduce(this.data.authors, (authors, author) => {
            authors[author.id] = author;
            return authors;
        }, {});
    };

    getAuthorById = (authorId) => {
        const authors = this.getAuthors();
        return authors[authorId];
    };

    searchArticle = (searchKey) => {
        return _.pickBy(this.data.articles, (article, key) => {
            if (searchKey === '')
                return true;

            return article.title.toLowerCase().includes(searchKey.toLowerCase());
        });
    };
}