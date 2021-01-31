import { IconButton, ListItemSecondaryAction } from '@material-ui/core';
import { blue, green, red } from '@material-ui/core/colors';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import React from 'react';

export default function ElementActionButtons(props) {
    const isMap = props.isMap;
    const buttons = [
        {
            key: 'Add',
            element: (
                <AddBoxOutlinedIcon
                    fontSize="small"
                    style={{ color: green[500] }}
                />
            ),
            action: null,
            shouldRender: isMap,
        },
        {
            key: 'Edit',
            element: (
                <EditOutlinedIcon
                    fontSize="small"
                    style={{ color: blue[300] }}
                />
            ),
            action: () => props.editItem(props.value),
            shouldRender: true,
        },
        {
            key: 'Delete',
            element: (
                <DeleteOutlinedIcon
                    fontSize="small"
                    style={{ color: red[300] }}
                />
            ),
            action: () => props.deleteItem(props.value),
            shouldRender: true,
        },
    ];

    return (
        <ListItemSecondaryAction>
            {buttons.map((button) => {
                return (
                    <IconButton key={button.key} edge="end" onClick={button.action}>
                        {button.shouldRender ? button.element : ''}
                    </IconButton>
                );
            })}
        </ListItemSecondaryAction>
    );
}
