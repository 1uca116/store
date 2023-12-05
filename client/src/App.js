import './styles/index.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar/Navbar';
import { observer } from 'mobx-react-lite';
import {useContext, useEffect, useState} from 'react';
import { Context } from './index';
import {check} from "./http/userApi";
import Spinner from "./components/core/spinner";

const App = observer(() => {
  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(()=> {
      setTimeout(()=> {
          check().then(data => {
              user.setUser(true);
              user.setIsAuth(true)
          }).finally(()=> setLoading(false))
      }, 10000)

  }, [])

    if (loading) {
        return <Spinner/>
    }
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
});

export default App;
