import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';

export default function About(props) {
    const redirect = (url) => {
        window.open(url, '_blank');
    };

    return (
        <>
            <DialogTitle id="simple-dialog-title" align="center">
                List2Text - v1.0.0
            </DialogTitle>
            <Typography
                align="center"
                style={{ padding: '5px' }}
                variant="body1"
                gutterBottom
            >
                Created by <b>Isahann Hanacleto</b> <br />
                <IconButton
                    onClick={() => redirect('https://github.com/IsahannHan')}
                >
                    <GitHubIcon />
                </IconButton>
                <br />
                Designed to help{' '}
                <a href="https://www.moddb.com/mods/he-came-from-beyond">
                    He Came From Beyond
                </a>{' '}
                development
            </Typography>
        </>
    );
}
