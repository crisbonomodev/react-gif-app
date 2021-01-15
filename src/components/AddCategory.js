import React,{useState} from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState("");

    //Manejamos el input
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    //Manejamos el enter
    const handleSubmit = (e) => {
        //console.log('Submit!');
        //Evitamos que se recargue todo el sitio
        e.preventDefault();
        if(inputValue.trim().length>2)
        {
            console.log(inputValue)
            setCategories(cats => {return [inputValue,...cats]});
            setInputValue('');
        }
        
    }
    return (
        <form onSubmit={handleSubmit}>
        <input onChange={handleInputChange}
               type="text"
                
        />
        <h2>{inputValue}</h2>
        </form>
    )

}
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
