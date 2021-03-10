import {
    Card,
    CardContent,
    CardHeader,
    Collapse,
    Grid,
    IconButton,
    TextField,
} from '@material-ui/core';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from 'react';

export default class Preferences extends React.Component {
    state = {
        expanded: false,
    };

    preferencesFields = [
        {
            id: 'simpleKeyStart',
            type: '',
            label: 'Simple key start',
        },
        {
            id: 'simpleKeyEnd',
            type: 'text',
            label: 'Simple key end',
        },
        {
            id: 'simpleValueStart',
            type: 'text',
            label: 'Simple value start',
        },
        {
            id: 'simpleValueEnd',
            type: 'text',
            label: 'Simple value end',
        },
        {
            id: 'simpleAssigner',
            type: 'text',
            label: 'Simple expression assigner',
        },
        {
            id: 'simpleLineStart',
            type: 'text',
            label: 'Simple line start',
        },
        {
            id: 'simpleLineEnd',
            type: 'text',
            label: 'Simple line end',
        },
        {
            id: 'complexKeyStart',
            type: 'text',
            label: 'Complex key start',
        },
        {
            id: 'complexKeyEnd',
            type: 'text',
            label: 'Complex key end',
        },
        {
            id: 'complexValueStart',
            type: 'text',
            label: 'Complex value start',
        },
        {
            id: 'complexValueEnd',
            type: 'text',
            label: 'Complex value end',
        },
        {
            id: 'complexAssigner',
            type: 'text',
            label: 'Complex expression assigner',
        },
        {
            id: 'complexLineStart',
            type: 'text',
            label: 'Complex line start',
        },
        {
            id: 'complexLineEnd',
            type: 'text',
            label: 'Complex key end',
        },
        {
            id: 'nestedLevel',
            type: 'number',
            label: 'Starting nested level',
        },
        {
            id: 'nestedItemStart',
            type: 'text',
            label: 'Nested item starting',
        },
    ];

    handleExpandClick() {
        this.setState({ expanded: !this.state.expanded });
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
                                    {this.state.expanded ? (
                                        <ExpandLessIcon />
                                    ) : (
                                        <ExpandMoreIcon />
                                    )}
                                </IconButton>
                            }
                        />
                        <Collapse
                            in={this.state.expanded}
                            timeout="auto"
                            unmountOnExit
                        >
                            <CardContent>
                                <Grid
                                    container
                                    spacing={3}
                                    alignItems="flex-start"
                                    justify="flex-start"
                                >
                                    {this.preferencesFields.map((preference) => {
                                            return (
                                                <Grid item xs={3} key={preference.id}>
                                                    <TextField
                                                        id={preference.id}
                                                        name={preference.id}
                                                        type={preference.type}
                                                        label={preference.label}
                                                        value={this.props.preferences[preference.id]}
                                                        onChange={this.props.onChange}
                                                    />
                                                </Grid>
                                            );
                                        }
                                    )}
                                </Grid>
                            </CardContent>
                        </Collapse>
                    </Card>
                </Grid>
            </Grid>
        );
    }
}
