
const Task = ({task}) => {
    return (
        <li className='task__contanier'>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
        </li>
    )
}

export default Task
