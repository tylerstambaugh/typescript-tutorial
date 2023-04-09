import React from 'react';
import "./styles.css";

interface Props {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>
}

const InputField = ({todo, setTodo}: Props) => {
  return  (
  <form className='input'>
    <input type="input" 
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder='Enter a task' 
        className='input_box' /> 
    <button className='input_submit' type='submit'>
        Add
    </button>
  </form>
  );
};

export default InputField;