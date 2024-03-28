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
        <div className="flex mt-10">
            <span className="text-gray-600 text-1xl font-bold mr-4">Priority:</span>
                {Object.keys(priorityFilterContext).map(priority => {
                    return (
                        <div className="mb-5">
                            <label className="inline-flex items-center mr-4">
                                <input value={priority} type="checkbox" onChange={() => handleAppliedPriorityFilter(priority)} checked={priorityFilterContext[priority].applied} className="form-checkbox text-blue-500"/>
                                <span className="text-1xl font-bold ml-2">{priorityFilterContext[priority].priorityName}</span>
                            </label>
                        </div>
                    )
                })}
        </div>
    )
}