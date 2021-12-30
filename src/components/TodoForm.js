import React, {useState} from 'react'

function TodoForm(props) {
       const [input, setInput] = useState('');

       const handlChange = e =>{
           setInput(e.target.value);
       }

       const handlSubmit = e => {
         e.preventDefault();
         props.onSubmit(
             {
                 id : Math.floor(Math.random() * 10000),
                 text : input
             }
         );

         setInput('')
       }
    return (
        <form className='todo-form' onSubmit={handlSubmit}>
            <input
            type='text'
            placeholder='Add todo'
            value={input}
            name='text'
            className='todo-input'
            onChange={handlChange}
              />
              <button className='todo-btn'>
                  Add todo

              </button>

        </form>
        
    )
}

export default TodoForm
