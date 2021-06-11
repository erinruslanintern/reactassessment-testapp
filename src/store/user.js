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
            setFetchedData(state, action)
            {
                state.users = action.payload;
            },
            addUser(state, action)
            {
                let idVal = 1;
                if(state.users.length > 0)
                {
                    idVal = state.users[state.users.length - 1].id + 1;
                }

                state.users.push(
                    {
                        ...action.payload,
                        id: idVal
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
            removeAll(state)
            {
                state.users = [];
            }
        }
    }
)

export const userActions = userSlice.actions;
export default userSlice;