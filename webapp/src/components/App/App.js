import React from 'react';

import { Divider, Grid, Paper, Container } from '@material-ui/core';
import ElementDialogue from '../ElementDialogue/ElementDialogue';
import ElementEditor from '../ElementEditor/ElementEditor';
import ElementList from '../ElementList/ElementList';
import ActionButtons from '../ActionButtons/ActionButtons';
import './App.css';

class App extends React.Component {
    // const [baseFile, setBaseFile] = React.useState(
    //     new BaseFile(
    //         'teste',
    //         'bananinha',
    //         new Conversation('joãozin', 'abacaxi', 5)
    //     )
    // );

    constructor(props) {
        super(props);

        let arrei = [
            ['afff', 'ff'],
            ['wq', 'kekeke'],
        ];
        let kvArray2 = new Map(arrei);
        let kvArray = [
            ['banana', 'joãozinho'],
            ['goiaba', 'tom cruise'],
            ['oiee', kvArray2],
        ];

        this.state = { map: new Map(kvArray), elementCount: 0 };

        this.addNewItem = this.addNewItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.clearMap = this.clearMap.bind(this);
    }

    addNewItem() {
        let value = `New element ${this.state.elementCount}`;
        this.setState({
            map: this.state.map.set(value),
            elementCount: this.state.elementCount + 1,
        });
    }

    deleteItem(value) {
        this.state.map.delete(value);
    }

    clearMap() {
        this.setState({ map: new Map() });
    }

    render() {
        return (
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
                                    deleteItem={this.deleteItem}
                                />
                            </Container>
                        </Grid>
                    </Paper>
                </Grid>

                <Grid item xs={3}>
                    <Paper elevation={3}>
                        <ElementEditor />
                    </Paper>
                </Grid>

                <Grid item xs={3}>
                    <Paper>
                        <ElementDialogue />
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}

export default App;
