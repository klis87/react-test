import { useState, useContext } from 'react';
import Tasks from './Tasks';
import AddNewTaskPanel from './AddNewTaskPanel';

import { DragDropContext } from 'react-beautiful-dnd';
import { TodoContext } from './TodoContext';

const TodoContainer = () => {

    const [ addNewTaskDisplay, setAddNewPanelDisplay ] = useState(false);

    const {reorderTasks} = useContext(TodoContext);

    const onDragEnd = result => {
        const { destination, source } = result
        if (!destination) return;
        if (destination.index === source.index) {
            return;
        }
        reorderTasks(source.index, destination.index);
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
        <div className='solution__container'>
            <div className='tasks__container'>
                <header className='tasks__header'>
                    <h1>todo list</h1>
                    <div onClick={() => setAddNewPanelDisplay(!addNewTaskDisplay)}>+</div>
                </header>
                {addNewTaskDisplay && <AddNewTaskPanel />}
                <Tasks />
            </div>
        </div>
    </DragDropContext>
    )
}

export default TodoContainer
