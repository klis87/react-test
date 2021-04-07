import { useContext } from 'react';
import { TodoContext } from './TodoContext';
import Tasks from './Tasks';

import '../index.css'

const TodoAppSolution = () => {

    const tasks = useContext(TodoContext);

    return (
        <TodoContext.Provider value={tasks}>
            <div className="solution__container">
                <div className='tasks__container'>
                    <h1>todo list</h1>
                    <Tasks/>
                </div>
            </div>
        </TodoContext.Provider>
    )
}

export default TodoAppSolution
