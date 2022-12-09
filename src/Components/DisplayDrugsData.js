import React from 'react';
import classes from './DisplayDrugsData.module.css';
class DrugsDetails extends React.Component {
    //constructor(props){
       // super(props);
        //this.state = {list:[]};
        //this.callAPI = this.callAPI.bind(this);
   // }
    state = {list:[]};
    /*
    callAPI(){
        //Fetch the drugs Data details
        fetch('http://localhost:5000/drugs',{
            method: 'GET',
            headers: {
            Accept: 'application/json',
            }
        }).then((response)=>{
            //if(response.ok){
                response.json().then((data)=>{
                    //console.log(data)
                   return this.setState({list:data})
                })
           // }
    }) 
}
*/
componentDidMount (){
     
    fetch('http://localhost:5000/pharmacists',{
        method: 'GET',
        headers: {
        Accept: 'application/json',
        }
    }).then((response)=>
        //if(response.ok){
            response.json()).then((data)=>{
                //console.log(data)
                this.setState({list:data})
            })
       // }
       
      this.setState({list:[]});
    }

    render(){

        let tb_data = this.state.list.map((item)=>{
            return(
                <tr className={classes.table_row} key={item.id}>
                    <td className={classes.table_cell}>{item.year2000}</td>
                    <td className={classes.table_cell}>{item.year2001}</td>
                    <td className={classes.table_cell}>{item.year2002}</td>
                </tr>
            )
        })
        
        return(
            <div className={classes.container}>
                <h1 style={{textAlign:'center'}}>Most bough drugs from 2000 to 2002</h1>
                <hr></hr>
                <table className={classes.table}>
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

export default DrugsDetails;