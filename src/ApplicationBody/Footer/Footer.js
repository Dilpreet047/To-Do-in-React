import Priority from "./StatusFilter.js/Priority"

export  default function Footer({ handleCompleteAllEvent, handleDeleteAllEvent }) {


    return (
        <div className="flex justify-center">
            <div>
                <Priority />
                <div className="flex gap-4">
                    <button onClick={handleCompleteAllEvent} className="bg-blue-500 text-white p-3 rounded mr-2 flex-grow whitespace-nowrap">Mark all as complete</button>
                    <button onClick={handleDeleteAllEvent} className="bg-red-500 text-white p-3 rounded flex-grow whitespace-nowrap">Delete all completed tasks</button>
                </div>
            </div>
            
        </div>
    )

}