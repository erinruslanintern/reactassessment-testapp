import {createSlice, configureStore} from '@reduxjs/toolkit';

const initUser =
{
    users: []
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
            {},
            setFetchedData(state, action)
            {
                state.users = action.payload;
            }
        }
    }
)

const store = configureStore(userSlice);

export const userActions = userSlice.actions;
export default store;