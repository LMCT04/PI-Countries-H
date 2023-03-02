import './App.css';

import Home from './views/Home/Home';
import Landing from './views/Landing/Landing';
import Detail from './views/Detail/Detail';
import Form from './views/Form/Form';

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route path='/home' >
        <Home />
      </Route>

      <Route exact path='/' >
        <Landing />
      </Route>

      <Route path='/detail' >
        <Detail />
      </Route>

      <Route path='/form' >
        <Form />
      </Route>
    </div>
  );
}

export default App;
