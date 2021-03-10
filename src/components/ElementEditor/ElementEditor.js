import { TextField, Button } from '@material-ui/core';
import React from 'react';

export default class ElementEditor extends React.Component {
    render() {
        return (
            <>
                <TextField
                    name="key"
                    label="Key"
                    onChange={this.props.onChange}
                    value={this.props.element.currentKey}
                />
                <TextField
                    name="value"
                    label="Value"
                    onChange={this.props.onChange}
                    value={this.props.element.currentValue}
                />
            </>
        );
    }
}
