import React, { Component } from 'react'
import PropTypes from "prop-types"
import UserConsumer from "../context"
class User extends Component {
    state={
        isVisible:false
    }
    // constructor(props){
    //     super(props)
    //     this.state={
    //         isVisible:false
    //     }
    // constructor(props){
    //     super(props)
    //     this.onClickEvent=this.onClickEvent.bind(this);
    // }
    // methods must bind in render function with this but if function is array function then binding is automatic
    onClickEvent=(number,e)=>{
        this.setState({
            isVisible : !this.state.isVisible
        })

    }
    onDeleteUser=(dispatch,e)=>{
        const{id}=this.props;
        dispatch({type:"DELETE_USER",payload:id})
       
    }
    

    render() {
        
        //Destructing : with this.props easily use variables
        const{name,department,salary}=this.props;
        const{isVisible}=this.state;
        return (<UserConsumer>{
            value=>{
                const {dispatch}=value;
                return (
                    <div className="col-md-8 mb-4">
                        <div className="card">
                            <div className="card-header d-flex justify-content-between">
                                <h4 className="d-inline" onClick={this.onClickEvent}>{name}</h4>
                                <i onClick={this.onDeleteUser.bind(this,dispatch)} className="fas fa-trash-alt" style={{cursor:"pointer" }}></i>
        
                            </div>
                            {
                                isVisible ? <div className="card-body">
                                <p className="card-text">Salary: {salary}</p>
                                <p className="card-text">Department: {department}</p>
                                
                            </div> : null
                            }
                            
                        </div>
                
                    </div>
                )
            }
        }
        </UserConsumer>
        )

    }
}
User.defaultProps={
    name:"Bilgi yok",
    salary:"Bilgi yok",
    department:"Bilgi yok"
}
User.propTypes={
    name:PropTypes.string.isRequired,
    salary:PropTypes.string.isRequired,
    department:PropTypes.string.isRequired

}

export default  User