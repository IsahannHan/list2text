import {
    Divider,
    Grid,
    Paper,
    Container
} from '@material-ui/core';
import ElementDisplay from '../ElementDisplay/ElementDisplay';
import ElementEditor from '../ElementEditor/ElementEditor';
import ElementList from '../ElementList/ElementList';
import ElementListButtons from '../ElementList/ElementListButtons/ElementListButtons';
import './App.css';

import BaseFile from '../../model/usdf/basefile';
import Conversation from '../../model/usdf/conversation';

function App() {

    let baseFile = new BaseFile(
        'teste',
        'bananinha',
        new Conversation('joãozin', 'retarda', 5)
    );

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
                        <ElementListButtons />
                        <Divider variant="middle" />
                        <Container>
                        <ElementList baseElement={baseFile} />
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
                    <ElementDisplay />
                </Paper>
            </Grid>
        </Grid>
    );
}

export default App;
