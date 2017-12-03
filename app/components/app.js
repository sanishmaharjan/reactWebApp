import React from 'react';
import {Switch, Route} from 'react-router-dom';
import PropTypes from 'prop-types';

import Home from './home';
import StateApi from '../utilities/stateApi';

class App extends React.Component {
    // Define child contextType
    static childContextTypes = {
        store: PropTypes.object
    };

    // Define context for child component
    getChildContext() {
        return {
            store: new StateApi(this)
        };
    }

    constructor(props) {
        super(props);
        this.state = {
            timeStamp: new Date()
        };
    }

    componentWillMount(){
        // Is invoked immediately before mounting occurs. It is called before render().
    }

    componentDidMount() {
        // Is invoked immediately after a component is mounted.
    }

    componentWillReceiveProps(nextProps){
        // Is invoked before a mounted component receives new props.
        // You may compare this.props and nextProps and perform some logic.
    }

    shouldComponentUpdate(nextProps, nextState){
        // Is invoked before rendering when new props or state are being received. Defaults to true.
        // This method is not called for the initial render or when forceUpdate() is used.
        // Returning false prevent components from re-rendering.
        return true;
    }

    componentWillUpdate(nextProps, nextState){
        // Is invoked immediately before rendering when new props or state are being received.
    }

    componentDidUpdate(prevProps, prevState){
        // Is invoked immediately after updating occurs.
    }

    componentWillUnmount(){
        //  Is invoked immediately before a component is unmounted and destroyed.
    }

    componentDidCatch(error, info){
        // Catch JavaScript errors anywhere in their child component tree, log those errors,
        // And you can display a fallback UI instead of the component tree that crashed.
    }

    render() {
        return <div>
            <Switch>
                <Route exact path='/reactWebApp/app/' component={Home}/>
            </Switch>
        </div>;
    }
}

// Set default props for the class
App.defaultProps = {
    color: 'blue'
};

export default App;