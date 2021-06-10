import {Link} from 'react-router-dom';

import UserList from '../components/UserList';

const MainPage = () =>
{
    return(
        <div>
            <Link to='/AddUser'>Add New User</Link>
            <UserList />
        </div>
    )
}

export default MainPage;