import UserForm from '../components/UserForm';
import classes from './FormPage.module.css';

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
        <div className={classes.main}>
            <div className={classes.header}>
                <span className={classes.headercontent}>
                    {!params.userid && 'New User'}
                    {params.userid && 'Edit User'}
                </span>
            </div>
            <div className={classes.subheader}>
                <Link to={backPath} className={classes.subheadercontentleft}>Back</Link>
            </div>
            <UserForm />
        </div>
    )
}

export default FormPage;