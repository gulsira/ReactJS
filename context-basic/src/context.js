import React, { Component } from 'react'

const UserContext=React.createContext();
// provider and consumer
const reducer=(state,action)=>{
    switch(action.type)
    {
        case "DELETE_USER":
            return{
                ...state, // it holds older values
                users:state.users.filter(user=>action.payload !==user.id)
            
            }
        default :
        return state

    }
}
export class UserProvider extends Component {
    state={
        users:[{
          id:1,
          name:"Gül Şira Avcı",
          salary:"6000",
          department:"IT"
        },
        {
          id:2,
          name:"Sinan Kaplan",
          salary:"7000",
          department:"IT"
        }
      ],
      dispatch:action=>
      {
            this.setState(state=>reducer(state,action))
      }
    }
    render() {
        return (
            <UserContext.Provider value={this.state}>
                {this.props.children}
            </UserContext.Provider>
         
        )
    }
}

const UserConsumer=UserContext.Consumer;
export default UserConsumer;