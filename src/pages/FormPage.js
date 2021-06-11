import UserForm from '../components/UserForm';

import {Link, useParams} from 'react-router-dom';

const FormPage = () =>
{
    const params = useParams();
    var backPath = `/UserProfile/${params.userid}`;

    if(!params.userid)
    {
        backPath = '/Main';
    }

    return(
        <div>
            <h2>User Form</h2>
            <Link to={backPath}>Back</Link>
            <UserForm />
        </div>
    )
}

export default FormPage;