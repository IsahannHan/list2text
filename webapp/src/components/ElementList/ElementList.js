import React from 'react';

import {
    Collapse,
    Container,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemSecondaryAction,
    ListItemText,
    Tooltip,
} from '@material-ui/core';
import { green, red, blue } from '@material-ui/core/colors';

import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function ElementList() {
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <Container>
            <List dense>
                <ListItem button onClick={handleClick}>
                    {open ? (
                        <IconButton edge="start">
                            <ExpandLessIcon fontSize="small" />
                        </IconButton>
                    ) : (
                        <IconButton edge="start">
                            <ExpandMoreIcon fontSize="small" />
                        </IconButton>
                    )}
                    <ListItemText primary="Conversation" />
                    <ListItemSecondaryAction>
                        <IconButton edge="end">
                            <AddBoxOutlinedIcon
                                fontSize="small"
                                style={{ color: green[500] }}
                            />
                        </IconButton>
                        <IconButton edge="end">
                            <EditOutlinedIcon
                                fontSize="small"
                                style={{ color: blue[300] }}
                            />
                        </IconButton>
                        <IconButton edge="end">
                            <DeleteOutlinedIcon
                                fontSize="small"
                                style={{ color: red[300] }}
                            />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button>
                            <ListItemText primary="test" />
                        </ListItem>
                    </List>
                </Collapse>
            </List>
        </Container>
    );
}

export default ElementList;
