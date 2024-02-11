export default function Header({inputValue, handleInputChangeEvent, handleSubmitEvent}) {

    return (
        <>
            <form>
                <input type='text' value={inputValue} onChange={(e) => handleInputChangeEvent(e.target.value)}></input>
                <button onClick={(e) => handleSubmitEvent(e)}>Add task</button>
            </form>
        </>
    )
    
}