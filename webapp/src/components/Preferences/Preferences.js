import {
    Card,
    CardHeader,
    Divider,
    Grid,
    Paper,
    Typography,
    IconButton,
    Collapse,
    CardContent,
    TextField,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import React from 'react';

export default class Preferences extends React.Component {
    constructor(props) {
        super(props);

        this.state = { tabingExpanded: false };
    }

    handleExpandClick() {
        this.setState({ tabingExpanded: !this.state.tabingExpanded });
    }

    render() {
        return (
            <Grid container spacing={2} alignItems="center" justify="center">
                <Grid item xs={12}>
                    <Card>
                        <CardHeader
                            title="Preferences"
                            action={
                                <IconButton
                                    aria-label="settings"
                                    onClick={() => this.handleExpandClick()}
                                >
                                    {this.state.tabingExpanded ? (
                                        <ExpandLessIcon />
                                    ) : (
                                        <ExpandMoreIcon />
                                    )}
                                </IconButton>
                            }
                        />
                        <Collapse
                            in={this.state.tabingExpanded}
                            timeout="auto"
                            unmountOnExit
                        >
                            <CardContent>
                                <Grid
                                    container
                                    spacing={3}
                                    alignItems="left"
                                    justify="left"
                                >
                                    <Grid item xs={3}>
                                        <TextField
                                            id="standard-basic"
                                            type="number"
                                            label="Tabs before nested element"
                                        />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <TextField
                                            id="standard-basic"
                                            type="number"
                                            label="Tabs before nested element"
                                        />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <TextField
                                            id="standard-basic"
                                            type="number"
                                            label="Tabs before nested element"
                                        />
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Collapse>
                    </Card>
                </Grid>
            </Grid>
        );
    }
}
