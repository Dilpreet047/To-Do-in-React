import { Field, Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {

    const initialValues = {email: '', password: ''};
    const navigate = useNavigate()

    function handleFormSubmit(values) {
        navigate('/home')
    }

    const validationSchema = yup.object({
        email: yup.string().required('Email is required').email('Enter valid email id'),
        password: yup.string().required('Password is required')
    });


    return (
        <>
            <h2 className="text-2xl font-bold mb-4">Login</h2>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleFormSubmit}>
            {({ isSubmitting }) => (
                <Form className="flex flex-col space-y-4">
                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-lg font-semibold mb-2">Email</label>
                        <Field 
                        type="text" 
                        id="email" 
                        name="email" 
                        className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        placeholder="Enter your username"
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
                    <button type="submit" className="bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition-colors duration-300" disabled={isSubmitting}>Login</button>
                </Form>
            )}
        </Formik>

        {/* Create New Account Option */}
        <div className="mt-4 text-center">
            <p className="text-lg">Don't have an account?</p>
            <Link to="create-account" className="text-blue-500 hover:underline">Create New Account</Link>
        </div>
        </>
        
    )
}