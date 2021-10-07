import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Button } from '@mui/material';

const LogoutButton = () => {

    const { logout, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && ( //if user is logged in the logout button shows
            <Button onClick={() => logout()} variant="text">Log out</Button>
        )
    )
}

export default LogoutButton;