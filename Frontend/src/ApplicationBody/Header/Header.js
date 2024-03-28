export default function Header({inputValue, handleInputChangeEvent, handleSubmitEvent}) {

    return (
        <div>
            <form>
                <div className="flex justify-center mt-8">
                    <div className="border rounded-lg shadow-md p-4">
                        <div className="flex">
                            <input type='text' value={inputValue} onChange={(e) => handleInputChangeEvent(e.target.value)} className="border p-2 mr-2 w-96" placeholder="Enter task name"></input>
                            <button onClick={(e) => handleSubmitEvent(e)} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Add task</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
    
}