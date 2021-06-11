import UserForm from '../components/UserForm';

import {Link} from 'react-router-dom';

const FormPage = () =>
{
    return(
        <div>
            <h2>User Form</h2>
            <Link to='/Main'>Back</Link>
            <UserForm />
        </div>
    )
}

export default FormPage;