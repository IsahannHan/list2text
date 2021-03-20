import { TextField, Button, Grid } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
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

    createExpression(key, value, children, typePreferences, nestedLevel) {
        // Either its a simple value, or a complex one (calls generateText to create its entire inside)
        const typedValue =
            children.length > 0
                ? this.generateText(children, nestedLevel + 1)
                : value;

        return this.createTypedExpression(
            key,
            typedValue,
            typePreferences,
            nestedLevel
        );
    }

    // Generator

    generateText(childrenList, nestedLevel) {
        let result = '';

        childrenList.forEach((child) => {
            const key = child.model.key;
            const value = child.model.value;
            const type = this.getTypeByElement(child);
            const children = child.children;
            const typePreferences = type.preferences;

            result += this.createExpression(
                key,
                value,
                children,
                typePreferences,
                nestedLevel
            );
        });

        return result;
    }

    getGeneratedText() {
        return this.props.root.children.size === 0
        ? 'Generated text will soon appear here...'
        : this.generateText(
              this.props.root.children,
              this.props.profile.nestedLevel
          );
    }

    // Utils

    getTypeByElement(child) {
        return this.props.profile.types.find(
            (t) => t.type === child.model.type
        );
    }

    copyToClipboard(event) {
        const text =  this.getGeneratedText();


        var dummy = document.createElement('textarea');
        document.body.appendChild(dummy);
        dummy.value = text;
        dummy.select();
        document.execCommand('copy');
        document.body.removeChild(dummy);
    }

    render() {

        return (
            <>
                <TextField
                    disabled
                    id="generated-text"
                    label="Generated text"
                    variant="outlined"
                    multiline
                    rows={15}
                    fullWidth={true}
                    value={this.getGeneratedText()}
                />
                <Grid
                    container
                    alignItems="center"
                    justify="center"
                    className="main-container"
                    style={{ padding: '5%' }}
                >
                    <Button
                        style={{
                            color: '#FFFFFF',
                            backgroundColor: purple[900],
                        }}
                        startIcon={<FileCopyOutlinedIcon />}
                        onClick={() => this.copyToClipboard()}
                    >
                        COPY TO CLIPBOARD
                    </Button>
                </Grid>
            </>
        );
    }
}
