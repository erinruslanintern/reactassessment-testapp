import {createSlice} from '@reduxjs/toolkit';

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
            addUser(state, action)
            {
                state.users.push(
                    {
                        ...action.payload,
                        id: state.users.length + 1
                    }
                );
            },
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

export const userActions = userSlice.actions;
export default userSlice;