import React from 'react';
import classes from './DisplayPatients.module.css'
class PatientsDetails extends React.Component {
    constructor(props){
        super(props);
        this.state = {list:[]};
        this.callAPI = this.callAPI.bind(this);
    }
    callAPI(){
        //Fetch the drugs Data details
        fetch('http://localhost:5000/patients',{
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
        let tb_data = this.state.list.map((item)=>{
            return(
                <tr key={item.id}>
                    <td className={classes.table_cell}>{item.year2000}</td>
                    <td className={classes.table_cell}>{item.year2001}</td>
                    <td className={classes.table_cell}>{item.year2002}</td>
                </tr>
            )
        })
        return(
            <div className={classes.container}>
                <h1 style={{textAlign:'center'}}>Patients illness from 2000 to 2002</h1>
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
                        {tb_data}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default PatientsDetails;