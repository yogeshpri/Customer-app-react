// src/components/CustomerList.js
import React, { useEffect, useState } from 'react';
import { getCustomers, deleteCustomer } from '../services/CustomerServices';
import { useNavigate } from 'react-router-dom';

const CustomerList = () => {
    const [customers, setCustomers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchCustomers();
    }, []);

    const fetchCustomers = async () => {
        const data = await getCustomers();
        setCustomers(data);
    };

    const handleEdit = (id) => {
        navigate(`/edit/${id}`);
    };

    const handleDelete = async (id) => {
        await deleteCustomer(id);
        fetchCustomers();
    };

    return (
        <div>
            <h2>Customer List</h2>
            <button onClick={() => navigate('/customers/new')}>Add New Customer</button>
            <ul>
                {customers.map((customer) => (
                    <li key={customer.id}>
                        {customer.name} ({customer.email})
                        <button onClick={() => handleEdit(customer.id)}>Edit</button>
                        <button onClick={() => handleDelete(customer.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CustomerList;
