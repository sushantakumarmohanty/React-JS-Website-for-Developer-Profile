import React from 'react'
import { useFormik } from 'formik'
import Button from 'react-bootstrap/Button'
import './Style.css';

export default function RegisterForm() {

    // A custom validation function. This must return an object

    // which keys are symmetrical to our values/initialValues
   
    const validate = values => {
        const errors = {}

        if (!values.email) {
            errors.email = 'Required'
        } else if (values.email.length < 4) {
            errors.email = 'Must be 5 characters or more'
        }  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Please enter valid email address';
        }
        if (!values.password) {
            errors.password = 'Required'
        } else if (values.password.length < 8) {
            errors.password = 'Must be 8 characters or more'
        } else if (values.password === '12345678') {
            errors.password = 'Must not be 12345678 !!!'
        }

        if (!values.repassword) {
            errors.repassword = 'Required'
        } else if (values.repassword !== values.password) {
            errors.repassword = 'Second password doesn\'t match'
        }

        return errors
    }

    const formik = useFormik({

        initialValues: {
            email: '',
            password: '',
            repassword: ''
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2))
        }

    })
   

    return (<div  className='cl-bg-color mt-5 py-4'>
        <h3>Register </h3>



        <form onSubmit={formik.handleSubmit}>
            <div >
                <label htmlFor="email">Email Address</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    style={{marginLeft:'10px'}}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email} />
                {formik.touched.email && formik.errors.email ?
                 <div className='error redColor'>{formik.errors.email}
                 </div> : null}
            </div>
            <br />
            <label htmlFor="password">User Password </label>
            <input
                id="password"
                name="password"
                type="password"
                style={{marginLeft:'10px'}}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password} />
            {formik.touched.password && formik.errors.password ? 
            <div className='error redColor'>{formik.errors.password}
            </div> : null}
            <br />
            <br />
            <label htmlFor="repassword">Password again</label>
            <input
                id="repassword"
                name="repassword"
                type="password"
                style={{marginLeft:'10px'}}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.repassword} />
            {formik.touched.repassword && formik.errors.repassword ?
             <div className='error redColor'>{formik.errors.repassword}</div> : null}
            <br />
            <br />
            {/* <button color="success">Register</button> */}
            <Button type="submit" variant="secondary">REGISTER</Button>{' '}
            <a href="/LinkedIn" >
            <Button  color="primary">LinkedIn</Button>{' '}
             </a>
         
        </form>
    
    </div>)
}
