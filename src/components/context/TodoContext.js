import React, {useState} from 'react'

const TodoContext = React.createContext([{}, () => {}]);

const TodoProvider = (props) => {
    const [todos, setTodos] = useState(
        [
            { id: 1, title: 'Aggiornare agenda', completed: false },
            { id: 2, title: 'Nuovo branch todo-app con Redux', completed: false },
            { id: 3, title: 'Compiti per Carmela', completed: false },
        ]
    );

    return (
      <TodoContext.Provider value={[todos, setTodos]}>
        {props.children}
      </TodoContext.Provider>
    );
  }

  export { TodoContext, TodoProvider };
