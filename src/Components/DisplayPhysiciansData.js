import React from 'react';
import classes from './DisplayPhysiciansData.module.css';

class PhysiciansDetails extends React.Component {
    
    constructor(props){
        super(props);
        this.state={list:[]};
        this.callAPI = this.callAPI.bind(this);
    }
    callAPI(){
        //Fetch the drugs Data details
        fetch('http://localhost:5000/physicians',{
            method: 'GET',
            headers: {
            Accept: 'application/json',
            }
        }).then((response)=>{
            if(response.ok){
                response.json().then((data)=>{
                    console.log(data)
                    this.setState({list:data})
                })
            }
    })
}

componentDidMount(){
    this.callAPI();
}

    render(){
       
        return(
            <div className={classes.container}>
                <h1 style={{textAlign:'center'}}>Physicians Missions from 2000 to 2002</h1>
                <hr></hr>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                           <th>2000</th> 
                           <th>2001</th>
                           <th>2002</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                             this.state.list.map((item)=>{
                                return(
                                    <tr key={item.id}>
                                        <td className={classes.table_cell}>{item.year2000}</td>
                                        <td className={classes.table_cell}>{item.year2001}</td>
                                        <td className={classes.table_cell}>{item.year2002}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default PhysiciansDetails;