import React, { Component } from "react";

import Dashboard from './todos/Dashboard';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loaded: false,
            placeholder: "Loading"
        };
    }

    render() {
        return (
            <div className="App">
                <Dashboard />
            </div>
        );
    }
}

export default App;