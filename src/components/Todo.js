import React, {useState} from 'react';

function Todo({todos}) {

    const [edit, setEdit] = useState(
        {
            id : null,
            text : ''
        }
    );
    return todos.map((todo,index) =>(
        <div key={index}>
            <div key={todo.id}>
                 {todo.text}
            </div>

        </div>

    ));
}

export default Todo;
