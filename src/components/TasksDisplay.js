import { useContext } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import iconCheck from "../assets/icon-check.svg";
import iconCross from "../assets/icon-cross.svg";
import taskContext from "../context/taskContext";
import { TodoProvider } from "../context/taskContext";

const Task = ({ task }) => {
  const { tasks, setTasks } = useContext(taskContext)

  const handleClick = () => {
    setTasks(
      tasks.map((todo) => {
        if (task.id === todo.id && task.isActive) {
          return { ...task, isActive: false };
        } else if (task.id === todo.id && !task.isActive) {
          return { ...task, isActive: true };
        }
        return todo;
      })
    );
  };

  const handleDelete = () => {
    const newTasks = tasks.filter((deleted) => deleted !== task);
    setTasks(newTasks);
  };

  return (
    <>
      <button onClick={handleClick} className={task.isActive ? "none" : "todo"}>
        {!task.isActive && <img id="check" src={iconCheck} alt="task done" />}
      </button>
      {!task.isActive ? (
        <del>
          <span className="task__text task__text--crossed">{task.name}</span>
        </del>
      ) : (
        <span className="task__text">{task.name}</span>
      )}
      <img
        className="task__delete"
        onClick={handleDelete}
        src={iconCross}
        alt="delete task"
      />
    </>
  );
};

const TasksDisplay = () => {
  // const visibleTasks = useMemo(() => filterTasks(tasks, mode), [tasks, mode]);
  // const [list, updateList] = useState(visibleTasks)
  const { tasks, setTasks, visibleTasks } = useContext(taskContext)

  console.log(tasks)

function handleOnDragEnd(result){
  if (!result.destination) return;
  const items = Array.from(tasks)
  const [reorderedItem] = items.splice(result.source.index, 1)
  items.splice(result.destination.index, 0, reorderedItem)

  setTasks(items)
}

  return (
  <div className="taskdisplay">
    <DragDropContext onDragEnd={handleOnDragEnd}>
    <Droppable droppableId="tasks">
      {(provided) => (
        <ul 
        {...provided.droppableProps} 
        ref={provided.innerRef}
        >
          {visibleTasks.map((task, index) => {
          return ( 
            <Draggable key={task.id} draggableId={task.id} index={index} >
             {(provided) => ( 
              <li className="taskdisplay__task" {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                <Task task={task} setTasks={setTasks} tasks={tasks} />
              </li>
             )}
          </Draggable>
          ); 
        })}
        {provided.placeholder}
        </ul>
      )}
</Droppable>
</DragDropContext>
</div>
  );
};

export { TasksDisplay };
