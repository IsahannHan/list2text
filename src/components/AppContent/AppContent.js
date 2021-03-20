import { Container, Divider, Grid, Paper } from '@material-ui/core';
import React from 'react';
import TreeModel from 'tree-model';
import ActionButtons from '../ActionButtons/ActionButtons';
import ElementEditor from '../ElementEditor/ElementEditor';
import ElementTree from '../ElementTree/ElementTree';
import GeneratedText from '../GeneratedText/GeneratedText';

class AppContent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            severity: '',
            text: '',
            open: false,
            currentNode: {},
            elementTreeRoot: new TreeModel().parse({
                id: 0,
                children: [],
            }),
            elementCount: 1,
            profiles: [
                {
                    name: 'default',
                    description: 'Default profile',
                    types: [
                        {
                            type: 'simple',
                            preferences: {
                                keyStart: '',
                                keyEnd: '',

                                valueStart: '"',
                                valueEnd: '",',

                                lineStart: '',
                                lineEnd: '',

                                assigner: ' : ',
                            },
                            nestedLevel: 0,
                            nestedItemStart: '\t',
                        },
                        {
                            type: 'complex',
                            preferences: {
                                keyStart: '',
                                keyEnd: '',

                                valueStart: '"',
                                valueEnd: '",',

                                lineStart: '',
                                lineEnd: '',

                                assigner: ' : ',
                            },
                            nestedLevel: 0,
                            nestedItemStart: '\t',
                        },
                    ],
                },
            ],
            selectedProfile: {
                name: 'default',
                description: 'Default profile',
                types: [
                    {
                        type: 'simple',
                        preferences: {
                            keyStart: '',
                            keyEnd: '',

                            valueStart: '"',
                            valueEnd: '",',

                            lineStart: '',
                            lineEnd: '\n',

                            assigner: ' : ',
                        },
                    },
                    {
                        type: 'complex',
                        preferences: {
                            keyStart: '',
                            keyEnd: '',

                            valueStart: '{\n',
                            valueEnd: '}\n',

                            lineStart: '',
                            lineEnd: '',

                            assigner: ' : ',
                        },
                    },
                ],
                nestedLevel: 0,
                nestedItemStart: '\t',
            },
        };

        this.addItem = this.addItem.bind(this);
        this.editItem = this.editItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.clearList = this.clearList.bind(this);

        this.handlePreferenceChange = this.handlePreferenceChange.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    addItem(parentId) {
        // Create node
        const newNode = new TreeModel().parse({
            id: this.state.elementCount,
            key: `New element ${this.state.elementCount}`,
            value: 'Empty value',
            type: 'simple',
            children: [],
        });

        // Find parent for the node
        const parentNode = this.state.elementTreeRoot.first((node) => {
            return node.model.id === parentId;
        });

        // Add element to its parent
        parentNode.addChild(newNode);

        // Update state
        this.setState((prevState) => ({
            elementCount: prevState.elementCount + 1,
        }));
    }

    editItem(id) {
        const nodeToEdit = this.state.elementTreeRoot.first((node) => {
            return node.model.id === id;
        });

        this.setState({
            currentNode: nodeToEdit,
        });
    }

    deleteItem(id) {
        // Find node
        const nodeToDelete = this.state.elementTreeRoot.first((node) => {
            return node.model.id === id;
        });
        const key = nodeToDelete.model.key;

        if (nodeToDelete === this.state.currentNode) {
            this.setState({ currentNode: {} });
        }

        nodeToDelete.drop();

        this.setState({});

        this.props.notify('info', `"${key}" has been deleted!`);
    }

    clearList() {
        this.setState({
            elementTreeRoot: new TreeModel().parse({ id: 0, children: [] }),
            currentNode: {},
        });

        this.props.notify('info', 'The element list has been cleared!');
    }

    onChange(event, id) {
        let nodeBeingEdited = this.state.elementTreeRoot.first((node) => {
            return node.model.id === id;
        });

        const changedField = event.target.name;
        const changedValue = event.target.value;
        const nodeModel = {
            ...nodeBeingEdited.model,
            [changedField]: changedValue,
        };

        nodeBeingEdited.model = nodeModel;

        this.setState({
            currentNode: nodeBeingEdited,
        });
    }

    handlePreferenceChange(event) {
        this.setState((prevState) => ({
            preferences: {
                ...prevState.preferences,
                [event.target.name]: [event.target.value],
            },
        }));
    }

    // Notification

    alert(severity, message) {
        this.setState({
            open: true,
            severity: severity,
            message: message,
        });
    }

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({ open: false });
    };

    render() {
        return (
            <>
                {/* <Preferences
                    preferences={this.state.preferences}
                    onChange={this.handlePreferenceChange}
                /> */}
                <Grid
                    container
                    spacing={3}
                    alignItems="center"
                    justify="center"
                    style={{ minHeight: '100vh', width: '100%' }}
                >
                    <Grid item xs={3}>
                        <Paper elevation={3}>
                            <Grid container spacing={2} direction="column">
                                <ActionButtons
                                    elementList={this.elementList}
                                    addItem={this.addItem}
                                    clearList={this.clearList}
                                />

                                <Divider variant="middle" />

                                <Container
                                    style={{
                                        height: 500,
                                        overflow: 'scroll',
                                    }}
                                >
                                    <ElementTree
                                        id={this.state.elementTreeRoot.model.id}
                                        children={
                                            this.state.elementTreeRoot.children
                                        }
                                        addItem={this.addItem}
                                        editItem={this.editItem}
                                        deleteItem={this.deleteItem}
                                    />
                                </Container>
                            </Grid>
                        </Paper>
                    </Grid>

                    <Grid item xs={6}>
                        <Paper elevation={3}>
                            <Grid
                                container
                                alignItems="center"
                                justify="center"
                                spacing={3}
                                style={{padding: '10px'}}
                            >
                                <Grid item xs={12}>
                                    <ElementEditor
                                        onChange={this.onChange}
                                        element={this.state.currentNode}
                                        types={this.state.selectedProfile.types}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <GeneratedText
                                        profile={this.state.selectedProfile}
                                        root={this.state.elementTreeRoot}
                                        notify={this.props.notify}
                                    />
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </>
        );
    }
}

export default AppContent;
