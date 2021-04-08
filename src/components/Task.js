import { useContext } from 'react'
import { TodoContext } from './TodoContext'

import trash from '../assets/delete.svg'

const Task = ({task}) => {

    const {changeTaskStatus, deleteTask} = useContext(TodoContext);

    return (
        <li className={`task__contanier ${task.completed && 'task-completed'}`}>
            <div>
                <input 
                    className='task__checkbox'
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
            { task.completed && 
                <div className='delete-icon'>
                    <img 
                        src={trash} 
                        alt="Trash icon"
                        onClick={() => deleteTask(task.id)}
                    />
                </div>
            }
        </li>
    )
}

export default Task
