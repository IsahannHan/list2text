import React from 'react';

import {
    Collapse,
    Container,
    CssBaseline,
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

import Element from '../../commons/model/element';

export default function ElementList(props) {
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    function createItem(element) {
        return (
            <>
                <ListItem button onClick={handleClick}>
                    {generateExpand(element)}
                    <ListItemText
                        primary={element.title}
                        secondary={element.value?? ''}
                    />
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
                {generateCollapse(element)}
            </>
        );
    }

    function generateCollapse(element) {
        if (element instanceof Element) {
            return (
                <Collapse in={open} timeout="auto" unmountOnExit>
                    {Object.keys(element).map(prop => {
                        return <ElementList
                            baseElement={
                                element[prop] instanceof Element
                                    ? element[prop]
                                    : { title: prop, value: element[prop] }
                            }
                        />;
                    })}
                </Collapse>
            );
        } else {
            return '';
        }
    }

    function generateExpand(element) {
        if (element instanceof Element) {
            return (
                <>
                    {open ? (
                        <IconButton edge="start">
                            <ExpandLessIcon fontSize="small" />
                        </IconButton>
                    ) : (
                        <IconButton onClick={handleClick} edge="start">
                            <ExpandMoreIcon fontSize="small" />
                        </IconButton>
                    )}
                </>
            );
        } else {
            return '';
        }
    }

    return <List component="nav">{createItem(props.baseElement)}</List>;
}
