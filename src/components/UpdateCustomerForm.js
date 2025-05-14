import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function UpdateCustomerForm() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [customer, setCustomer] = useState({ name: '', email: '', phone: '' });

    useEffect(() => {
        const fetchCustomer = async () => {
            const response = await fetch(`http://localhost:8080/api/customers/${id}`);
            const data = await response.json();
            setCustomer(data);
        };
        fetchCustomer();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        await fetch(`http://localhost:8080/api/customers/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(customer),
        });

        navigate('/customers');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    value={customer.name}
                    onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={customer.email}
                    onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
                />
            </div>
            <div>
                <label>Phone:</label>
                <input
                    type="tel"
                    value={customer.phone}
                    onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                />
            </div>
            <button type="submit">Update Customer</button>
        </form>
    );
}

export default UpdateCustomerForm;
