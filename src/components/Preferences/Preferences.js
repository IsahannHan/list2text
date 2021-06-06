import {
    Card,
    CardContent,
    CardHeader,
    Grid,
    TextField,
    List,
    ListItemText,
    Collapse,
    ListItem,
    IconButton,
    Typography,
    Tooltip
} from '@material-ui/core';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InfoIcon from '@material-ui/icons/Info';
import InputAdornment from '@material-ui/core/InputAdornment';

import { useState, useContext } from 'react';
import ProfilesContext from '../Contexts/ProfilesContext';

const Preferences = (props) => {
    const profiles = useContext(ProfilesContext);
    
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen((prevState) => !prevState);
    };

    console.log(profiles);

    return (
        <Card>
            <CardHeader title="Preferences" />
            <CardContent>
                <Grid
                    container
                    spacing={3}
                    alignItems="flex-start"
                    justify="flex-start"
                >
                    <List>
                        {profiles.map((profile) => {
                            return (
                                <ListItem>
                                    <IconButton
                                        onClick={() => handleClick()}
                                        edge="start"
                                    >
                                        {open ? (
                                            <ExpandLessIcon fontSize="small" />
                                        ) : (
                                            <ExpandMoreIcon fontSize="small" />
                                        )}
                                    </IconButton>
                                    <ListItemText
                                        primary={profile.name}
                                        secondary={profile.description}
                                    />
                                    <Collapse
                                        in={open}
                                        timeout="auto"
                                        unmountOnExit
                                        style={{ paddingLeft: 15 }}
                                    >
                                        {/* {profile.types.map((type) =>
                                            {Object.keys(type).map((key) => {
                                                <Grid item xs={3}>
                                                    <TextField
                                                        // id={type.id}
                                                        // name={type.id}
                                                        // type={type.type}
                                                        label={type.type}
                                                    />
                                                </Grid>;
                                            })}
                                        )} */}

                                        {profile.types.map((type) => {
                                            return (
                                                <Card variant="outlined">
                                                    <Typography variant="h5" component="h2" gutterBottom>
                                                        {type.name}
                                                    </Typography>
                                                    <Typography variant="body2" color="textSecondary" component="p">
                                                        {type.description}
                                                    </Typography>
                                                    <Grid container spacing={3} alignItems="flex-start" justify="flex-start" >
                                                        {type.preferences.map((preference) => {
                                                            return (
                                                                <Grid item xs={3} >
                                                                    <Grid container spacing={1} alignItems="flex-end">
                                                                        <Grid item>
                                                                            <Tooltip title={preference.description}>
                                                                                <InfoIcon />
                                                                            </Tooltip>
                                                                        </Grid>
                                                                        <Grid item>
                                                                            <TextField label={preference.name} value={preference.value} />
                                                                        </Grid>
                                                                    </Grid>
                                                                </Grid>
                                                            );
                                                        })}
                                                    </Grid>
                                                </Card>
                                            );
                                        })}
                                    </Collapse>
                                </ListItem>
                            );
                        })}
                    </List>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default Preferences;
