import React from 'react';

import Header from 'components/header';
import CardSearchForm from 'components/gitCard/cardSearchForm';
import ListCards from 'components/gitCard/listCards';

export default class GitCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards : [{
                'login': 'sanishmaharjan',
                'avatar_url': 'https://avatars3.githubusercontent.com/u/3852786?v=4',
                'html_url': 'https://github.com/sanishmaharjan',
                'type': 'User',
                'name': 'Sanish Maharjan'
            }]
        };

        this.addCard = this.addCard.bind(this);
    }

    addCard(data) {
        this.setState((preState) => ({
            cards: preState.cards.concat(data)
        }));
    }

    render() {
        return  <div>
            <Header path={this.props.match.path}/>
            <CardSearchForm addCard={this.addCard}/>
            <ListCards cards={this.state.cards}/>
        </div>;
    }
}