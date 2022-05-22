import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('')

    function handleInputChange(e) {
        setInputValue(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (inputValue.trim().length > 2) {
            console.log(`form submitted with ${inputValue}`)
            setCategories(prevState => [inputValue, ...prevState]);
            setInputValue('');
        }
    }

  return (
    <form onSubmit={handleSubmit}>
        <div>Add Category</div>
        <input type="text" name="category" value={inputValue} onChange={handleInputChange}></input>
    </form>
  )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory