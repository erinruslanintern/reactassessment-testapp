import UserForm from '../components/UserForm';
import classes from './FormPage.module.css';

import {Link, useParams} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {dataActions} from '../store/data';

const FormPage = () =>
{
    const params = useParams();
    const dispatch = useDispatch();
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
                {!params.userid && <Link 
                    to={backPath}
                    className={classes.subheadercontentleft}>
                        Back
                </Link>}
                {params.userid && <Link 
                    to={backPath} 
                    onClick={() => dispatch(dataActions.resetData())}
                    className={classes.subheadercontentleft}>
                        Back
                </Link>}
                <div 
                    onClick={() => dispatch(dataActions.clearData(params.userid))} 
                    className={classes.subheadercontentright}>
                        Clear Form
                </div>
            </div>
            <UserForm />
        </div>
    )
}

export default FormPage;