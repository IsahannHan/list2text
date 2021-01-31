import { Button, ButtonGroup, Grid } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import React from 'react';
import './ActionButtons.css';

export default class ActionButtons extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Grid
                container
                alignItems="center"
                justify="center"
                className="main-container"
                style={{ padding: '5%' }}
            >
                <ButtonGroup
                    disableElevation
                    variant="contained"
                    aria-label="contained button group"
                >
                    <Button
                        style={{
                            color: '#FFFFFF',
                            backgroundColor: green[300],
                        }}
                        endIcon={<AddBoxOutlinedIcon />}
                        onClick={() => this.props.addNewItem()}
                    >
                        New
                    </Button>

                    <Button
                        color="secondary"
                        startIcon={<DeleteOutlinedIcon />}
                        onClick={() => this.props.clearMap()}
                    >
                        Clear
                    </Button>
                </ButtonGroup>
            </Grid>
        );
    }
}
