import {
    Box,
    Button,
    Container,
    Divider,
    Grid,
    Paper,
} from '@material-ui/core';
import './App.css';

import ElementDisplay from '../ElementDisplay/ElementDisplay';
import ElementList from '../ElementList/ElementList';
import ElementListButtons from '../ElementList/ElementListButtons/ElementListButtons';
import ElementEditor from '../ElementEditor/ElementEditor';

function App() {
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
                        <ElementList />
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
