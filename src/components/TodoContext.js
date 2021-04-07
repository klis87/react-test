import { createContext } from 'react';
import { todos } from '../todos';
import { v4 as uuidv4 } from 'uuid';

const tasks = todos.map(task => {
    return { 
        ...task,
        id: uuidv4()
    }
});

export const TodoContext = createContext(tasks);