import React from 'react';
import PropTypes from 'prop-types';

import Card from 'components/gitCard/card';
export default class ListCards extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return <div>
            {this.props.cards.map((card, i) => <Card key={i} {...card} />)}
        </div>;
    }
}

ListCards.prototypes = {
    cards: PropTypes.array.isRequired
};