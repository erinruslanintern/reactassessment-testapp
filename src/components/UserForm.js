import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams, useHistory} from 'react-router-dom';
import {userActions} from '../store/user';
import {dataActions} from '../store/data';

const UserForm = () =>
{
    const dispatch = useDispatch();
    const data = useSelector(state => state.data.user)
    const existData = useSelector(state => state.user.users)
    const params = useParams();
    const history = useHistory();

    useEffect(() =>
    {
        if(params.userid)
        {
            const calledData = existData.find(user => user.id.toString() === params.userid);

            dispatch(dataActions.setData(calledData));
        }
        else
        {
            dispatch(dataActions.resetData());
        }
    }, [])

    const editDataHandler = (formData) =>
    {
        dispatch(dataActions.setData(formData));
    }

    const submitHandler = event => 
    {
        event.preventDefault();

        if(params.userid)
        {
            dispatch(dataActions.setData(
                {
                    ...data,
                    id: parseInt(params.userid)
                }
            ))
            dispatch(userActions.editUser(data));
            dispatch(dataActions.resetData());
            history.replace('/Main');
        }
        else
        {
            dispatch(userActions.addUser(data));
            dispatch(dataActions.resetData());
            history.replace('/Main');
        }
    };

    return(
        <form onSubmit={submitHandler}>
            <label>Name: </label>
            <input 
                type='text'
                id='name'
                value={data.name} 
                onChange={event => editDataHandler(
                {
                    ...data,
                    name: event.target.value
                })}/>
            <br />
            <label>Username: </label>
            <input 
                type='text' 
                id='username' 
                value={data.username} 
                onChange={event => editDataHandler(
                {
                    ...data,
                    username: event.target.value
                })} />
            <br />
            <label>Phone: </label>
            <input 
                type='text' 
                id='phone' 
                value={data.phone} 
                onChange={event => editDataHandler(
                {
                    ...data,
                    phone: event.target.value
                })} />
            <br />
            <label>Email: </label>
            <input 
                type='text' 
                id='email' 
                value={data.email} 
                onChange={event => editDataHandler(
                {
                    ...data,
                    email: event.target.value
                })} />
            <br />
            <label>Website: </label>
            <input 
                type='text' 
                id='website' 
                value={data.website} 
                onChange={event => editDataHandler(
                {
                    ...data,
                    website: event.target.value
                })} />
            <p>Address:</p>
            <label>Street: </label>
            <input 
                type='text' 
                id='street'
                value={data.address.street}
                onChange={event => editDataHandler(
                {
                    ...data,
                    address:
                    {
                        ...data.address,
                        street: event.target.value
                    }
                })} />
            <br />
            <label>Suite: </label>
            <input 
                type='text' 
                id='suite'
                value={data.address.suite}
                onChange={event => editDataHandler(
                {
                    ...data,
                    address:
                    {
                        ...data.address,
                        suite: event.target.value
                    }
                })} />
            <br />
            <label>City: </label>
            <input 
                type='text' 
                id='city'
                value={data.address.city}
                onChange={event => editDataHandler(
                {
                    ...data,
                    address:
                    {
                        ...data.address,
                        city: event.target.value
                    }
                })} />
            <br />
            <label>Zipcode: </label>
            <input 
                type='text' 
                id='zipcode'
                value={data.address.zipcode}
                onChange={event => editDataHandler(
                {
                    ...data,
                    address:
                    {
                        ...data.address,
                        zipcode: event.target.value
                    }
                })} />
            <p>Coordinate: </p>
            <label>Latitude: </label>
            <input 
                type='text' 
                id='lat'
                value={data.address.geo.lat}
                onChange={event => editDataHandler(
                {
                    ...data,
                    address:
                    {
                        ...data.address,
                        geo:
                        {
                            ...data.address.geo,
                            lat: event.target.value
                        }
                    }
                })} />
            <br />
            <label>Longitude: </label>
            <input 
                type='text' 
                id='long'
                value={data.address.geo.lng}
                onChange={event => editDataHandler(
                {
                    ...data,
                    address:
                    {
                        ...data.address,
                        geo:
                        {
                            ...data.address.geo,
                            lng: event.target.value
                        }
                    }
                })} />
            <p>Company: </p>
            <label>Name: </label>
            <input 
                type='text' 
                id='companyname'
                value={data.company.name}
                onChange={event => editDataHandler(
                {
                    ...data,
                    company:
                    {
                        ...data.company,
                        name: event.target.value
                    }
                })} />
            <br />
            <label>Catch Phrase: </label>
            <input 
                type='text' 
                id='catchphrase'
                value={data.company.catchPhrase}
                onChange={event => editDataHandler(
                {
                    ...data,
                    company:
                    {
                        ...data.company,
                        catchPhrase: event.target.value
                    }
                })} />
            <br />
            <label>Business: </label>
            <input 
                type='text' 
                id='business'
                value={data.company.bs}
                onChange={event => editDataHandler(
                {
                    ...data,
                    company:
                    {
                        ...data.company,
                        bs: event.target.value
                    }
                })} />
            <br />
            <button type='submit'>{!params.userid? 'Add User' : 'Edit User'}</button>
        </form>
    )
}

export default UserForm;