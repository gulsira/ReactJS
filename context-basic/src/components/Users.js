import React, { Component } from 'react'
import User from "./user"
import UserConsumer from "../context";

class Users extends Component {
    render() {
        return(
            // to use values you have to use user consumer
            <UserConsumer>
                {
                    value=>{
                        const {users}=value;
                        return (
                            <div>
                                {
                                    users.map(user=>{
                                        return (
                                            <User
                                            key={user.id}
                                            id={user.id}
                                            name={user.name}
                                            salary={user.salary}
                                            department={user.department}
                                            />
                                        )
                                    })
                                }
                            </div>
                        )
                        
                    }
                }
            </UserConsumer>
        )
    
       
        

         
    }
}

export default Users;