import { useContext } from 'react'
import { TodoContext } from './TodoContext'

const Task = ({task}) => {

    const {changeTaskStatus, deleteTask} = useContext(TodoContext);

    return (
        <li className={`task__contanier ${task.completed && 'task-completed'}`}>
            <div>
                <input 
                    type="checkbox"
                    value={task.completed}
                    checked={task.completed}
                    onChange = {() => changeTaskStatus(task.id)}
                />
            </div>
            <div>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
            </div>
        </li>
    )
}

export default Task
