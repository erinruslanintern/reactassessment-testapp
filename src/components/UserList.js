import React from 'react';
import {useSelector} from 'react-redux';
import UserCard from '../UI/UserCard';

const UserList = () =>
{
    const users = useSelector(state => state.user.users)

    return(
        <div>
            {users.map(user =>
                <UserCard
                    key={user.id}
                    userData={user}/>
            )}
        </div>
    )
}

export default UserList;