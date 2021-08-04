import {
    Grid,
    Select,
    TextField,
    MenuItem,
    InputLabel,
    FormControl
} from '@material-ui/core';
import React from 'react';

export default class ElementEditor extends React.Component {
    render() {
        if(!this.props.element.model){
            return <></>;
        }

        const id = this.props.element.model.id;
        const key = this.props.element.model.key;
        const type = this.props.element.model.type;
        const value = this.props.element.model.value

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
                            onChange={(event) => this.props.onChange(event, id)}
                            value={key || ''}
                            variant="filled"
                            fullWidth={true}
                        />
                    </Grid>

                    <Grid item xs={4}>
                        <TextField
                            name="value"
                            label="Value"
                            onChange={(event) => this.props.onChange(event, id)}
                            value={value || ''}
                            variant="filled"
                            fullWidth={true}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <FormControl variant="filled">
                            <InputLabel id="typez">Type</InputLabel>
                            <Select
                                value={type || ''}
                                id="type"
                                labelId="typez"
                                name="type"
                                variant="filled"
                                minWidth="200px"
                                onChange={(event) =>
                                    this.props.onChange(event, id)
                                }
                            >
                                {this.props.types.map((t) => {
                                    return (
                                        <MenuItem key={t.type} value={t.type}>
                                            {t.type}
                                        </MenuItem>
                                    );
                                })}
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            </>
        );
    }
}
