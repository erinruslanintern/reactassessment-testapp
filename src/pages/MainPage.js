import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {userActions} from '../store/user';

import UserList from '../components/UserList';
import classes from './MainPage.module.css';

const MainPage = () =>
{
    const isAscending = useSelector(state => state.user.isAscending);
    const dispatch = useDispatch();

    return(
        <div className={classes.main}>
            <div className={classes.header}>
                <span className={classes.headercontent}>Users</span>
            </div>
            <div className={classes.subheader}>
                <Link onClick={() => dispatch(userActions.sortData())} className={classes.subheadercontentleft}>Sort: {isAscending ? 'Ascending' : 'Descending'}</Link>
                <Link to='/AddUser' className={classes.subheadercontentright}>Add New User</Link>
                <Link to='/RemoveAll' className={classes.subheadercontentright}>Clear All Data</Link>
            </div>
            <UserList />
        </div>
    )
}

export default MainPage;