// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomerList from './components/CustomerList';
import CustomerForm from './components/CustomerForm';
import HealthCheck from './components/HealthCheck';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                <Route path="/" element={<HealthCheck />} /> 
                    <Route path="/customers" element={<CustomerList />} />
                    <Route path="/customers/new" element={<CustomerForm />} />
                    <Route path="/edit/:id" element={<CustomerForm />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
