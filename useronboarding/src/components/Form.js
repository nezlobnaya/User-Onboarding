import React, { useState } from 'react';
import '../App.css';
import axios from 'axios';
import {Form, Field, withFormik } from 'formik';




const UserForm = ({ errors, touched, values }) => {
    return ( 
        <div className='user-form'>
         <Form>
            <h1>Fill out the User Form!</h1>
            <Field name='name' type='text' placeholder='name'></Field>
            <Field name='email' type='email' placeholder='email'></Field>
            <Field name='password' type='password' placeholder='password'></Field>
            <textarea>Terms of Service</textarea>
            <label className='checkbox-container'>
                I accept & agree to the Terms of Service
            <Field 
            type='checkbox'
            name='checkbox'
            checked ={values.checkbox} ></Field>
            </label>
            
             <button>Submit</button>
         </Form>
        </div>
     );
}
 const FormikUserForm = withFormik({

    mapPropsToValues({ name, email, password, textarea, checkbox }) {
        return {
            name: name || '',
            email: email || '',
            password: password || '',
            checkbox: checkbox || false
        };
    }

 })(UserForm)
 
export default FormikUserForm;
