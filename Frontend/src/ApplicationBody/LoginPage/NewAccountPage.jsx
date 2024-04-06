import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';

export default function CreateNewAccount() {

    const navigate = useNavigate();
    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        gender: ''
    };

    const validationSchema = Yup.object({
        firstName: Yup.string().required('First Name is required'),
        lastName: Yup.string().required('Last Name is required'),
        email: Yup.string().email('Invalid email format').required('Email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required'),
        gender: Yup.string().required('Gender is required')
    });

    const onSubmit = (values) => {
        fetch('/register', {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            
            body: JSON.stringify({
                FirstName: values.firstName,
                LastName: values.lastName,
                Email: values.email,
                Password: values.password,
                Gender: values.gender
            })
          })
          .then((e) => {
            if(e.status == 200 || e.status == 201) {
                navigate('/home')
            }
            console.log('Request made successfully');
          })
          .catch((e) => {
            console.log('Error')
          })
        console.log('Form data', values);
    };

    return (
        <>
            <h2 className="text-2xl font-bold mb-4">Create New Account</h2>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {({ isSubmitting }) => (
                    <Form className="flex flex-col space-y-4">
                        <div className="flex space-x-4">
                            <div className="flex flex-col w-1/2">
                                <label htmlFor="firstName" className="text-lg font-semibold mb-2">First Name</label>
                                <Field 
                                    type="text" 
                                    id="firstName" 
                                    name="firstName" 
                                    className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
                                    placeholder="Enter your first name"
                                    required
                                />
                                <ErrorMessage name="firstName" component="div" className="text-red-500 text-sm mt-1" />
                            </div>
                            <div className="flex flex-col w-1/2">
                                <label htmlFor="lastName" className="text-lg font-semibold mb-2">Last Name</label>
                                <Field 
                                    type="text" 
                                    id="lastName" 
                                    name="lastName" 
                                    className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
                                    placeholder="Enter your last name"
                                    required
                                />
                                <ErrorMessage name="lastName" component="div" className="text-red-500 text-sm mt-1" />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="email" className="text-lg font-semibold mb-2">Email</label>
                            <Field 
                            type="email" 
                            id="email" 
                            name="email" 
                            className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
                            placeholder="Enter your email"
                            required
                            />
                            <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="password" className="text-lg font-semibold mb-2">Password</label>
                            <Field 
                            type="password" 
                            id="password" 
                            name="password" 
                            className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
                            placeholder="Enter your password"
                            required
                            />
                            <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="confirmPassword" className="text-lg font-semibold mb-2">Confirm Password</label>
                            <Field 
                            type="password" 
                            id="confirmPassword" 
                            name="confirmPassword" 
                            className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
                            placeholder="Confirm your password"
                            required
                            />
                            <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-sm mt-1" />
                        </div>
                        
                        <div className="flex flex-col">
                            <label className="text-lg font-semibold mb-2">Gender</label>
                            <div className="flex space-x-4">
                                <label>
                                    <Field className="mr-2" type="radio" name="gender" value="Male" required />
                                    Male
                                </label>
                                <label>
                                    <Field className="mr-2" type="radio" name="gender" value="Female" required />
                                    Female
                                </label>
                            </div>
                            <ErrorMessage name="gender" component="div" className="text-red-500 text-sm mt-1" />
                        </div>
                        <button 
                            type="submit" 
                            className="bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition-colors duration-300"
                            disabled={isSubmitting}
                        >
                            Register
                        </button>
                    </Form>
                )}
            </Formik>
        </>
    )
}