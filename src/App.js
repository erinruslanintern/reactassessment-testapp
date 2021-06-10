import './App.css';
import UserList from './components/UserList';
import UserForm from './components/UserForm';

import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {userActions} from './store/user';

function App() 
{
  const dispatch = useDispatch();
  const data = useSelector(state => state.user.users);

  useEffect(() =>
  {
    const fetchData = async () =>
    {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const resData = await res.json();
      dispatch(userActions.setFetchedData(resData));
    }

    fetchData();
  }, [])

  useEffect(() =>
  {
    console.log(data);
  }, [data])

  return (
    <div>
      <button>Add New User</button>
      <h1>
        Users
      </h1>
      <UserForm />
    </div>
  );
}

export default App;
