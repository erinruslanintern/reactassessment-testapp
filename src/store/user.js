import {createSlice, configureStore} from '@reduxjs/toolkit';

const initUser =
{

}

const userSlice = createSlice(
    {
        name: 'user',
        initialState: initUser,
        reducers:
        {
            addUser()
            {},
            editUser()
            {},
            removeUser()
            {}
        }
    }
)

const store = configureStore(userSlice);

export default store;