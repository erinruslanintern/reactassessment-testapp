import './App.css';
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
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const resData = await res.json();
      dispatch(userActions.setFetchedData(resData));
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
