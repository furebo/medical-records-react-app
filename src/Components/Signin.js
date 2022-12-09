import React from 'react';
import './signin.css';
import {Typography,Link} from '@material-ui/core';

export default function SignInForm() {

  return (
    <div className="registerForm">
        <h2>Sign In Form</h2>
        <form className='formgroup' action='UserLogin' >
            <div className='InputsContainer'>
                <i class="fa fa-envelope icon"></i>
                <input placeholder="Email" name="email"/>
            </div>
            <div className='InputsContainer'>
                <i class="fa fa-lock icon"></i>
                <input type="password" placeholder="Password" name="password"/>
            </div>
            <div >
                <input type="submit" value="Sign In" className='button'/>
            </div>
            <Typography className='typograph'>Don't you have an account ?
                    <Link href='/'>
                       Signup here.
                    </Link>
            </Typography>
        </form>
    </div>

  );
}