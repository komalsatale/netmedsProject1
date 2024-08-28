import React, { Component } from 'react'

export default class LifeCycle extends Component {
    constructor(){
        super();
        this.state={
            count:0
        }
        console.log('constructor called....');
    }
    //mouting

    // componentDidMount(){
    //     console.log('componentDidMount:component has been mounted,and method call after first render')
    // }

    //updating 

    // componentDidUpdate(prevProps, prevState){
    //     console.log('prevState', prevState, this.state.count);
    //         console.log('componentDidUpdate: method is called component is updated on the DOM' );
    // }

    //unmounting
    componentWillUnmount(){
        console.log("componentWillUnmountL: component will remove from the DOM")
    }

  render() {
    console.log('render called...')
    return (
      <div>
        <h4>learn about class Component Life Cycle method</h4>
        <h2>counter:{this.state.count}</h2>
        <button onClick={()=>this.setState({count:this.state.count+1})}>increase/update</button>
         <button onClick={()=>this.setState({count:this.state.count})}>remove</button>
      </div>
    )
  }
}
