import React from 'react';

export default class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {'isToggleOn': false}
        this.handleClick = this.handleClick.bind(this);
    }
    render() {
        return <button onClick={this.handleClick}>
            {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
    }
    handleClick() {
        this.setState(prevState => ({
            'isToggleOn': !prevState.isToggleOn
        }));
    }
}