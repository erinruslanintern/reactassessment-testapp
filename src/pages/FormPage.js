import UserForm from '../components/UserForm';

import {Link} from 'react-router-dom';

const FormPage = () =>
{
    return(
        <div>
            <Link to='/Main'>Back</Link>
            <UserForm />
        </div>
    )
}

export default FormPage;