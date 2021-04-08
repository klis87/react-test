import { useContext } from 'react'
import { TodoContext } from './TodoContext'
import Task from './Task';
import { Droppable, Draggable } from 'react-beautiful-dnd';

const Tasks = () => {

    const {tasks} = useContext(TodoContext);
    
    return (
        <ul>
            {tasks.length === 0 && <div style={{marginTop: '20px'}}>Nothing to show</div>}
            <Droppable droppableId='tasks-container'>
                {provided => (
                    <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        {tasks.map((task, index) => (
                            <Draggable key={task.id} draggableId={task.id} index={index}>
                            {provided => (
                                <div
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    ref={provided.innerRef}
                                >
                                <Task 
                                    key={task.id}
                                    task={task}
                                    index={index}
                                />
                            </div>
                            )}
                            </Draggable>
                        ))}

                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </ul>
    )
}

export default Tasks
