import {
    Grid,
    Select,
    TextField,
    MenuItem,
    InputLabel,
} from '@material-ui/core';
import React from 'react';

export default class ElementEditor extends React.Component {
    render() {
        return (
            <>
                <Grid
                    container
                    spacing={1}
                    alignItems="center"
                    justify="center"
                    style={{ padding: '10px' }}
                >
                    <Grid item xs={4}>
                        <TextField
                            name="key"
                            label="Key"
                            onChange={(event) =>
                                this.props.onChange(
                                    event,
                                    this.props.element.id
                                )
                            }
                            value={this.props.element.key}
                        />
                    </Grid>

                    <Grid item xs={4}>
                        <TextField
                            name="value"
                            label="Value"
                            onChange={(event) =>
                                this.props.onChange(
                                    event,
                                    this.props.element.id
                                )
                            }
                            value={this.props.element.value}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <InputLabel id="type">Type</InputLabel>
                        <Select
                            value={this.props.element.type}
                            id="type"
                            labelId="Type"
                            name="type"
                            onChange={(event) =>
                                this.props.onChange(
                                    event,
                                    this.props.element.id
                                )
                            }
                        >
                            {this.props.types.map((type) => {
                                return (
                                    <MenuItem value={type.type}>
                                        {type.type}
                                    </MenuItem>
                                );
                            })}
                        </Select>
                    </Grid>
                </Grid>
            </>
        );
    }
}
