// src/components/CustomerForm.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { addCustomer, updateCustomer, getCustomerById } from '../services/CustomerServices';

const CustomerForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [customer, setCustomer] = useState({ name: '', email: '' });

    useEffect(() => {
        if (id) {
            const fetchCustomer = async () => {
                try {
                    const data = await getCustomerById(id);
                    setCustomer(data);
                } catch (error) {
                    console.error('Error loading customer:', error);
                }
            };
            fetchCustomer();
        }
    }, [id]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (id) {
                await updateCustomer(id, customer);
            } else {
                await addCustomer(customer);
            }
            navigate('/customers');
        } catch (error) {
            console.error('Error saving customer:', error);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCustomer({ ...customer, [name]: value });
    };

    return (
        <div>
            <h2>{id ? 'Edit Customer' : 'Add New Customer'}</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={customer.name} onChange={handleChange} required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={customer.email} onChange={handleChange} required />
                </div>
                <button type="submit">{id ? 'Update' : 'Add'} Customer</button>
            </form>
        </div>
    );
};

export default CustomerForm;
