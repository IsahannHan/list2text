import { Button, ButtonGroup, Grid } from '@material-ui/core';
import { blue, green } from '@material-ui/core/colors';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import React from 'react';
import './ActionButtons.css';

export default class ActionButtons extends React.Component {

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
                        startIcon={<AddBoxOutlinedIcon />}
                        onClick={() => this.props.addNewItem(true)}
                    >
                        Single
                    </Button>

                    <Button
                        style={{
                            color: '#FFFFFF',
                            backgroundColor: blue[300],
                        }}
                        startIcon={<AddBoxOutlinedIcon />}
                        onClick={() => this.props.addNewItem(false)}
                    >
                        List
                    </Button>

                    <Button
                        color="secondary"
                        startIcon={<DeleteOutlinedIcon />}
                        onClick={() => this.props.clearList()}
                    >
                        Clear
                    </Button>
                </ButtonGroup>
            </Grid>
        );
    }
}
