import { useState, useContext } from 'react'
import Input from './Input'
import { TodoContext } from './TodoContext';

const AddNewPanel = () => {

    const {addTask} = useContext(TodoContext);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const submitForm = e => {
        e.preventDefault();
        // if (title.trim().length < 1 || description.trim().length < 1 ) {
        //     alert('Please provide proper title and description')
        //     return;
        // };
        addTask(title, description);
        setTitle('');
        setDescription('');
    }

    return (
        <form className='task__add-new' onSubmit={e => submitForm(e)}>
            <Input 
                label='title' 
                value={title}
                placeholder='Title of your task'
                onChange={e => setTitle(e.target.value)}
            />
            <Input 
                label='description'
                value={description}
                placeholder='Description of your task'
                onChange={e => setDescription(e.target.value)} />
            <input 
                class='btn btn-submit'
                type='submit' 
                value='add task'
            />
        </form>
    )
}

export default AddNewPanel
