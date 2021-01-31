import { TextField, Button } from '@material-ui/core';
import React from 'react';

export default class ElementEditor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            key: this.props.element.currentKey,
            value: this.props.element.currentValue,
        };
    }

    render() {
        return (
            <>
                <TextField
                    id="standard-basic"
                    label="Key"
                    value={this.state.key}
                />
                <TextField
                    id="teste-basic"
                    label="Value"
                    value={this.state.value}
                />
                <Button title="Save" />
            </>
        );
    }
}
