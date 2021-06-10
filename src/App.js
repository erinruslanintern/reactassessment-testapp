import './App.css';
import UserList from './components/UserList';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {userActions} from './store/user';

function App() 
{
  const dispatch = useDispatch();

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

  return (
    <div className="App">
      <UserList />
    </div>
  );
}

export default App;
