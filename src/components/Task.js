function Task(props){



  return (
    <div>
      <p>{props.task.name}</p>
      <p>{props.task.description}</p>
      <button
        onClick={() => props.updateTask(props.task._id)}
      >
        {props.task.isDone ? 'Undo' : 'Complete Task'}
      </button>
      {/* <button
        onClick={() => {
          const copyTaskArray = [...props.initialTasks];
          const foundIndex = copyTaskArray.findIndex(t => t._id === props.task._id);
          copyTaskArray[foundIndex].isDone = !copyTaskArray[foundIndex].isDone;
          props.setInitialTasks(copyTaskArray);
        }}
      >
        {props.task.isDone ? 'Undo' : 'Complete Task'}
      </button> */}
    </div>
  );

};

export default Task;