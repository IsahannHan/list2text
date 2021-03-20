import { Container, Divider, Grid, Paper } from '@material-ui/core';
import React from 'react';
import ActionButtons from '../ActionButtons/ActionButtons';
import ElementEditor from '../ElementEditor/ElementEditor';
import ElementTree from '../ElementList/ElementTree';
import GeneratedText from '../GeneratedText/GeneratedText';
import TreeModel from 'tree-model';
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentElement: {},
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
        this.handleItemChanged = this.handleItemChanged.bind(this);
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
        const parentNode = this.state.elementTreeRoot.first(function (node) {
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
        this.setState({
            currentElement: this.state.elementList.find((e) => e.id === id),
        });
    }

    deleteItem(id) {
        const element = this.state.elementList.find((e) => e.id === id);

        if (Array.isArray(element.value)) {
            element.value = [];
        }

        this.setState((prevState) => ({
            elementList: prevState.elementList.filter((e) => e.id !== id),
            currentElement:
                prevState.currentElement === element
                    ? {}
                    : prevState.currentElement,
        }));
    }

    clearList() {
        this.setState({
            elementTreeRoot: new TreeModel().parse({ id: 0, children: [] }),
            currentElement: {},
        });
    }

    handleItemChanged(event, id) {
        const element = this.state.elementList.find((e) => e.id === id);
        const elementIndex = this.state.elementList.findIndex(
            (e) => e.id === id
        );

        const changedField = event.target.name;
        const changedValue = event.target.value;

        const newElement = { ...element, [changedField]: changedValue };
        const newElementList = this.state.elementList;
        newElementList[elementIndex] = newElement;

        this.setState({
            currentElement: newElement,
            elementList: newElementList,
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
                    style={{ minHeight: '100vh' }}
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
                            {/* <ElementEditor
                                onChange={this.handleItemChanged}
                                element={this.state.currentElement}
                                types={this.state.selectedProfile.types}
                            /> */}
                        </Paper>
                    </Grid>

                    <Grid item xs={3}>
                        <Paper>
                            {/* <GeneratedText
                                profile={this.state.selectedProfile}
                                elementList={this.state.elementList}
                            /> */}
                        </Paper>
                    </Grid>
                </Grid>
            </>
        );
    }
}

export default App;
