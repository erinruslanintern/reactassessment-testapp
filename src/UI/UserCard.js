import classes from './UserCard.module.css';

import {Link} from 'react-router-dom';

const UserCard = (props) =>
{
    return(
        <div className={classes.holder}>
            <Link to={`/UserProfile/${props.userData.id}`} className={classes.maincard}>
                <span className={classes.name}>
                    {props.userData.name}
                </span>
                <span className={classes.uname}>
                    {props.userData.username}
                </span>
            </Link>
        </div>
    )
}

export default UserCard;