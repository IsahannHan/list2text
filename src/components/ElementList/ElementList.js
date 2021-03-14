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
                {this.props.elementList.map((element) => {
                    const key = element.key;
                    const value = element.value;
                    const id = element.id;

                    if (Array.isArray(value)) {
                        return (
                            <>
                                <ListItem key={id}>
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
                                        element={element}
                                        isComplex={true}
                                        editItem={this.props.editItem}
                                        deleteItem={this.props.deleteItem}
                                    />
                                </ListItem>
                                <Collapse
                                    key={`${id}.collapse`}
                                    in={this.state.open}
                                    timeout="auto"
                                    unmountOnExit
                                >
                                    <ElementList
                                        elementList={value}
                                        editItem={this.props.editItem}
                                        deleteItem={this.props.deleteItem}
                                    />
                                </Collapse>
                            </>
                        );
                    } else {
                        return (
                            <ListItem key={id}>
                                <ListItemText primary={key} secondary={value} />
                                <ElementActionButtons
                                    element={element}
                                    isComplex={false}
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
