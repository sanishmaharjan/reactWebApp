import React from 'react';
import axios from 'axios';

export default class CardSearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.searchHandler = this.searchHandler.bind(this);
    }

    searchHandler(event) {
        event.preventDefault();
        const props = this.props;
        axios.get('https://api.github.com/users/' + this.searchInput.value)
            .then(function (response) {
                props.addCard(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        var style = {marginTop: 50, marginLeft: 10};
        return <form onSubmit={this.searchHandler} style={style}>
            <input type='text' placeholder='github userId' ref={(input) => this.searchInput = input}></input>
            <input type='submit' value='Search'></input>
        </form>;
    }
}