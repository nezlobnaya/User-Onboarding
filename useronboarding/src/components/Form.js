import React from 'react';
import '../App.css';
import axios from 'axios';
import {Form, Field, withFormik } from 'formik';
import * as yup from 'yup';

const UserForm = ({ errors, touched, values }) => {
    // const [users, setUsers] = useState([]);
    // console.log('this is touched', touched);
    // useEffect(() => {
    //     if (window.status) {
    //         setUsers([...users, window.status]);
    //     }
    // }, [users]);

    return ( 
        <div className='user-form'>
         <Form>
            <h1>Fill out the User Form!</h1>
            <Field name='name' type='text' placeholder='name' />

            {touched.name && errors.name && (
                <p className='error'>{errors.name}</p>
            )}

            <Field name='email' type='email' placeholder='email' />

            {touched.email && errors.email && (
                <p className='error'>{errors.email}</p>
            )}

            <Field name='password' type='password' placeholder='password' />

            {touched.password && errors.password && (
                <p className='error'>{errors.password}</p>
            )}
            <textarea>Terms of Service</textarea>
            <label className='checkbox-container'>
                I accept & agree to the Terms of Service
            <Field 
                type='checkbox'
                name='checkbox'
                checked ={values.checkbox}
            />

            {touched.checkbox && errors.checkbox && (
                <p className='error'>{errors.checkbox}</p>
            )}

            <span className='checkmark' />
            </label>
            <button type='submit'>Submit</button>
         </Form>

         {/* {users.map(user => (
             <ul key={user.id}>
                 <li>Name: {user.name}</li>
                 <li>Email: {user.email}</li>
                 <li>Password: {user.password}</li>
             </ul>
         ))} */}
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
    },
    validationSchema: yup.object().shape({
        name: yup.string().required('Fill out all fields!'),
        email: yup.string().email('Email not valid').required(),
        password: yup.string().min(6, 'password must be at least 6 characters long').required(),
        checkbox: yup.string().required()
    }),

    handleSubmit(values, { setStatus }) {
        axios.post('https://reqres.in/api/users/', values)
        .then(res => {
            console.log(res)
            setStatus(res.data);
        })
        .catch(err => console.log(err.response));
    }

 })(UserForm)
 
export default FormikUserForm;
