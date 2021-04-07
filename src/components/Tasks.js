import { useContext } from 'react'
import { TodoContext } from './TodoContext'
import Task from './Task';

const Tasks = () => {

    const tasks = useContext(TodoContext)

    return (
        <ul>
            {tasks.map(task => {
                return(
                    <Task 
                        key={task.id}
                        task={task}
                    />
                )
            })}
        </ul>
    )
}

export default Tasks
