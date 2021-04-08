import { useState, useContext, useEffect } from 'react'
import Input from './Input'
import { TodoContext } from './TodoContext';

const AddNewTaskPanel = () => {

    const {addTask} = useContext(TodoContext);

    const [title, setTitle] = useState('');
    const [titleErrorMessage, setTitleErrorMessage] = useState('');

    const [description, setDescription] = useState('');
    const [descriptionErrorMessage, setDescriptionErrorMessage] = useState('');

    const submitForm = e => {
        e.preventDefault();
        if (validate(title) && validate(description)) {
            addTask(title, description);
            setTitle('');
            setDescription('');
        } else {
            titleChange(title);
            descriptionChange(description);
        }
    }

    const titleChange = string => {
        setTitle(string);
        if (!validate(string)) {
            setTitleErrorMessage('please provide title')
        } else {
            setTitleErrorMessage('')
        }
    }

    const descriptionChange = string => {
        setDescription(string);
        if (!validate(string)) {
            setDescriptionErrorMessage('please provide description')
        } else {
            setDescriptionErrorMessage('')
        }
    }

    const validate = (string) => {
        if (string.trim().length > 0 ) return true;
        return false;
    }

    return (
        <>
            <form className='task__add-new' onSubmit={e => submitForm(e)}>
                <Input 
                    label='title' 
                    value={title}
                    placeholder='Title of your task'
                    onChange={event => titleChange(event.target.value.toString())}
                />
                <div className='error-msg'>{titleErrorMessage}</div>
                <Input 
                    label='description'
                    value={description}
                    placeholder='Description of your task'
                    onChange={event => descriptionChange(event.target.value.toString())}
                />
                <div className='error-msg'>{descriptionErrorMessage}</div>
                <input 
                    className='btn btn-submit'
                    type='submit' 
                    value='add task'
                />

            </form>
        </>
    )
}

export default AddNewTaskPanel
