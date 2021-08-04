import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { Snackbar } from '@material-ui/core';
import Generator from '../Generator/Generator';
import ProfilesProvider from '../Contexts/ProfilesContext';
import Settings from '../Settings/Settings';
import Welcome from '../Welcome/Welcome';
import { Alert } from '@material-ui/lab';
import AppDrawer from '../AppDrawer/AppDrawer';

export default function App() {
    // Notification

    // const [openNotification, setOpenNotification] = React.useState(false);
    // const [message, setMessage] = React.useState('');
    // const [severity, setSeverity] = React.useState('');

    // const notify = (messageSeverity, messageText) => {
    //     setSeverity(messageSeverity);
    //     setMessage(messageText);
    //     setOpenNotification(true);
    // };

    // const handleClose = (event, reason) => {
    //     if (reason === 'clickaway') {
    //         return;
    //     }

    //     setOpenNotification(false);
    // };

    //


    return (
        <>
            <BrowserRouter>
                <AppDrawer></AppDrawer>
            </BrowserRouter>

            {/* <Snackbar
                open={openNotification}
                autoHideDuration={6000}
                onClose={handleClose}
            >
                <Alert
                    elevation={3}
                    variant="filled"
                    severity={severity}
                    onClose={handleClose}
                >
                    {message}
                </Alert>
            </Snackbar> */}
        </>
    );
}
