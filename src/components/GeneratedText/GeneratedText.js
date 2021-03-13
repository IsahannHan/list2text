import { TextField } from '@material-ui/core';
import React from 'react';

export default class GeneratedText extends React.Component {
    surround(isKey, value, typePreferences) {
        const start = isKey
            ? typePreferences.keyStart
            : typePreferences.valueStart;
        const end = isKey ? typePreferences.keyEnd : typePreferences.valueEnd;

        return start + value + end;
    }

    evaluate(key, value, typePreferences) {
        const assigner = typePreferences.assigner;

        return key + assigner + value;
    }

    startAndEndLine(value, typePreferences) {
        const start = typePreferences.lineStart;
        const end = typePreferences.lineEnd;

        return start + value + end;
    }

    nest(value, nestedLevel) {
        const nestedItemStart = this.props.profile.nestedItemStart;

        return nestedItemStart.repeat(nestedLevel) + value;
    }

    // Creating expressions

    createTypedExpression(key, value, typePreferences, nestedLevel) {
        let formattedKey = this.surround(true, key, typePreferences);
        let formattedValue = this.surround(false, value, typePreferences);

        let expression = this.evaluate(
            formattedKey,
            formattedValue,
            typePreferences
        );
        let expressionWithStartAndEnd = this.startAndEndLine(
            expression,
            typePreferences
        );

        let nestedExpression = this.nest(
            expressionWithStartAndEnd,
            nestedLevel
        );

        return nestedExpression;
    }

    createExpression(key, value, typePreferences, nestedLevel) {
        // Either its a simple value, or a complex one (calls generateText to create its entire inside)
        const typedValue = Array.isArray(value)
            ? this.generateText(value, nestedLevel + 1)
            : value;

        return this.createTypedExpression(
            key,
            typedValue,
            typePreferences,
            nestedLevel
        );
    }

    // Generator

    generateText(elementList, nestedLevel) {
        let result = '';

        elementList.forEach((element) => {
            const key = element.key;
            const value = element.value;
            const type = this.getTypeByElement(element);
            const typePreferences = type.preferences;

            result += this.createExpression(
                key,
                value,
                typePreferences,
                nestedLevel
            );
        });

        return result;
    }

    // Utils

    getTypeByElement(element) {
        return this.props.profile.types.find((t) => t.type === element.type);
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
                value={
                    this.props.elementList.size === 0
                        ? 'Generated text will soon appear here...'
                        : this.generateText(
                              this.props.elementList,
                              this.props.profile.nestedLevel
                          )
                }
            />
        );
    }
}
