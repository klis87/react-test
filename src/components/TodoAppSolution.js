import TodoContextProvider from './TodoContext';
import TodoContainer from './TodoContainer';

import '../index.css'

const TodoAppSolution = () => {
    return (
        <TodoContextProvider>
                <TodoContainer />
        </TodoContextProvider>
    )
}

export default TodoAppSolution
