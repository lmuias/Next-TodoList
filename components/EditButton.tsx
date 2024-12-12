import React from 'react'

const EditButton = ({setIsEditing}: {setIsEditing: React.Dispatch<React.SetStateAction<boolean>>}) => {
  return (
    <svg className='icons fill-orange-800' onClick={() => setIsEditing(true)}>
      <use href='sprite.svg#icon-pencil'></use>
    </svg>
  )
}

export default EditButton