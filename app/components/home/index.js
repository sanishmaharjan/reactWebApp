import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header';
import TimeStamp from '../timeStamp';

class Home extends React.Component {
    constructor(props, context){
        super(props, context);
    }

    getCurrentTime = () =>{
        const data = this.context.store.getState();
        return data.timeStamp.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
    };

    componentDidMount() {
        const store = this.context.store;
        this.timeChanger = setInterval(() =>{
            store.setState({
                timeStamp: new Date()
            });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timeChanger);
    }

    render(){
        return <div>
            <Header path={this.props.match.path}/>
            <p>Hi all, welcome to github.</p>
            <p>Current Time: <TimeStamp time={this.getCurrentTime()}/> </p>
        </div>;
    }
}

// Define component context
Home.contextTypes = {
    store: PropTypes.object
};

export default Home;