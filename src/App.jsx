import TodoForm from "./components/ui/TodoForm";
import TodoList from "./components/ui/TodoList";

function App() {
  

  return (
    <div className="box-content my-32 mx-32 h-34 w-34 px-20 border-0">
    {/* <div className="text-blue-600 flex flex-col bg-slate-400 bg-opacity-5"> */}
      <h1 className="text-center pt-0 pb-8 text-4xl" >ToDo List</h1>
      <TodoForm></TodoForm>
      <TodoList></TodoList>
    </div>
  )
}

export default App;
