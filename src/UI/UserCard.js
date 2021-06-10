import classes from './UserCard.module.css';

const UserCard = (props) =>
{
    return(
        <div className={classes.maincard}>
            <h2>{props.userData.name}</h2>
            <p>Username: {props.userData.username}</p>
            <p>Email: {props.userData.email}</p>
            <div>
                <h5>Address:</h5>
                <p>{props.userData.address.street}, {props.userData.address.suite}, {props.userData.address.city}, {props.userData.address.zipcode}</p>
            </div>
        </div>
    )
}

export default UserCard;