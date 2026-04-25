import React, { useEffect, useState } from 'react';
import { fetchUser } from '../api/users';
export default function UserProfile({ userId }) {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    //Below code used for testing purpose
    //const [vars, setVars] = useState(0);

    useEffect(() => {
        setLoading(true);

        fetchUser(userId)
            .then(data => setUser(data))
            .catch(err => setError(err.message))
            .finally(() => setLoading(false));
    }, [userId]);


    if (loading) return <p>Loading...</p>;
    if (error)
        return
    <p>Error: {error}
    </p>;
    return <div>Welcome, {user.name}!</div>;
}
