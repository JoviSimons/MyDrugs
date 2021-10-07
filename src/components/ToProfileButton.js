import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const ToProfileButton = () => {

    const { isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
        <Link style={{ textDecoration: 'none' }} to={`/profile`}>
        <Button variant="text">Profile</Button>
        </Link>
        )
    )
}

export default ToProfileButton;