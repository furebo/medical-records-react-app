//import { Avatar } from '@material-ui/core';
import React from 'react';
import classes from './DisplayUsers.module.css';
import AccountCircle from '@material-ui/icons/AccountCircle';
import EditIcon from '@material-ui/icons/Edit';

class UsersDetails extends React.Component {
    
    constructor(props){
        super(props);
        this.state={listOfUsers:[]};
        //this.callAPI = this.callAPI.bind(this);
    }
    /*
    callAPI(){
        //Fetch the drugs Data details
        fetch('http://localhost:8080',{
            method: 'GET',
            headers: {
            Accept: 'application/json',
            }
        }).then((response)=>{
            if(response.ok){
                response.json().then((data)=>{
                    console.log(data)
                    this.setState({listOfUsers:data}) 
                })
            }
    })
} 

componentDidMount(){
    this.callAPI();
}
*/
    render(){
       
        return(
            <div className={classes.container}>
                <h1 style={{textAlign:'center'}}>Medical Records Application Users</h1>
                <hr></hr>
                <div>
                    <div className={classes.user}>
                        <AccountCircle className={classes.AccountCircle}/>
                        <h2>Full Name</h2>
                        <h2>Role</h2>
                    </div>

                </div>
                <div className={classes.userEdition}><EditIcon className={classes.editIcon}/></div>
            </div>
        )
    }
}

export default UsersDetails;