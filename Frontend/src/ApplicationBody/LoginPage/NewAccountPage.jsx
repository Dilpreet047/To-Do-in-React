import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import DatePicker from 'react-datepicker';

export default function CreateNewAccount() {
    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        dob: null,
        profession: ''
    };

    const validationSchema = Yup.object({
        firstName: Yup.string().required('First Name is required'),
        lastName: Yup.string().required('Last Name is required'),
        email: Yup.string().email('Invalid email format').required('Email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required'),
        dob: Yup.date().nullable().required('Date of Birth is required'),
        profession: Yup.string().required('Profession is required')
    });

    const onSubmit = (values) => {
        console.log('Form data', values);
    };

    return (
        <>
            <h2 className="text-2xl font-bold mb-4">Create New Account</h2>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {({ isSubmitting, setFieldValue }) => (
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
                            <label htmlFor="dob" className="text-lg font-semibold mb-2">Date of Birth</label>
                            <DatePicker
                            id="dob"
                            name="dob"
                            className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            selected={null}
                            onChange={(date) => setFieldValue('dob', date)}
                            placeholderText="Select your date of birth"
                            dateFormat="dd/MM/yyyy"
                            required
                            />
                            <ErrorMessage name="dob" component="div" className="text-red-500 text-sm mt-1" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-lg font-semibold mb-2">Occupation</label>
                            <div className="flex space-x-4">
                            <label>
                                <Field className="mr-2" type="radio" name="profession" value="Student" required />
                                Student
                            </label>
                            <label>
                                <Field className="mr-2" type="radio" name="profession" value="Professional" required />
                                Professional
                            </label>
                            <label>
                                <Field className="mr-2" type="radio" name="profession" value="Home Maker" required />
                                Home Maker
                            </label>
                            </div>
                            <ErrorMessage name="profession" component="div" className="text-red-500 text-sm mt-1" />
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