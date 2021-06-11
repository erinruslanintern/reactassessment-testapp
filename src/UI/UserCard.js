import classes from './UserCard.module.css';

import {Link} from 'react-router-dom';

const UserCard = (props) =>
{
    return(
        <div className={classes.holder}>
            <Link to={`/UserProfile/${props.userData.id}`} className={classes.maincard}>
                <h2>{props.userData.name}</h2>
                <p>
                    <span>Username: </span>
                    {props.userData.username}
                </p>
            </Link>
        </div>
    )
}

export default UserCard;