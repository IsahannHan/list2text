import './ElementListButtons.css';

import {
    Button,
    ButtonGroup,
    Container,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
    Tooltip,
} from '@material-ui/core';
import { green, white, blue } from '@material-ui/core/colors';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';

function ElementListButtons() {
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
                    style={{ color: '#FFFFFF', backgroundColor: green[300] }}
                    endIcon={<AddBoxOutlinedIcon />}
                >
                    New
                </Button>
                <Button color="secondary" startIcon={<DeleteOutlinedIcon />}>
                    Clear
                </Button>
            </ButtonGroup>
            
        </Grid>
    );
}

export default ElementListButtons;
