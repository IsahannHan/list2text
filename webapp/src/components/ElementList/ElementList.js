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

export default class ElementList extends React.Component {
    constructor(props) {
        super(props);

        this.state = { open: false };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(value) {
        this.setState({ open: !value });
    }

    render() {
        return (
            <List component="nav">
                {[...this.props.elementsMap.keys()].map((key) => {
                    let value = this.props.elementsMap.get(key);

                    if (value instanceof Map) {
                        return (
                            <>
                                <ListItem key={key}>
                                    {this.state.open ? (
                                        <IconButton
                                            onClick={() =>
                                                this.handleClick(
                                                    this.state.open
                                                )
                                            }
                                            edge="start"
                                        >
                                            <ExpandLessIcon fontSize="small" />
                                        </IconButton>
                                    ) : (
                                        <IconButton
                                            onClick={() =>
                                                this.handleClick(
                                                    this.state.open
                                                )
                                            }
                                            edge="start"
                                        >
                                            <ExpandMoreIcon fontSize="small" />
                                        </IconButton>
                                    )}
                                    <ListItemText primary={key} />
                                    <ElementActionButtons
                                        value={key}
                                        isMap={true}
                                        editItem={this.props.editItem}
                                        deleteItem={this.props.deleteItem}
                                    />
                                </ListItem>
                                <Collapse
                                    key={`${key}.collapse`}
                                    in={this.state.open}
                                    timeout="auto"
                                    unmountOnExit
                                >
                                    <ElementList
                                        elementsMap={value}
                                        deleteItem={this.props.deleteItem}
                                    />
                                </Collapse>
                            </>
                        );
                    } else {
                        return (
                            <ListItem key={key}>
                                <ListItemText primary={key} secondary={value} />
                                <ElementActionButtons
                                    value={key}
                                    isMap={false}
                                    editItem={this.props.editItem}
                                    deleteItem={this.props.deleteItem}
                                />
                            </ListItem>
                        );
                    }
                })}
            </List>
        );
    }
}
