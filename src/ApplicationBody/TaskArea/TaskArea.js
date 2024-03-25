import { Fragment, useContext } from "react";
import { priorityFilters } from "../../ApplicationContext";

import {default as GreenTick} from '../../Icons/GreenTick.svg';
import {default as RedCross} from '../../Icons/RedCross.svg';


function TaskList({tasks, handleCompleteEvent, handleDeleteEvent, hanldlePriorityChangeEvent}) {

  const priorityFilterContext = useContext(priorityFilters);
  return (
    <div className="max-h-72 overflow-y-auto">
      <ul>
        {tasks.filter(task => priorityFilterContext[task.priority].applied).map((task) => 
          <li className="flex justify-around items-center mt-6" key={task.id}>
            <div className="text-lg font-bold w-60">{task.name}</div>
            <div className="h-6 w-6">{task.completed ? <img src={GreenTick} /> : <img src={RedCross}/>}</div>
            <div>
              <select className="w-48 px-1 py-3 border border-blue-500 rounded" value={task.priority} onChange={(e) => hanldlePriorityChangeEvent(e.target.value, task.id)}>
                {
                  Object.keys(priorityFilterContext).map((priority) => {
                    return (
                      <option className="w-48" key={priority} value={priority}>
                        {priorityFilterContext[priority].priorityName}
                      </option>
                    )
                  })
                }
              </select>
            </div>
            <div className="flex gap-4">
              <button onClick={() => {handleCompleteEvent(task.id)}} className="bg-blue-500 text-white py-2 px-2 border border-blue-500 rounded">Complete</button>
              <button onClick={() => {handleDeleteEvent(task.id)}} className="bg-transparent hover:bg-red-500 text-red-700  hover:text-white py-2 px-2 border border-red-500 hover:border-transparent rounded">Delete</button>
            </div>
            </li>
        )}
      </ul>
    </div>
  )
}

function TaskArea({tasks, activeCount, handleCompleteEvent, handleDeleteEvent, hanldlePriorityChangeEvent}) {

  

  return (
    <div>
      <p className="text-blue-600 text-3xl font-bold mb-8 mt-4 flex justify-center">Your today's to-do: {activeCount}</p>
      {activeCount > 0 ? <TaskList tasks={tasks} handleCompleteEvent={handleCompleteEvent} handleDeleteEvent={handleDeleteEvent} hanldlePriorityChangeEvent={hanldlePriorityChangeEvent} /> : ''}
      
    </div>
  );
}


export default TaskArea;
