import classes from './UserCard.module.css';

import {Link} from 'react-router-dom';

const UserCard = (props) =>
{
    return(
        <div className={classes.maincard}>
            <h2>{props.userData.name}</h2>
            <p>
                <span>Username: </span>
                {props.userData.username}
            </p>
            <p>
                <span>Email: </span>
                {props.userData.email}
            </p>
            <p>
                <span>Phone: </span>
                {props.userData.phone}
            </p>
            <p>
                <span>Address: </span>
                {props.userData.address.street}, {props.userData.address.suite}, {props.userData.address.city}, {props.userData.address.zipcode} ({props.userData.address.geo.lat}, {props.userData.address.geo.lng})
            </p>
            <div>
                <p>
                    <span>Website: </span>
                    {props.userData.website}
                </p>
                <p>
                    <span>Company: </span>
                    {props.userData.company.name}, {props.userData.company.catchPhrase}, {props.userData.company.bs}
                </p>
            </div>
            <Link to={`/EditUser/${props.userData.id}`}>Edit data</Link>
            <Link to={`/RemoveUser/${props.userData.id}`}>Remove data</Link>
        </div>
    )
}

export default UserCard;