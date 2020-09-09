import React, { useState } from 'react';
import '../styles/App.css';
import TodoList from './TodoList';

const App = () => {

    const [ viewTasks, setViewTasks ] = useState( true );

    return (
        <>
            <TodoList />
            {/*<UserList />*/}

            {/*<button onClick={ () => setViewTasks( ( prevViewTasks ) => !prevViewTasks ) }>*/}
            {/*    { viewTasks*/}
            {/*        ? 'Ocultar'*/}
            {/*        : 'Ver' } lista de tareas*/}
            {/*</button>*/}
            {/*{*/}
            {/*    viewTasks && <TodoList />*/}
            {/*}*/}
        </>
    );
};

export default App;




// class App extends React.Component{
//
//      user = {
//      firstName: "Eduardo",
//      lastName: "Caiza"
//      }
//
//     formatName = (user) => {
//         return user.firstName + ' ' + user.lastName;
//     }
//
//     render(){
//         return (
//             <>
//                 <div>
//                     Hola {this.formatName(this.props.user)}!
//                 </div>
//
//                 <div>
//                     {this.props.question}
//                 </div>
//             </>
//         );
//     }
// }


