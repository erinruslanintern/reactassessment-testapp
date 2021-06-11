import UserCard from '../UI/UserCard';

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
            <UserCard userData={deleteUser} />
            <button onClick={() => history.push(`/UserProfile/${params.userid}`)}>No</button>
            <button onClick={removeHandler}>Yes</button>
        </div>
    )
}

export default RemovePage;