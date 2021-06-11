import './App.css';
import axios from 'axios';
import MainPage from './pages/MainPage';
import FormPage from './pages/FormPage';
import RemovePage from './pages/RemovePage';

import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {userActions} from './store/user';
import {Route, Switch, Redirect} from 'react-router-dom';

function App() 
{
  const dispatch = useDispatch();

  useEffect(() =>
  {
    const fetchData = async () =>
    {
      const resData = await axios.get('https://jsonplaceholder.typicode.com/users');
      dispatch(userActions.setFetchedData(resData.data));
    }

    fetchData();
  }, [])

  return (
    <div>
      <Switch>
          <Route path='/' exact>
            <Redirect to='/Main' />
          </Route>
          <Route path="/Main" exact>
            <MainPage />
          </Route>
          <Route path="/AddUser">
            <FormPage />
          </Route>
          <Route path="/EditUser/:userid">
            <FormPage />
          </Route>
          <Route path="/RemoveUser/:userid">
            <RemovePage />
          </Route>
          <Route path="/">
            <Redirect to='/Main' />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
