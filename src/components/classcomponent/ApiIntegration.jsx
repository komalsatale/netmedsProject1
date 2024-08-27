import React, { Component } from 'react'

export default class ApiIntegration extends Component {
    state = {
        users: [],
       
      }
    
      componentDidMount() {
        this.FetchData();
      }
    
      // fetch data method
    
      // FetchData() {
      //   fetch('http://dummyjson.com/users')
      //     .then(res => res.json())
      //     .then(data => {
            // console.log(data);
      //       const { users } = data;
      //       this.setState({ users })
      //     }
      //     );
      // }
    
    //async await method
    
    async FetchData() {
      const result= await fetch('http://dummyjson.com/usersgit')
      // console.log(result);
      if (result.status===200){
        const data=await result.json();
        const {users}=data;
        this.setState({users});
      }
    }
  render() {
    return (
      <div>
        <h3>API Intergration</h3>
        {this.state.users.map((item)=>(
           <span key={item.id}>
            <h3>user data {item.id}</h3>
           <p>name:{item.firstName} {item.lastName} {item.maidenName}  </p>
           <p>email:{item.email}</p>
           <p>age:{item.age}</p>
         </span>
        ))}
      </div>
    )
  }
}
