import React ,{Component}from "react";
import Unmount from "./Unmount";

export default class Counter extends Component{
         constructor(){
            super();
            this.state={
                count :0
            }
            console.log('constructor')
         }
         increase(){
            this.setState({count : this.state.count+1})
            console.log('increase count',this.state.count)
         }
         decrease(){
            this.setState({count : this.state.count - 1})
            console.log('decrease',this.state.count)
         }

         componentDidMount(){
             console.log('componennt did mount')
         }
         shouldComponentUpdate(nextState,prevProps){
               console.log('shouldComponnet');
               if(prevProps !== nextState)
                return true;
         }
         componentDidUpdate(prevProps,prevState){
            console.log('componentupdate',prevState)
         }

         
         

         render(){
            console.log('render');

            return(
                <div>
                    <h1>counter</h1>
                    {this.state.show ?  <Unmount/> : <p>best luck</p> }
                    
                    <button onClick={this.handleClick}>click</button>

                    <button onClick={this.increase.bind(this)}>increase</button>
                   
                    <button onClick={this.decrease.bind(this)}>decrease</button>
                    <p>{this.state.count}</p>
                </div>
            )
         }
}