import {Link} from 'react-router-dom';

import UserList from '../components/UserList';
import classes from './MainPage.module.css';

const MainPage = () =>
{
    return(
        <div>
            <div className={classes.header}>
                <span className={classes.headercontent}>Users</span>
            </div>
            <div className={classes.addnew}>
                <Link to='/AddUser' className={classes.addnewcontent}>Add New User</Link>
            </div>
            <UserList />
        </div>
    )
}

export default MainPage;