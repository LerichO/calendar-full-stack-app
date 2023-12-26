function ToDoItem(props){
    return(
        <div className="relative m-8 p-3 h-[110px] w-[600px] bg-secondary rounded-md text-text-primary content-center">
            <b className="m-1">{props.title}</b>
            <p className="m-1">{props.description}</p>
            <time className="m-1" datetime="2023-12-12">December 12</time>
        </div>
    );
}

export default ToDoItem;