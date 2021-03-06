export default class StateApi {
    constructor(app) {
        this.app = app;
        this.contextData = {};
    }

    getContextData = () =>{
        return this.contextData;
    };

    getContexDataByKey = (key) => {
      return this.contextData[key];
    };

    setState = (stateChange) => {
        this.app.setState({
            ...stateChange
        });
    };

    getState = () => {
        return this.app.state;
    }
}