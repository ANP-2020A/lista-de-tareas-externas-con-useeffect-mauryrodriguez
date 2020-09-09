import React from 'react';

const UserList = () => {

    const initialUsers = () => {
        console.log( 'inicializando estado' );
        return [
            {
                firstname: 'Eduardo',
                lastname: 'Caiza'
            },
            {
                firstname: 'Sofia',
                lastname: 'Caiza'
            },
            {
                firstname: 'Aracely',
                lastname: 'Caiza'
            }
        ];
    }

    const [ users, setUsers ] = React.useState( initialUsers );

    const handleAddUser = () => {
        const firstname = document.querySelector( '#firstname' ).value;
        const lastname = document.querySelector( '#lastname' ).value;
        const newUser = {
            firstname,
            lastname
        };
        setUsers( ( prevState ) => [
            ...prevState,
            newUser
        ] );
    };


    return (
        <div>
            <div>
                <label htmlFor='firstname'>Nombre </label>
                <input type='text' id='firstname' />
            </div>

            <div>
                <label htmlFor='lastname'>Apellido </label>
                <input type='text' id='lastname' />
            </div>

                <div>
                    <button onClick={ handleAddUser }>Agregar usuario</button>
                </div>

            <h1>Lista de usuarios ({ users.length } en total)</h1>
            <ul>
                {
                    users.map( ( user, index ) => (
                            <li key={ index }>{ user.firstname } { user.lastname }</li>
                        )
                    )
                }
            </ul>
        </div>
    );
};

export default UserList;