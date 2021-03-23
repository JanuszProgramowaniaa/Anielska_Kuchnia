import React, { Component } from 'react'
import './Baner.css';
export default class Baner extends Component {
    render() {
        return (
                <React.Fragment>
                    <h1 className="Header"> {this.props.title} </h1>
                </React.Fragment>
        )
    }
}
