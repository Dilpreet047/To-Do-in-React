// eslint-disable-next-line
export function TaskReducer(toDoState, action) {
    switch (action.type) {
        case 'addTask' : {
          const copyAvailableIds = toDoState.availableIds;
          const id = copyAvailableIds.pop();
          return {
            tasks: [...toDoState.tasks, {id: id, name: toDoState.inputValue, complated: false, priority: 'high'}],
            availableIds: copyAvailableIds,
            inputValue: '',
            activeCount: toDoState.activeCount + 1,
          }
        }
    
        case 'deleteTask' : {
          return {
            ...toDoState,
            tasks: toDoState.tasks.filter(toDo => toDo.id !== action.id),
            availableIds: [...toDoState.availableIds],
            activeCount: toDoState.activeCount - 1
          }
        }

        case 'completeTask': {
            return {
                ...toDoState,
                tasks: toDoState.tasks.map(task => { 
                    if(task.id === action.id) {
                        return {...task, completed: true}
                    } else {
                        return task
                    }
                })
            }
        }

        case 'completeAllTask': {
            return {
                ...toDoState,
                tasks: toDoState.tasks.map(task => {return {...task, completed: true}})
            }
        }

        case 'deleteAllCompletedTask': {
            const completedTasks = toDoState.tasks.filter(task => task.completed)
            return {
                ...toDoState,
                tasks: toDoState.tasks.filter(task => !task.completed),
                availableIds: [...toDoState.availableIds],
                activeCount: toDoState.activeCount - completedTasks.length

            }
        }
    
        case 'changeOfInputValue': {
          return {
            ...toDoState,
            inputValue: action.inputValue
          }
        }

        case 'priorityChange': {
          return {
            ...toDoState,
            tasks: toDoState.tasks.map(task => { 
                if(task.id === action.id) {
                    return {...task, priority: action.priority}
                } else {
                    return task
                }
            })
        }
        } 
    
        default: {
          throw Error('Unknown action +', action.type);
        }
      }
}

// eslint-disable-next-line
export function FilterReducer(filterState, action) {
  switch (action.type) {
    case 'apply' :{
      let temp = {...filterState};
      temp[action.priority] = {
        priorityName: filterState[action.priority].priorityName,
        applied: true
      };
      return temp
    }
    case 'remove' :{
      let temp = {...filterState};
      temp[action.priority] = {
        priorityName: filterState[action.priority].priorityName,
        applied: false
      };
      return temp
    }
  }
}

export function UserInfoReducer(_, action) {
  let user =  {...action.value}
  return user
}
