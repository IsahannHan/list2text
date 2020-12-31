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
import BaseFile from '../../model/usdf/basefile';
import Conversation from '../../model/usdf/conversation';

function ElementList() {
    const [open, setOpen] = React.useState(true);

    let baseFile = new BaseFile(
        'teste',
        'bananinha',
        new Conversation('joãozin', 'retarda', 5)
    );

    const handleClick = () => {
        setOpen(!open);
    };

    function createComplexItem(element) {
        return (
            <ListItem button onClick={handleClick}>
                {open ? (
                    <IconButton edge="start">
                        <ExpandLessIcon fontSize="small" />
                    </IconButton>
                ) : (
                    <IconButton onClick={handleClick} edge="start">
                        <ExpandMoreIcon fontSize="small" />
                    </IconButton>
                )}
                <ListItemText primary={element.title} />
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
            <List component="nav" disablePadding>
                <ListItem button>
                    <ListItemText primary="ALOO"/>
                </ListItem>
                <ListItem button>
                    <ListItemText primary="XOXOXO"/>
                </ListItem>
                {/* {Object.keys(element).forEach(prop => generateElements(prop, element[prop]))} */}
            </List>
        </Collapse>
        );
    }

    function createSimpleItem (element, value) {
        return (
            <ListItem button>
                <ListItemText primary={element + value} />
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
        );
    }

    function generateElements(element, value) {
        // console.log(`O ${prop} É INSTANCEOF ELEMENT`);
        // Element, will need to create the base and its objects
        if (element instanceof Element) {
            console.log("creating complex item: " + element);
            return createComplexItem(element);
        } else {
            console.log("creating simple item: " + element + ": " + value);
            return createSimpleItem(element, value);
            // Object.keys(element).forEach((prop) => {
            //     console.log(prop);
            // });
        }
    }

    return (
        <Container>
            <List component="nav">
                {generateElements(baseFile)}
            </List>
        </Container>
    );
}

export default ElementList;
