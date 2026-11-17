import React, { useState, useEffect } from 'react';
import {
    Card, 
    CardActions, 
    CardContent,
    Button, 
    TextField,
    Typography,
    Icon
} from '@mui/material';
import auth from '../lib/auth-helper';
import { read, update } from './api-user.js';
import { Navigate, useParams } from 'react-router-dom';

export default function EditProfile() {
    const { userId } = useParams();
    const [values, setValues] = useState({
        name: '',
        password: '',
        email: '',
        open : false,
        error: '',
        NavigateToProfile: false
    });

    const jwt = auth.isAuthenticated();

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        read({ userId }, { t: jwt.token }, signal).then((data) => {
            if (data?.error) {
                setValues({ ...values, error: data.error });
            } else {
                setValues({ ...values, name: data.name, email: data.email });
            }
        });

        return () => {
            abortController.abort();
        };
    }, [userId]);

    const clickSubmit = () => {
        const user = {
            name: values.name || undefined,
            email: values.email || undefined,
            password: values.password || undefined
        };
        update({ userId }, { t: jwt.token }, user).then((data) => {
            if (data?.error) {
                setValues((prev) => ({ ...prev, error: data.error }));
            } else {
                setValues((prev) => ({ ...prev, userId: data._id, NavigateToProfile: true }));
            }
        });
    };

    const handleChange = (name) => (event) => {
        setValues({ ...values, [name]: event.target.value });
    };

    if (values.NavigateToProfile) {
        return <Navigate to={`/user/${values.userId}`} />;
    }

    return  (
        <Card sx={{ maxWidth: 600, mx: 'auto', mt: 5, textAlign: 'center', p: 2 }}>
            <CardContent>
                <Typography variant="h6" sx={{ mt: 2, mb: 2, color: "text primary" }}>
                    Edit Profile
                </Typography>
                <TextField
                    id="name"
                    label="Name"
                    values={values.name}
                    onChange={handleChange('name')}
                    margin="normal"
                    sx={{ width: 300, mx: 1 }}
                />
                <br />
                <TextField
                    id="email"
                    type="email"
                    label="Email"
                    values={values.email}
                    onChange={handleChange('email')}
                    margin="normal"
                    sx={{ width: 300, mx: 1 }}
                />
                <br />
                <TextField
                    id="password"
                    type="password"
                    label="Password"
                    values={values.password}
                    onChange={handleChange('password')}
                    margin="normal"
                    sx={{ width: 300, mx: 1 }}
                />
                <br />
                {values.error && (
                    <Typography component="p" color="error" sx={{ mt: 1 }}>
                        <Icon color="error" sx={{ verticalAlign: 'middle', mr: 1 }}>error</Icon>
                        {values.error}
                    </Typography>
                )}
            </CardContent>
            <CardActions sx={{ justifyContent: 'center'}}>
                <Button variant="contained" color="primary" onClick={clickSubmit} sx={{ mb: 2 }}>
                    Submit
                </Button>
            </CardActions>
        </Card>
    )
}