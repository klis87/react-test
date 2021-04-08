import React from 'react'

const Input = ({label, value, placeholder, onChange}) => {
    return (
        <>
            <label className='taks__input-label'>{label}</label>
            <input 
                className='task__input-field'
                type='text'
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            />
        </>
    )
}

export default Input
