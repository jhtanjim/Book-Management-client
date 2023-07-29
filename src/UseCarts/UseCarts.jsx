import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const UseCarts = () => {
    const { user } = useContext(AuthContext);
    const [carts, setCarts] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/carts?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setCarts(data);
            });
    }, []);

    // Return the carts data as a prop
    return carts;
};

export default UseCarts;
