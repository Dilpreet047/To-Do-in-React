import { useContext } from "react";
import { priorityFilters } from "../../ApplicationContext";

function TaskArea({tasks, activeCount, handleCompleteEvent, handleDeleteEvent, hanldlePriorityChangeEvent}) {

  const priorityFilterContext = useContext(priorityFilters);

  return (
    <div>
      <h1>{activeCount}</h1>
      <ul>
        {tasks.filter(task => priorityFilterContext[task.priority].applied).map((task) => 
          <li key={task.id}>
            {task.name}
            {task.completed ? 'Yes' : 'No'}
            <select value={task.priority} onChange={(e) => hanldlePriorityChangeEvent(e.target.value, task.id)}>
              {
                Object.keys(priorityFilterContext).map((priority) => {
                  return (
                    <option key={priority} value={priority}>
                      {priorityFilterContext[priority].priorityName}
                    </option>
                  )
                })
              }
            </select>
            <button onClick={() => {handleCompleteEvent(task.id)}}>Complete</button>
            <button onClick={() => {handleDeleteEvent(task.id)}}>Delete</button>
          </li>
        )}
      </ul>

    </div>
  );
}


export default TaskArea;
