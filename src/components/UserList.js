import React from 'react';
import UserCard from '../UI/UserCard';
import classes from './UserList.module.css';

import {useSelector} from 'react-redux';

const UserList = () =>
{
    const users = useSelector(state => state.user.users)
    const usersExist = users.length > 0;

    return(
        <div>
            {usersExist && (users.map(user =>
                <UserCard
                    key={user.id}
                    userData={user}/>
            ))}
            {!usersExist && (<div className={classes.nodata}>
                    No user data available...
                </div>
            )}
        </div>
    )
}

export default UserList;