import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register.tsx';
import Login from './components/logIn.tsx';
import Approve from './components/approve.tsx';
import Upload from './components/upload.tsx';


const AppRoutes = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/approve" element={<Approve />} />
            <Route path="/upload" element={<Upload />} />
            
        </Routes>
    </Router>
);

export default AppRoutes;
