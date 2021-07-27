import './App.css';
import { useCookies } from 'react-cookie';
import Dashboard from './containers.js/dashboard';
import Login from './containers.js/login';

function App() {
  const [cookies] = useCookies(['agilis-user']);

  return (
    <div className="App">
      {cookies['agilis-user'] ? <Dashboard /> : <Login />}
    </div>
  );
}

export default App;
