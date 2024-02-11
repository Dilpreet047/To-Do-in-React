import Priority from "./StatusFilter.js/Priority"

export  default function Footer({ handleCompleteAllEvent, handleDeleteAllEvent }) {


    return (
        <>
            <button onClick={handleCompleteAllEvent}>Mark all as complete</button>
            <button onClick={handleDeleteAllEvent}>Delete all completed tasks</button>
            <Priority />
        </>
    )

}