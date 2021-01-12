import { Button, ButtonGroup, Grid } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import React from 'react';
import './ElementListButtons.css';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

function ElementListButtons() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Grid
            container
            alignItems="center"
            justify="center"
            className="main-container"
            style={{ padding: '5%' }}
        >
            <ButtonGroup
                disableElevation
                variant="contained"
                aria-label="contained button group"
            >
                <Button
                    style={{ color: '#FFFFFF', backgroundColor: green[300] }}
                    endIcon={<AddBoxOutlinedIcon />}
                >
                    New
                </Button>
                <Menu
                    id="add-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}></MenuItem>
                    <MenuItem onClick={handleClose}>Maçã</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>

                <Button color="secondary" startIcon={<DeleteOutlinedIcon />}>
                    Clear
                </Button>
            </ButtonGroup>
        </Grid>
    );
}

export default ElementListButtons;
