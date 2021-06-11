import classes from './RemovePage.module.css';

import {useParams, useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {userActions} from '../store/user';

const RemovePage = () =>
{
    const dispatch = useDispatch();
    const params = useParams();
    const history = useHistory();
    const users = useSelector(state => state.user.users);
    const deleteUser = users.find(user => user.id.toString() === params.userid);

    const removeHandler = () =>
    {
        dispatch(userActions.removeUser(
            {
                id: parseInt(params.userid)
            }
        ));

        history.replace('/Main');
    }

    return(
        <div>
            <div className={classes.mainquestion}>
                Are you sure you want<br />to remove this user?
            </div>
            <div className={classes.userblock}>
                <span className={classes.name}>
                    {deleteUser.name}
                </span>
                <span className={classes.uname}>
                    {deleteUser.username}
                </span>
            </div>
            <div className={classes.confirmation}>
                <button onClick={() => history.push(`/UserProfile/${params.userid}`)}>No</button>
                <button onClick={removeHandler}>Yes</button>
            </div>
        </div>
    )
}

export default RemovePage;