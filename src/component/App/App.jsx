import React, { Component } from "react";
import './App.css';
import Display from "../Display/Display";

class App extends Component {

    render() {
        return(
            <div className="app-container">
                <div className="head-container">
                    <h2>IOT PBL Dashboard</h2>
                </div>

                <div className="dashboard-container">
                    <Display moteType="sensor" value="33" />
                    <Display moteType="sensor" value="33" />
                    <Display moteType="sensor" value="33" />
                    <Display moteType="sensor" value="33" />
                </div>
            </div>
        );
    }
}

export default App;