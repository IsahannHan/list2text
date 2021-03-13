import React from 'react'
import { AppBar, Toolbar } from '@material-ui/core';

export default class Footer extends React.Component {
    render() {
        return <AppBar position="fixed" color="primary" style={{top: 'auto', bottom: 0}}>
            <Toolbar>
                {/* <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                >
                    <MenuIcon />
                </IconButton>
                <Fab
                    color="secondary"
                    aria-label="add"
                    className={classes.fabButton}
                >
                    <AddIcon />
                </Fab>
                <div className={classes.grow} />
                <IconButton color="inherit">
                    <SearchIcon />
                </IconButton>
                <IconButton edge="end" color="inherit">
                    <MoreIcon />
                </IconButton> */}
            </Toolbar>
        </AppBar>;
    }
}
