import TodoContextProvider from './TodoContext';
import { useState } from 'react';
import Tasks from './Tasks';
import AddNewPanel from './AddNewPanel';

import '../index.css'

const TodoAppSolution = () => {
    const [ addNewTaskDisplay, setAddNewPanelDisplay ] = useState(false);

    return (
        <TodoContextProvider>
            <div className="solution__container">

                <div className='tasks__container'>
                    <header className='tasks__header'>
                        <h1>todo list</h1>
                        <div onClick={() => setAddNewPanelDisplay(!addNewTaskDisplay)}>+</div>
                    </header>
                    {addNewTaskDisplay && <AddNewPanel />}
                    <Tasks/>
                </div>
            </div>
        </TodoContextProvider>
    )
}

export default TodoAppSolution
