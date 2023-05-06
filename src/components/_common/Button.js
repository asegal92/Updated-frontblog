import React from 'react'

const Button = (props) => {
    const { 
        label = '',
        onClick,
        ...other
    } = props || {};
    return (
        <button 
        { ...other }
        onClick={ onClick }
        className='bg-red-900 border border-red-900 hover:bg-red-500 hover:scale-110 transition-all px-4 py-2 rounded-md uppercase '>
            {label}
        </button>
    )
}

export default Button