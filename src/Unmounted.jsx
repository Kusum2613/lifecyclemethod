import React, { Component } from 'react';

export default class Unmounted extends Component {

    componentDidMount(){
        this.intervalId=setInterval(() => {
            console.log("interval tick")
            
        }, 1000);
    }
    componentWillUnmount(){
        clearInterval(this.intervalId)
        console.log("interval tick removed")
    }
  render() {
    return <div>
        <h2> children component will Unmounted</h2></div>;
  }
}


