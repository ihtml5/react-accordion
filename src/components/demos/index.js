import React, { Component } from 'react';

class P extends Component {
    render() {
        const { children } = this.props;
        console.log(':::children', children);
        return (<div>{children}</div>)
    }
}

class CP extends Component {
    render () {
        return <div>CP</div>
    }
}

export {
    P,
    CP
}