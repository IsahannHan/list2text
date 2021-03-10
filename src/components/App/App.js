import { Container, Divider, Grid, Paper } from '@material-ui/core';
import React from 'react';
import ActionButtons from '../ActionButtons/ActionButtons';
import ElementEditor from '../ElementEditor/ElementEditor';
import ElementList from '../ElementList/ElementList';
import GeneratedText from '../GeneratedText/GeneratedText';
import Preferences from '../Preferences/Preferences';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentElement: { currentKey: '', currentValue: '' },
            map: new Map(),
            elementCount: 1,
            preferences: {
                simpleKeyStart: '',
                simpleKeyEnd: '',

                simpleValueStart: '"',
                simpleValueEnd: '",',

                simpleAssigner: ' : ',

                simpleLineStart: '',
                simpleLineEnd: '\n',

                complexKeyStart: '',
                complexKeyEnd: '',

                complexValueStart: '\n{\n',
                complexValueEnd: '}',

                complexAssigner: ' ',

                complexLineStart: '',
                complexLineEnd: '\n',

                nestedLevel: 0,
                nestedItemStart: '\t',
            },
        };

        this.addNewItem = this.addNewItem.bind(this);
        this.editItem = this.editItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.clearMap = this.clearMap.bind(this);

        this.handlePreferenceChange = this.handlePreferenceChange.bind(this);
        this.handleItemChanged = this.handleItemChanged.bind(this);
    }

    addNewItem(single) {
        let description = 'Type something...';
        let label = `New element ${this.state.elementCount}`;
        let value = single ? description : new Map([[label, description]]);

        this.setState({
            map: this.state.map.set(label, value),
            elementCount: this.state.elementCount + 1,
        });
    }

    editItem(key) {
        this.setState({
            currentElement: {
                currentKey: key,
                currentValue: this.state.map.get(key),
            },
        });
    }

    deleteItem(key) {
        this.state.map.delete(key);

        this.setState({});
    }

    clearMap() {
        this.setState({ map: new Map() });
    }

    handleItemChanged(event) {
        let changedValue = event.target.value;
        let name = event.target.name;

        let key = name === 'key' ? changedValue : this.state.currentElement.currentKey;
        let value = name === 'value' ? changedValue : this.state.currentElement.currentValue;

        this.state.map.set(key, value);

        this.setState({});
    }

    handlePreferenceChange(event) {
        this.setState((prevState) => ({
            preferences: {
                ...prevState.preferences,
                [event.target.name]: [event.target.value]
            },
        }));
    }

    render() {
        return (
            <>
                <Preferences
                    preferences={this.state.preferences}
                    onChange={this.handlePreferenceChange}
                />
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
                                    map={this.map}
                                    addNewItem={this.addNewItem}
                                    clearMap={this.clearMap}
                                />

                                <Divider variant="middle" />

                                <Container
                                    style={{
                                        height: 500,
                                        overflow: 'scroll',
                                    }}
                                >
                                    <ElementList
                                        elementsMap={this.state.map}
                                        editItem={this.editItem}
                                        deleteItem={this.deleteItem}
                                    />
                                </Container>
                            </Grid>
                        </Paper>
                    </Grid>

                    <Grid item xs={3}>
                        <Paper elevation={3}>
                            <ElementEditor
                                onChange={this.handleItemChanged}
                                element={this.state.currentElement}
                            />
                        </Paper>
                    </Grid>

                    <Grid item xs={3}>
                        <Paper>
                            <GeneratedText
                                preferences={this.state.preferences}
                                map={this.state.map}
                            />
                        </Paper>
                    </Grid>
                </Grid>
            </>
        );
    }
}

export default App;
