import React from 'react';

export default class TimeStamp extends React.Component {
    constructor(props) {
        super(props);
    }

    // only re-render on props.time changes
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.time != nextProps.time;
    }

    componentWillUpdate(nextProps, nextState){
        console.log('update timestamp...');
    }

    render(){
        return <span>{this.props.time}</span>;
    }
}