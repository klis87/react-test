import { useContext } from 'react'
import { TodoContext } from './TodoContext'
import Task from './Task';

const Tasks = () => {

    const {tasks} = useContext(TodoContext);
    console.log(tasks.length);
    return (
        <ul>
            {tasks.length === 0 && <div style={{marginTop: '20px'}}>Nothing to show</div>}
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
