import ToDoItem from "./todo-item";

function ToDoList(props){
    return (
        <div className="m-3">
            <ul>
                {/* Will use JavaScript map function to iterate
                through props to add ToDoItems when implemented */}
                <ToDoItem title="Thing 1" description="Do this thing"/>
            </ul>
        </div>
    );
}

export default ToDoList;