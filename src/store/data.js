import {createSlice} from '@reduxjs/toolkit';

const initData =
{
    user:
    {
        name: '',
        username: '',
        phone: '',
        email: '',
        website: '',
        address:
        {
            street: '',
            suite: '',
            city: '',
            zipcode: '',
            geo:
            {
                lat: '',
                lng: ''
            }
        },
        company:
        {
            name: '',
            catchPhrase: '',
            bs: ''
        }
    }
}

const dataSlice = createSlice(
    {
        name: 'data',
        initialState: initData,
        reducers:
        {
            setData(state, action)
            {
                state.user = action.payload;
            },
            resetData(state)
            {
                state.user = initData.user;
            }
        }
    }
)

export const dataActions = dataSlice.actions;
export default dataSlice;