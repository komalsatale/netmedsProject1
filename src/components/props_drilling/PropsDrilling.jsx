import React, { Component } from 'react';

class PropsDrilling extends Component {
   constructor(props){
    super(props);
    this.state = {
        laptopCompany:"Dell"
    };
   }

    render() {
        return (
            <div>
                  <h3>We learn props drilling concept in react js</h3>
                  <h4>I'm parent component {this.state.laptopCompany}</h4>
            <Child1 laptopCompany={this.state.laptopCompany}/>
            </div>
        );
    }
}



export class Child1 extends Component {
    render() {
        return (
            <div>
                <h3>Child 1 : {this.props.laptopCompany}</h3>
                <Child2 laptopCompany={this.props.laptopCompany}/>
            </div>
        );
    }
}
export class Child2 extends Component {
    render() {
        return (
            <div>
                <h3>Child 2  : {this.props.laptopCompany}</h3>
            <Child3 laptopCompany={this.props.laptopCompany}/>
            </div>
        );
    }
}
export class Child3 extends Component {
    render() {
        return (
            <div>
                <h3>Child 3  : {this.props.laptopCompany}</h3>
            </div>
        );
    }
}


export default PropsDrilling;