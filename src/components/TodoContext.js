import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { todos } from '../todos';

const todosWithId = todos.map(task => {
    return { 
        ...task,
        id: uuidv4()
    }
});

export const TodoContext = createContext();

const TodoContextProvider = (props) => {
    const [tasks, setTasks] = useState(todosWithId);

    const changeTaskStatus = (id) => {
        setTasks(
            tasks.map(task => task.id === id ? {...task, completed: !task.completed} : task)
        )
    }

    const addTask = (title, description) => {
        const newTask = {
            id: uuidv4(),
            title,
            description,
            completed: false
        }
        setTasks([...tasks, newTask]);
    }

    const deleteTask = id => {
        setTasks(tasks.filter( task =>
            task.id !== id
        ));
    }

    return (
        <TodoContext.Provider value={{tasks, addTask, changeTaskStatus, deleteTask}}>
            { props.children }
        </TodoContext.Provider>
    )
}

export default TodoContextProvider;