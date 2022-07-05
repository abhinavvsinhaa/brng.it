import { Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import SignUp from './components/Login/SignUp';
import Navigation from './components/Navigation/Navigation';

export default function Routing() {
    return (
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/dashboard' element={<Navigation/>}/>
        </Routes>
    );
}