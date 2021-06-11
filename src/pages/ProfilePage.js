import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';

import classes from './ProfilePage.module.css';

const ProfilePage = () =>
{
    const params = useParams();
    const users = useSelector(state => state.user.users);
    const user = users.find(user => user.id.toString() === params.userid);

    return(
        <div className={classes.main}>
            <div className={classes.header}>
                <Link to='/Main' className={classes.headercontent}>
                    Back
                </Link>
                <Link to={`/EditUser/${user.id}`} className={classes.headercontentright}>
                    Edit data
                </Link>
                <Link to={`/RemoveUser/${user.id}`} className={classes.headercontentright}>
                    Remove data
                </Link>
            </div>
            <div className={classes.maintitle}>
                {user.name}
            </div>
            <div className={classes.datablock}>
                <div className={classes.datablockcontent}>
                    <p>
                        <span>Username: </span>
                        {user.username}
                    </p>
                    <p>
                        <span>Email: </span>
                        {user.email}
                    </p>
                    <p>
                        <span>Phone: </span>
                        {user.phone}
                    </p>
                    <p>
                        <span>Website: </span>
                        {user.website}
                    </p>
                </div>
            </div>
            <div className={classes.title}>
                <span>Address</span>
            </div>
            <div className={classes.datablock}>
                <div className={classes.datablockcontent}>
                    <p>
                        <span>Street: </span>
                        {user.address.street}
                    </p>
                    <p>
                        <span>Suite: </span>
                        {user.address.suite}
                    </p>
                    <p>
                        <span>City: </span>
                        {user.address.city}
                    </p>
                    <p>
                        <span>Zipcode: </span>
                        {user.address.zipcode}
                    </p>
                    <p>
                        <span>Coordinate: </span>
                        {user.address.geo.lat}, {user.address.geo.lng}
                    </p>
                </div>
            </div>
            <div className={classes.title}>
                <span>Company</span>
            </div>
            <div className={classes.datablock}>
                <div className={classes.datablockcontent}>
                    <p>
                        <span>Name: </span>
                        {user.company.name}
                    </p>
                    <p>
                        <span>Catch Phrase: </span>
                        {user.company.catchPhrase}
                    </p>
                    <p>
                        <span>Business: </span>
                        {user.company.bs}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;