import {createSlice} from '@reduxjs/toolkit';

const initUser =
{
    users: [],
    isAscending: true
}

const newId = (obj) =>
{
    let allId = obj.users.map(user => user.id);
    let nextId = Math.max(...allId) + 1;
    return nextId;
}

const sortUsers = (obj) =>
{
    if(obj.isAscending)
    {
        return obj.users.sort((a, b) => (a.name >= b.name) ? 1 : -1);
    }
    else
    {
        return obj.users.sort((a, b) => (a.name <= b.name) ? 1 : -1);
    }
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
                state.users = sortUsers(state);
            },
            addUser(state, action)
            {
                let idVal = 1;
                if(state.users.length > 0)
                {
                    idVal = newId(state);
                }

                state.users.push(
                    {
                        ...action.payload,
                        id: idVal
                    }
                );
                state.users = sortUsers(state);
            },
            editUser(state, action)
            {
                state.users = state.users.filter(user => user.id !== action.payload.id);
                state.users.push(action.payload);
                state.users = sortUsers(state);
            },
            removeUser(state, action)
            {
                state.users = state.users.filter(user => user.id !== action.payload.id);
            },
            removeAll(state)
            {
                state.users = [];
            },
            sortData(state)
            {
                state.isAscending = !state.isAscending;
                state.users = sortUsers(state);
            }
        }
    }
)

export const userActions = userSlice.actions;
export default userSlice;