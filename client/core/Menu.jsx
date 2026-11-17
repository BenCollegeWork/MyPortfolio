import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import Button from '@mui/material/Button';
import auth from '../lib/auth-helper';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const isActive = (location, path) => {
    location.pathname === path ? { color: '#ff4081' } : { color: '#ffffff' };
}

export default function Menu() {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <AppBar position="static">
            <Toolbar sx={{ display: 'flex', gap: 2,  alignItems: 'center' }}>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    My Portfolio
                </Typography>
                <Link to="/">
                    <IconButton aria-label="Home" sx={{color: isActive(location, '/')?.color}}>
                        <HomeIcon />
                    </IconButton>
                </Link>

                <Link to="/users">
                    <Button sx={{color: isActive(location, '/users')}}>Users</Button>
                </Link>

                {!auth.isAuthenticated() && (
                    <>
                        <Link to="/signup">
                            <Button sx={{color: isActive(location, '/signup')}}>Sign Up</Button>
                        </Link>
                        <Link to="/signin">
                            <Button sx={{color: isActive(location, '/signin')}}>Sign In</Button>
                        </Link>
                    </>
                )}

                {auth.isAuthenticated() && (
                    <>
                        <Link to={`/profile/${auth.isAuthenticated().user._id}`}>
                            <Button sx={{color: isActive(location, `/user/${auth.isAuthenticated().user._id}`)}}>My Profile</Button>
                        </Link>
                        <Button sx={{color: '#ffffff'}} onClick={() => {
                            auth.clearJWT(() => navigate('/'));
                        }}>Sign Out</Button>
                    </>
                )}
            </Toolbar>
        </AppBar>
    )
};