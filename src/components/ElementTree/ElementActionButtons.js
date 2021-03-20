import { IconButton, ListItemSecondaryAction } from '@material-ui/core';
import { blue, green, red } from '@material-ui/core/colors';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import React from 'react';

export default function ElementActionButtons(props) {
    const buttons = [
        {
            key: 'Add',
            icon: (
                <AddBoxOutlinedIcon
                    fontSize="small"
                    style={{ color: green[500] }}
                />
            ),
            action: () => props.addItem(props.id),
        },
        {
            key: 'Edit',
            icon: (
                <EditOutlinedIcon
                    fontSize="small"
                    style={{ color: blue[300] }}
                />
            ),
            action: () => props.editItem(props.id),
        },
        {
            key: 'Delete',
            icon: (
                <DeleteOutlinedIcon
                    fontSize="small"
                    style={{ color: red[300] }}
                />
            ),
            action: () => props.deleteItem(props.id),
        },
    ];

    return (
        <ListItemSecondaryAction>
            {buttons.map((button) => {
                return (
                    <IconButton key={button.key} edge="end" onClick={button.action}>
                        {button.icon}
                    </IconButton>
                );
            })}
        </ListItemSecondaryAction>
    );
}
