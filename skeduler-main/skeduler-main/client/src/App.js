import './App.css';
import 'antd/dist/antd.css';
import UrlFront from './components/UrlFront/UrlFront';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


import Navigation from './components/Layout/Navigation';
import UrlRedirect from './components/UrlRedirectPage/UrlRedirect';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Navigation/>}></Route>
          <Route exact path='/url' element={<UrlFront/>}></Route>
          <Route exact path='/url/:uid' element={<UrlRedirect/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
