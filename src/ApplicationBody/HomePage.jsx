import  TaskArea  from "./TaskArea/TaskArea";

//eslint-disable-next-line
import { TaskReducer, FilterReducer} from "../TaskReducer";
import Footer from "./Footer/Footer";
import { useReducer } from "react";
import Header from "./Header/Header";
import { priorityFilters, priorityFiltersDispatcher } from "../ApplicationContext";
import AppLogo from "../Icons/AppLogo";

export default function HomePage() {
  const [toDoState, dispatch] = useReducer(TaskReducer, {tasks: [], availableIds: Array.from(Array(100).keys()), inputValue: '', activeCount: 0, priority: 'low'});
  const [priorityFilterState, priorityFiltersDispatch] = useReducer(FilterReducer, {high: {priorityName: 'High', applied: true}, medium: {priorityName: 'Medium', applied: true}, low: {priorityName: 'Low', applied: true}});

  const handleInputChange = (value) => {
    dispatch({
      type: 'changeOfInputValue',
      inputValue: value
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'addTask'
    });

  }

  const handleDelete = (id) => {
    dispatch({
      type: 'deleteTask',
      id: id
    });
  }

  const handleComplete = (id) => {
    dispatch({
      type: 'completeTask',
      id: id
    })
  }

  const handleCompleteAll = () => {
    dispatch({
      type: 'completeAllTask'
    })
  }

  const handleDeleteCompleted = () => {
    dispatch({
      type: 'deleteAllCompletedTask'
    })
  }

  const handlePriorityChange = (e, taskId) => {
    dispatch({
      type: 'priorityChange',
      id: taskId,
      priority: e
    })
  }


  return (
          <div>
            <Header inputValue={toDoState.inputValue} handleInputChangeEvent={handleInputChange} handleSubmitEvent={handleSubmit} />
            <priorityFilters.Provider value={priorityFilterState}>
                <TaskArea tasks={toDoState.tasks} activeCount={toDoState.activeCount} handleCompleteEvent={handleComplete} handleDeleteEvent={handleDelete} hanldlePriorityChangeEvent={handlePriorityChange} />
                <priorityFiltersDispatcher.Provider value={priorityFiltersDispatch}>
                <Footer handleCompleteAllEvent={handleCompleteAll} handleDeleteAllEvent={handleDeleteCompleted} />
                </priorityFiltersDispatcher.Provider>
            </priorityFilters.Provider>
          </div>
            
  )
}
