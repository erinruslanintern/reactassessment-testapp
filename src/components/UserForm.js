import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams, useHistory} from 'react-router-dom';
import {userActions} from '../store/user';
import {dataActions} from '../store/data';

import classes from './UserForm.module.css';

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
            <div className={classes.maintitle}>
                Personal Details
            </div>
            <br />
            <div className={classes.datablock}>
                <table>
                    <tr>
                        <td>
                            <label>Name</label><br />
                            <input 
                                type='text'
                                id='name'
                                value={data.name} 
                                onChange={event => editDataHandler(
                                {
                                    ...data,
                                    name: event.target.value
                                })}/>
                        </td>
                        <td>
                            <label>Username</label><br />
                            <input 
                                type='text' 
                                id='username' 
                                value={data.username} 
                                onChange={event => editDataHandler(
                                {
                                    ...data,
                                    username: event.target.value
                                })} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Phone</label><br />
                            <input 
                                type='text' 
                                id='phone' 
                                value={data.phone} 
                                onChange={event => editDataHandler(
                                {
                                    ...data,
                                    phone: event.target.value
                                })} />
                        </td>
                        <td>
                            <label>Email</label><br />
                            <input 
                                type='text' 
                                id='email' 
                                value={data.email} 
                                onChange={event => editDataHandler(
                                {
                                    ...data,
                                    email: event.target.value
                                })} />
                        </td>
                    </tr>
                    <tr>
                        <td colspan='2'>
                            <label>Website</label><br />
                            <input 
                            type='text' 
                            id='website' 
                            value={data.website} 
                            onChange={event => editDataHandler(
                            {
                                ...data,
                                website: event.target.value
                            })} />
                        </td>
                    </tr>
                </table>
            </div>
            <div className={classes.title}>
                Address
            </div>
            <div className={classes.datablock}>
                <table>
                    <tr>
                        <td>
                            <label>Street</label><br />
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
                        </td>
                        <td>
                            <label>Suite</label><br />
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
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>City</label><br />
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
                        </td>
                        <td>
                            <label>Zipcode</label><br />
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
                        </td>
                    </tr>
                    <tr>
                        <td>
                        </td>
                    </tr>
                    <tr>
                        <td colspan='2'>Coordinate</td>
                    </tr>
                    <tr>
                        <td>
                            <label>Latitude</label><br />
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
                        </td>
                        <td>
                            <label>Longitude</label><br />
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
                        </td>
                    </tr>
                </table>
            </div>           
            <div className={classes.title}>
                Company
            </div>
            <div className={classes.datablock}>
                <table>
                    <tr>
                        <td>
                            <label>Name</label><br />
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
                        </td>
                        <td>
                            <label>Business</label><br />
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
                        </td>
                    </tr>
                    <tr>
                        <td colspan='2'>
                            <label>Catch Phrase</label><br />
                            <textarea 
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
                        </td>
                    </tr>
                </table>
            </div>
            <div className={classes.button}>
                <button type='submit'>
                    {!params.userid ? 'Add User' : 'Confirm Edit'}
                </button>
            </div>
        </form>
    )
}

export default UserForm;