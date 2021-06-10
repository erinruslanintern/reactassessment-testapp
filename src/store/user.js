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
                        id: state.users[state.users.length - 1].id + 1
                    }
                );
            },
            editUser(state, action)
            {
                state.users = state.users.filter(user => user.id !== action.payload.id);
                state.users.push(action.payload);
                state.users.sort((a, b) => (a.id > b.id)? 1 : -1);
            },
            removeUser(state, action)
            {
                state.users = state.users.filter(user => user.id !== action.payload.id);
            },
            setFetchedData(state, action)
            {
                state.users = action.payload;
            }
        }
    }
)

export const userActions = userSlice.actions;
export default userSlice;