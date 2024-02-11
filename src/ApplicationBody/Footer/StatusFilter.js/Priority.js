import { Fragment, useContext } from "react";
import { priorityFilters, priorityFiltersDispatcher } from "../../../ApplicationContext";

export default function Priority() {
    
    const priorityFilterContext = useContext(priorityFilters);
    const priorityFiltersDispatch = useContext(priorityFiltersDispatcher);


    function handleAppliedPriorityFilter(priority) {

        if(priorityFilterContext[priority].applied) {
            priorityFiltersDispatch({
                type: 'remove',
                priority: priority
            })

        } else {
            priorityFiltersDispatch({
                type: 'apply',
                priority: priority
            })
        }
        
    }




    return (
        <>
            {Object.keys(priorityFilterContext).map(priority => {
                return (
                    <Fragment>
                        <label>{priorityFilterContext[priority].priorityName}</label>
                        <input value={priority} type="checkbox" onChange={() => handleAppliedPriorityFilter(priority)} checked={priorityFilterContext[priority].applied}></input>
                    </Fragment>
                )
            })}  
        </>
    )
}