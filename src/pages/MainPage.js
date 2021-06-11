import {Link} from 'react-router-dom';

import UserList from '../components/UserList';
import classes from './MainPage.module.css';

const MainPage = () =>
{
    return(
        <div className={classes.main}>
            <div className={classes.header}>
                <span className={classes.headercontent}>Users</span>
            </div>
            <div className={classes.subheader}>
                <span className={classes.subheadercontentleft}></span>
                <Link to='/AddUser' className={classes.subheadercontentright}>Add New User</Link>
            </div>
            <UserList />
        </div>
    )
}

export default MainPage;