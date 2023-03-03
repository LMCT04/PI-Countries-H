import './App.css';
import { Home, Landing, Detail, Form } from './views';
import NavBar from './components/NavBar/NavBar';
// import Home from './views/Home/Home';
// import Landing from './views/Landing/Landing';
// import Detail from './views/Detail/Detail';
// import Form from './views/Form/Form';

import { Route, useLocation } from 'react-router-dom';

function App() {

  const location = useLocation();

  return (
    <div className="App">

      {  location.pathname !== '/' && <NavBar/>  }
      <Route exact path='/' component = {Landing} />
      <Route path='/home' component = {Home} />
      <Route exact path='/detail' component = {Detail} />
      <Route exact path='/form' component = {Form} />
    </div>
  );
}

export default App;
