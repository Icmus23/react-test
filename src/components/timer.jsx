import React from 'react';

export default class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()}
    }
    render() {
        return <div>{this.props.timerText} {this.state.date.toLocaleTimeString()}</div>;
    }
    componentDidMount() {
        this.interval = setInterval(() => this.setState({date: new Date()}), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
};
