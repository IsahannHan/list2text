import { Container, Divider, Grid, Paper } from '@material-ui/core';
import React, { useContext, useState, useReducer } from 'react';
import TreeModel from 'tree-model';
import ActionButtons from '../ActionButtons/ActionButtons';
import ElementEditor from './ElementEditor/ElementEditor';
import ElementTree from './ElementTree/ElementTree';
import GeneratedText from './GeneratedText/GeneratedText';
import { ProfilesContext } from '../Contexts/ProfilesContext';

const Generator = () => {
    const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);

    const [elementTreeRoot, setElementTreeRoot] = useState(
        new TreeModel().parse({ id: 0, children: [] })
    );
    const [currentNode, setCurrentNode] = useState({});
    const [elementCount, setElementCount] = useState(1);
    const { profiles } = useContext(ProfilesContext);
    const [selectedProfile, setSelectedProfile] = useState(profiles[0]);

    const addItem = (parentId) => {
        // Create node
        const newNode = new TreeModel().parse({
            id: elementCount,
            key: `New element ${elementCount}`,
            value: 'Empty value',
            type: 'simple',
            children: [],
        });

        // Find parent for the node
        const parentNode = elementTreeRoot.first((node) => {
            return node.model.id === parentId;
        });

        // Add element to its parent
        parentNode.addChild(newNode);

        // Update state
        setElementCount(elementCount + 1);
    };

    const editItem = (id) => {
        const nodeToEdit = elementTreeRoot.first((node) => {
            return node.model.id === id;
        });

        setCurrentNode(nodeToEdit);
    };

    const deleteItem = (id) => {
        // Find node
        const treeRoot = elementTreeRoot;

        const nodeToDelete = treeRoot.first((node) => {
            return node.model.id === id;
        });

        const key = nodeToDelete.model.key;

        if (nodeToDelete === currentNode) setCurrentNode({});

        nodeToDelete.drop();

        forceUpdate();

        //this.props.notify('info', `"${key}" has been deleted!`);
    };

    const clearList = () => {
        setElementTreeRoot(new TreeModel().parse({ id: 0, children: [] }));
        setCurrentNode({});

        //this.props.notify('info', 'The element list has been cleared!');
    };

    const onChange = (event, id) => {
        let nodeBeingEdited = elementTreeRoot.first((node) => {
            return node.model.id === id;
        });

        const changedField = event.target.name;
        const changedValue = event.target.value;
        const nodeModel = {
            ...nodeBeingEdited.model,
            [changedField]: changedValue,
        };

        nodeBeingEdited.model = nodeModel;

        setCurrentNode(nodeBeingEdited);
        forceUpdate();
    };

    const handlePreferenceChange = (event) => {
        this.setState((prevState) => ({
            preferences: {
                ...prevState.preferences,
                [event.target.name]: [event.target.value],
            },
        }));
    };

    return (
        <>
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
                                addItem={addItem}
                                clearList={clearList}
                            />

                            <Divider variant="middle" />

                            <Container
                                style={{
                                    height: 500,
                                    overflow: 'scroll',
                                }}
                            >
                                <ElementTree
                                    id={elementTreeRoot.model.id}
                                    children={elementTreeRoot.children}
                                    addItem={addItem}
                                    editItem={editItem}
                                    deleteItem={deleteItem}
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
                            style={{ padding: '10px' }}
                        >
                            <Grid item xs={12}>
                                <ElementEditor
                                    onChange={onChange}
                                    element={currentNode}
                                    types={selectedProfile.types}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <GeneratedText
                                    profile={selectedProfile}
                                    root={elementTreeRoot}
                                />
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </>
    );
};

export default Generator;
