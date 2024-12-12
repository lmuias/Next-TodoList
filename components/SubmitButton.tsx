"use client";

import React from 'react'

const SubmitButton = ({ title } : {title: string}) => {
  return (
    <button type="submit" className="p-2 bg-indigo-600 text-white rounded-md transition-opacity hover:opacity-60">{title}</button>
  )
}

export default SubmitButton