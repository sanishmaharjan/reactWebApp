export default class StateApi {
    constructor(app) {
        this.app = app;
        this.contextData = {};
    }

    setState = (stateChange) => {
        this.app.setState({
            ...stateChange
        });
    };

    getState = () => {
        return this.app.state;
    }
}