import React, { useState, useEffect } from 'react';
import  {
    Paper,
    List, 
    ListItem,
    ListItemText,
    ListItemAvatar,
    ListItemSecondaryAction,
    IconButton,
    Avatar,
    Typography,
    Link
} from '@mui/material';
import ArrowForward from '@mui/icons-material/ArrowForward'
import { list } from './api-user.js';
import { Link as RouterLink } from 'react-router-dom';

export default function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        list(signal).then((data) => {
            if (data?.error) {
                console.error(data.error);
            } else {
                setUsers(data);
            }
        });

        return () => {
            abortController.abort();
        }
    }, []);

    return (
        <Paper elevation={4} sx={{ maxWidth: 600, margin: 'auto', mt: 5, p: 3 }}>
            <Typography variant="h6" sx={{ mb: 2, color: "text primary" }}>
                All Users
            </Typography>
            <List dense>
                {users.map((user, i) => (
                    <Link component={RouterLink} to={`/user/${user._id}`} underline="none" key={user._id} sx={{ color: 'inherit' }}>
                        <ListItem button>
                            <ListItemAvatar>
                                <Avatar />
                            </ListItemAvatar>
                            <ListItemText primary={user.name} />
                            <ListItemSecondaryAction>
                                <IconButton edge="end">
                                    <ArrowForward />
                                </IconButton> 
                            </ListItemSecondaryAction>
                        </ListItem>
                    </Link>
                ))}             
            </List>
        </Paper>
    )
}