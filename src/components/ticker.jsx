import React from 'react';

export default class Ticker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {'counter': 1};
    }
    render() {
        return (
            <h1>{this.state.counter}</h1>
        );
    }
    componentDidMount() {
        this.interval = setInterval(
            () => this.setState(prevState => ({counter: prevState.counter + 1})),
            1000
        );
    }
    componentDidUnmount() {
        clearInterval(this.interval)
    }
}
