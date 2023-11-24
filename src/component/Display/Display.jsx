import React, { Component } from "react";
import './Display.css';

class Display extends Component {
    render() {
        return(
            <div className="display-container">
                <div className="card-container">
                    <h2>{this.props.moteType}</h2>
                    <p>{this.props.value}</p>
                </div>
            </div>
        );
    }
}

export default Display;