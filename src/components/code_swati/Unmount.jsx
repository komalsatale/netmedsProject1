import { Component } from "react";


export default class Unmount extends Component{
    componentWillUnmount(){
        console.log('unmount')
    }
        render(){
            return(
                <div>Unmount</div>
            )
        }
}