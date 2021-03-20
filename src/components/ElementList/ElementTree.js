import {
    Collapse,
    IconButton,
    List,
    ListItem,
    ListItemText,
} from '@material-ui/core';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from 'react';
import ElementActionButtons from './ElementActionButtons';

export default class ElementTree extends React.Component {
    constructor(props) {
        super(props);

        this.state = { open: false };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(value) {
        this.setState({ open: !value });
    }

    // Mounting element

    mountExpandButton(children) {
        if (children !== [] && children.length > 0) {
            return this.state.open ? (
                <IconButton
                    onClick={() => this.handleClick(this.state.open)}
                    edge="start"
                >
                    <ExpandLessIcon fontSize="small" />
                </IconButton>
            ) : (
                <IconButton
                    onClick={() => this.handleClick(this.state.open)}
                    edge="start"
                >
                    <ExpandMoreIcon fontSize="small" />
                </IconButton>
            );
        }

        return <></>;
    }

    mountItemText(key, value, children) {
        return (
            <ListItemText
                primary={key}
                secondary={children.length > 0 ? '' : value}
            />
        );
    }

    mountCollapseWithChildren(id, children) {
        if (children !== [] && children.length > 0) {
            return (
                <>
                    <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                        <ElementTree
                            id={id}
                            children={children}
                            addItem={this.props.addItem}
                            editItem={this.props.editItem}
                            deleteItem={this.props.deleteItem}
                        />
                    </Collapse>
                </>
            );
        }

        return <></>;
    }

    mountActionButtons(id) {
        return (
            <ElementActionButtons
                id={id}
                parentId={this.props.id}
                addItem={this.props.addItem}
                editItem={this.props.editItem}
                deleteItem={this.props.deleteItem}
            />
        );
    }

    mountItem(id, key, value, children) {
        return (
            <>
                <ListItem key={id}>
                    {this.mountExpandButton(children)}
                    {this.mountItemText(key, value, children)}
                    {this.mountActionButtons(id)}
                </ListItem>
                {this.mountCollapseWithChildren(id, children)}
            </>
        );
    }

    render() {
        return this.props.children.map((child) => {
            const id = child.model.id;
            const key = child.model.key;
            const value = child.model.value;
            const children = child.children;

            return this.mountItem(id, key, value, children);
        });
    }
}
