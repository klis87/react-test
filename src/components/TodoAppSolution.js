import TodoContextProvider from './TodoContext';
import { useState } from 'react';
import Tasks from './Tasks';
import AddNewTaskPanel from './AddNewTaskPanel';

import '../index.css'

const TodoAppSolution = () => {
    const [ addNewTaskDisplay, setAddNewPanelDisplay ] = useState(false);

    let change = () => {
        setAddNewPanelDisplay(!addNewTaskDisplay)
        console.log(addNewTaskDisplay)
    }
    return (
        <TodoContextProvider>
            <div className="solution__container">

                <div className='tasks__container'>
                    <header className='tasks__header'>
                        <h1>todo list</h1>
                        <div onClick={change}>+</div>
                    </header>
                    {addNewTaskDisplay && <AddNewTaskPanel />}
                    <Tasks/>
                </div>
            </div>
        </TodoContextProvider>
    )
}

export default TodoAppSolution
