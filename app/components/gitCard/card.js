import React from 'react';
import PropTypes from 'prop-types';

export default class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const style = {
            cardStyle: {padding: 10},
            imgBlockStyle: {float: 'left'},
            imgStyle: {height: 75, padding: 4, border: '1px solid gray'},
            infoBlockStyle: {display: 'inline-block', margin: 10, padding: 0},
            pStyle: {margin: 0}
        };

        return <div style={style.cardStyle}>
            <div style={style.imgBlockStyle}>
                <img src={this.props.avatar_url} style={style.imgStyle}/>
            </div>
            <div style={style.infoBlockStyle}>
                <p style={style.pStyle}>
                    <label>Name:</label> <span>{this.props.name}</span>
                </p>
                <p style={style.pStyle}>Gitub Id: <a href={this.props.html_url}>{this.props.login}</a></p>
                <p style={style.pStyle}>Type: <span>{this.props.type}</span></p>
            </div>
        </div>;
    }
}

Card.prototypes = {
    avatar_url: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string
};
