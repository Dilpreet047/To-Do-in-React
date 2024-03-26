import { default as AppLogo } from '../../Icons/AppLogo'

export default function Login() {
    return (
        <>
            <div className="flex justify-center items-center mb-8">
                <AppLogo customStyle={"clock-hand"}/>
                <h1 className="text-5xl font-bold text-blue-600">Your To-Do</h1>
            </div>
            <div className="border rounded-lg shadow-md p-8 bg-white w-96">
                    <h2 className="text-2xl font-bold mb-4">Login</h2>
                    <form className="flex flex-col space-y-4">
                    <div className="flex flex-col">
                        <label htmlFor="username" className="text-lg font-semibold mb-2">Username</label>
                            <input 
                            type="text" 
                            id="username" 
                            name="username" 
                            className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
                            placeholder="Enter your username"
                            required
                            />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="password" className="text-lg font-semibold mb-2">Password</label>
                        <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        placeholder="Enter your password"
                        required
                        />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition-colors duration-300">Login</button>
                </form>
        
                {/* Create New Account Option */}
                <div className="mt-4 text-center">
                    <p className="text-lg">Don't have an account?</p>
                    <a href="#" className="text-blue-500 hover:underline">Create New Account</a>
                </div>
            </div>
        </>
        


    )
}