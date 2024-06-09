import React, { useContext } from "react";
import { userInfo } from "../../ApplicationContext";

export const UserDetailsHeader = () => {

    const user = useContext(userInfo);

    return (
            <div className="flex flex-col md:flex-row items-center md:justify-between bg-white p-4 rounded-lg shadow-md space-y-4 md:space-y-0 md:space-x-4 border border-gray-200">
      {/* User's avatar and details */}
      <div className="flex items-center space-x-3">
        {/* User's avatar */}
        <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold text-white">
          {user.FirstName[0]}{user.LastName[0]}
        </div>
        {/* User's information */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800">
            {user.FirstName} {user.LastName}
          </h2>
          <p className="text-sm text-gray-600">{user.Email}</p>
        </div>
      </div>
      
      {/* User actions */}
      <div className="flex space-x-2">
        <button className="flex items-center space-x-1 text-red-600 hover:text-red-700 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
          <span className="text-sm">Logout</span>
        </button>
      </div>
    </div>
    )
}