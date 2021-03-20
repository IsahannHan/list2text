import { Snackbar } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import React from 'react';
import AppContent from '../AppContent/AppContent';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import InfoIcon from '@material-ui/icons/Info';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import About from '../About/About';

export default function App() {
    // About
    const [openAbout, setOpenAbout] = React.useState(false);

    const handleOpenAbout = () => {
        setOpenAbout(true);
    }

    const handleCloseAbout = () => {
        setOpenAbout(false);
    };

    // Preferences

    const handleOpenPreferences = () => {
        notify('info', 'Feature in development');
    };

    // Notification

    const [openNotification, setOpenNotification] = React.useState(false);
    const [message, setMessage] = React.useState('');
    const [severity, setSeverity] = React.useState('');

    const notify = (messageSeverity, messageText) => {
        setSeverity(messageSeverity);
        setMessage(messageText);
        setOpenNotification(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenNotification(false);
    };

    // Speed dial

    const [openMenu, setOpenMenu] = React.useState(false);

    const speedDialActions = [
        {
            name: 'Preferences',
            icon: <FormatListBulletedIcon />,
            onClick: () => handleOpenPreferences(),
        },
        {
            name: 'About',
            icon: <InfoIcon />,
            onClick: () => handleOpenAbout(),
        },
    ];

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
                            key={action.key}
                            icon={action.icon}
                            tooltipTitle={action.name}
                            onClick={action.onClick}
                        />
                    );
                })}
            </SpeedDial>

            <About open={openAbout} onClose={handleCloseAbout} />

            <Snackbar open={openNotification} autoHideDuration={6000} onClose={handleClose}>
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
