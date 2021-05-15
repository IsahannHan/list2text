import {
    Collapse,
    IconButton,
    ListItem,
    ListItemText,
} from '@material-ui/core';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React, { useState, useCallback, useContext } from 'react';
import ElementActionButtons from './ElementActionButtons';

const Context = React.createContext({})

const ElementTree =({ addItem, editItem, deleteItem, children }) => {
    // Mounting element

    return (
        <Context.Provider value={{ addItem, editItem, deleteItem }}>
            {children.map((child) => {
                const id = child.model.id;
                const key = child.model.key;
                const value = child.model.value;
                const children = child.children;

                return <MountItem id={id} key={id} name={key} value={value}>{children}</MountItem>
            })}    
        </Context.Provider>
    );
}

const MountExpandButton = ({ open, handleClick }) => {
    return (
        <IconButton
            onClick={handleClick}
            edge="start"
        >
            { open ? <ExpandLessIcon fontSize="small" /> : <ExpandMoreIcon fontSize="small" />}
        </IconButton>
    )
}

const MountCollapseWithChildren = ({ id, children, open }) => {
    const { addItem, editItem, deleteItem } = useContext(Context)
    
    return (
        <>
            <Collapse in={open} timeout="auto" unmountOnExit style={{ paddingLeft: 15 }}>
                <ElementTree
                    id={id}
                    children={children}
                    addItem={addItem}
                    editItem={editItem}
                    deleteItem={deleteItem}
                />
            </Collapse>
        </>
    );

    return <></>;
}

const MountActionButtons = ({id}) => {
    const { addItem, editItem, deleteItem } = useContext(Context)
    return (
        <ElementActionButtons
            id={id}
            addItem={addItem}
            editItem={editItem}
            deleteItem={deleteItem}
        />
    );
}

const MountItem = ({id, name, value, children}) => {
    const [open, setOpen] = useState(false)

    const handleClick = useCallback(() =>{
        setOpen(prev  => !prev)
    }, [])

    console.log(value, name)

    return (
        <>
            <ListItem key={id}>
                {children.length > 0 ? <MountExpandButton open={open} handleClick={handleClick} /> : <div style={{ width: 32 }}/>}
                <ListItemText
                    primary={name}
                    secondary={children.length > 0 ? '' : value}
                />
                <MountActionButtons id={id}/>
            </ListItem>
            {children.length > 0 && <MountCollapseWithChildren id={id} open={open}>{children}</MountCollapseWithChildren>}
        </>
    );
}

export default ElementTree
