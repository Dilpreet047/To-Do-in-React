
import  TaskArea  from "./ApplicationBody/TaskArea/TaskArea";

//eslint-disable-next-line
import { TaskReducer, FilterReducer} from "./TaskReducer";
import Footer from "./ApplicationBody/Footer/Footer";
import { useReducer } from "react";
import Header from "./ApplicationBody/Header/Header";
import { priorityFilters, priorityFiltersDispatcher } from "./ApplicationContext";


import AppLogo from "./Icons/AppLogo";


function App() {

  const [toDoState, dispatch] = useReducer(TaskReducer, {tasks: [], availableIds: [1,2,3,4,5,6,7,8,9,10], inputValue: '', activeCount: 0, priority: 'low'});
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
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 font-mono">
        <div className="flex items-center mb-8">
          <AppLogo customStyle={"clock-hand"}/>
          <h1 className="text-4xl font-bold text-blue-600">Your To-Do</h1>
        </div>
        <Header inputValue={toDoState.inputValue} handleInputChangeEvent={handleInputChange} handleSubmitEvent={handleSubmit} />
      </div>
      <priorityFilters.Provider value={priorityFilterState}>
        <TaskArea tasks={toDoState.tasks} activeCount={toDoState.activeCount} handleCompleteEvent={handleComplete} handleDeleteEvent={handleDelete} hanldlePriorityChangeEvent={handlePriorityChange} />
        <priorityFiltersDispatcher.Provider value={priorityFiltersDispatch}>
          <Footer handleCompleteAllEvent={handleCompleteAll} handleDeleteAllEvent={handleDeleteCompleted} />
        </priorityFiltersDispatcher.Provider>
      </priorityFilters.Provider>
    </>
  )
}



export default App;


// {
//   tasks: [],
//   availableIds: [],
//   inputValue: '',
//   activeCount: 0
// }