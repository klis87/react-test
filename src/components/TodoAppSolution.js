import TodoContextProvider from './TodoContext';
import Tasks from './Tasks';

import '../index.css'

const TodoAppSolution = () => {


    return (
        <TodoContextProvider>
            <div className="solution__container">
                <div className='tasks__container'>
                    <h1>todo list</h1>
                    <Tasks/>
                </div>
            </div>
        </TodoContextProvider>
    )
}

export default TodoAppSolution
