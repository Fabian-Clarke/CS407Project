import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignUP from './SignUP.jsx';

export default function App() {
    return (
        <>
            <div>
                <h1>Welcome to the App</h1>
                <p>This is the main application component.</p>
            </div>
            <Routes>
                <Route path="/signup" element={<SignUP />} />
            </Routes>
        </>
    );
}