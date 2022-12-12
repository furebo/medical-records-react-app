import React from 'react';
import './Signup.css';
import { FormGroup, Radio, RadioGroup, FormControlLabel, Checkbox } from '@material-ui/core';
 

export default function SignupForm() {

  return (
    <div className="registerForm">
        <h2>Form to use for registration</h2>
        <form className='formgroup' action='http://localhost:8080/MedicalApplication/SignupServlet2' method="POST">
            <div className='InputsContainer'>
                <i className="fa fa-envelope icon"></i>
                <input placeholder="Email" name="email"/>
            </div>
            <div className='InputsContainer'>
                <i className="fa fa-lock icon"></i>
                <input type="password" placeholder="Password" name="password"/>
            </div>
            <div className='InputsContainer'>
                <i className="fa fa-lock icon"></i>
                <input type="password" placeholder="Re-type Password"/>
            </div>
            <div className='InputsContainer'>
                <div className='InputsContaineruser'>
                    <i className="fa fa-user icon"></i>
                    <input placeholder="First Name" name="firstname"/>
                </div>
            <div className='InputsContaineruser'>
                <i className="fa fa-user icon"></i>
                <input style={{width:'120px'}}placeholder="Last Name" name="lastname"/>
            </div>
            </div>
            <div className='usergender'>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
             >
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                 <FormControlLabel value="male" control={<Radio />} label="Male" />
             </RadioGroup>

            </div>
            <div className='InputsContainer'>
            <select name="country" id="country" >
                   <option value="" selected>select your country</option>
                   <option value="Rwanda">Rwanda</option>
                   <option value="Burundi">Burundi</option>
                   <option value="Uganda">Uganda</option>
                   <option value="Tanzania">Tanzania</option>
                   <option value="Kenya">Kenya</option>
                   <option value="Zambia">Zambia</option>
                   <option value="Malawi">Malawi</option>
            </select>
            </div>
            
             <div className='InputTermAndConditions'>
             <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked />} label="I agree to the terms and conditions" />
                <FormControlLabel control={<Checkbox />} label="I want to receive newsletters" />
             </FormGroup>
             </div>
             <div className='InputTermAndConditions'>

             </div>

            <div >
                <input type="submit" value="Register" className='button'/>
            </div>
        </form>
    </div>

  );
}


