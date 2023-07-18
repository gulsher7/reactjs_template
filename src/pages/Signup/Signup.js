//import liraries
import React from 'react';
import actions from '../../redux/actions';
import './Signupcss.css';

// create a component
const Signup = () => {

    const onClick = () =>{
        actions.login(true)
    }


    return (
        <div className='container'>
            <h2>I'm Signup</h2>

            <button type='button' onClick={onClick} >Go to login page with Redux</button>
        </div>
    );
};


export default Signup;


