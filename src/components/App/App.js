import { Snackbar } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import React from 'react';
import AppContent from '../AppContent/AppContent';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';

export default function App() {
    // Notification
    const [open, setOpen] = React.useState(false);
    const [message, setMessage] = React.useState('');
    const [severity, setSeverity] = React.useState('');

    // Speed dial

    const [openMenu, setOpenMenu] = React.useState(false);
    const speedDialActions = [
        {
            key: 'Preferences',
            icon: '',
            tooltip: '',
        },
        {
            label: 'About',
        },
    ];

    const notify = (messageSeverity, messageText) => {
        setSeverity(messageSeverity);
        setMessage(messageText);
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const handleCloseMenu = () => {
        setOpenMenu(false);
    };

    const handleOpenMenu = () => {
        setOpenMenu(true);
    };

    return (
        <>
            <AppContent notify={notify} />

            <SpeedDial
                ariaLabel="SpeedDial example"
                icon={<SpeedDialIcon />}
                onClose={handleCloseMenu}
                onOpen={handleOpenMenu}
                open={openMenu}
                style={{
                    position: 'fixed',
                    bottom: '30px',
                    right: '30px',
                }}
            >
                {speedDialActions.map((action) => {
                    return (
                        <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                            onClick={handleClose}
                        />
                    );
                })}
            </SpeedDial>

            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert
                    elevation={3}
                    variant="filled"
                    severity={severity}
                    onClose={handleClose}
                >
                    {message}
                </Alert>
            </Snackbar>
        </>
    );
}
