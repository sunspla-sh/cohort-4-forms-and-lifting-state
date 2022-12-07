const Summary = (props) => {
    
  return (
    <div>
      <h2>Tasks Completed: {props.initialTasks.filter(t => t.isDone).length} </h2>
    </div>
  );
}

export default Summary;