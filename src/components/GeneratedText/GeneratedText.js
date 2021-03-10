import { TextField } from '@material-ui/core';
import React from 'react';

export default class GeneratedText extends React.Component {

    surround(isKey, isSimple, value) {
        let start = isKey ? (isSimple ? this.props.preferences.simpleKeyStart : this.props.preferences.complexKeyStart ) : (isSimple ? this.props.preferences.simpleValueStart : this.props.preferences.complexValueStart);
        let end = isKey ? (isSimple ? this.props.preferences.simpleKeyEnd : this.props.preferences.complexKeyEnd ) : (isSimple ? this.props.preferences.simpleValueEnd : this.props.preferences.complexValueEnd);

        return start + value + end;
    }

    evaluate(isSimple, key, value){
        let assigner = isSimple ? this.props.preferences.simpleAssigner : this.props.preferences.complexAssigner;

        return key + assigner + value;
    }

    startAndEndLine(isSimple, value){
        let start = isSimple ? this.props.preferences.simpleLineStart : this.props.preferences.complexLineStart;
        let end = isSimple ? this.props.preferences.simpleLineEnd : this.props.preferences.complexLineEnd;

        return start + value + end;
    }

    nest(nestedLevel, value){
        return this.props.preferences.nestedItemStart.repeat(nestedLevel) + value;
    }

    // Creating expressions

    createSimpleExpression(key, value, nestedLevel){
        let formattedKey = this.surround(true, true, key);
        let formattedValue = this.surround(false, true, value);

        let expression = this.evaluate(true, formattedKey, formattedValue);
        let expressionWithStartAndEnd = this.startAndEndLine(true, expression);

        let nestedExpression = this.nest(nestedLevel, expressionWithStartAndEnd);

        return nestedExpression;
    }

    createComplexExpression(key, value, nestedLevel){
        let complexValue = this.generateText(value, nestedLevel+1);

        let formattedKey = this.surround(true, false, key);
        let formattedValue = this.surround(false, false, complexValue);

        let expression = this.evaluate(false, formattedKey, formattedValue);
        let expressionWithStartAndEnd = this.startAndEndLine(false, expression);

        let nestedExpression = this.nest(nestedLevel, expressionWithStartAndEnd);

        return nestedExpression;
    }

    createExpression(key, value, nestedLevel){
        return value instanceof Map ? this.createComplexExpression(key, value, nestedLevel) : this.createSimpleExpression(key, value, nestedLevel);
    }

    // Generator

    generateText(map, nestedLevel) {
        let result = '';

        Array.from(map.entries()).forEach((entry) => {
            let key = entry[0];
            let value = entry[1];

            result += this.createExpression(key, value, nestedLevel);
        });

        return result;
    }

    render() {
        return (
            <TextField
                disabled
                id="outlined-basic"
                label="Generated text"
                variant="outlined"
                multiline
                rows={15}
                fullWidth={true}
                value={this.props.map.size === 0 ? 'Generated text will soon appear here...' : this.generateText(this.props.map, this.props.nestedLevel)}
            />
        );
    }
}
