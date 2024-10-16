import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './component/login';
import Signup from './component/Signup';
import Forgotpass from './component/forgotpass';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path='/forgot-password' element={<Forgotpass />} />
            </Routes>
        </Router>
    );
}

export default App;
