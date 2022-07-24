import React, { useEffect, useState } from 'react'

import Header from '../components/Header';
import Footer from '../components/Footer';
import User from '../components/User';
const Users = () => {
    const [users, setUsers] = useState([]);
    const getUsers = async () => {
        const response = await fetch(process.env.REACT_APP_URL_API + '/users/?limit=10&offset=0')
        const data = await response.json()
        setUsers(data);
    }
    useEffect(() => {
        getUsers()
    }, []);
    return (
        <main className='content__users'>
            <Header />
            <main className='container__users'>
                {users.map((user, key) => (
                    <User
                        key={key}
                        name={user.name}
                        email={user.email}
                        length={user.todos.length}
                    />
                ))}
            </main>
            {/* <Footer /> */}
        </main>
    )
}

export default Users;