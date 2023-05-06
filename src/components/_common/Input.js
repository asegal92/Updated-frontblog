import React from 'react'

const Input = ({...other}) => {
  return (
    <input
        className='border border-red-600 px-4 py-2 rounded-md text-black w-full md:w-1/2 xl:w-1/3'
        { ...other }
    />
  )
}

export default Input