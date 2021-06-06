import { Snackbar } from '@material-ui/core';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import InfoIcon from '@material-ui/icons/Info';
import Alert from '@material-ui/lab/Alert';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import React from 'react';
import About from '../About/About';
import AppContent from '../AppContent/AppContent';
import Preferences from '../Preferences/Preferences';
import Dialog from '@material-ui/core/Dialog';

import profiles from '../../resources/profiles';
import { ProfilesProvider } from '../Contexts/ProfilesContext';

export default function App() {
    // About
    const [openAbout, setOpenAbout] = React.useState(false);

    const handleOpenAbout = () => {
        setOpenAbout(true);
    };

    const handleCloseAbout = () => {
        setOpenAbout(false);
    };

    // Preferences

    const [openPreferences, setOpenPreferences] = React.useState(false);

    const handleOpenPreferences = () => {
        setOpenPreferences(true);
    };

    const handleClosePreferences = () => {
        setOpenPreferences(false);
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

    //
    return (
        <>
            <ProfilesProvider value = {profiles}>
                <AppContent notify={notify} />

                <Dialog open={openPreferences} onClose={handleClosePreferences}>
                    <Preferences />
                </Dialog>
            </ProfilesProvider>

            <About open={openAbout} onClose={handleCloseAbout} />

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

            <Snackbar
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
            </Snackbar>
        </>
    );
}
