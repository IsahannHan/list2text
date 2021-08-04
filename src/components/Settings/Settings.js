import {
    Card,
    CardContent,
    CardHeader,
    Collapse,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
    TextField,
    Tooltip,
    Typography,
} from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InfoIcon from '@material-ui/icons/Info';
import { useContext, useState } from 'react';
import { ProfilesContext } from '../Contexts/ProfilesContext';

const Settings = (props) => {
    const { profiles, removeProfile } = useContext(ProfilesContext);

    const [open, setOpen] = useState(false);

    const buttons = [
        {
            key: 'Delete',
            icon: (
                <DeleteOutlinedIcon
                    fontSize="small"
                    style={{ color: red[300] }}
                />
            ),
            action: (id) => removeProfile(props.id),
        },
    ];

    const handleClick = () => {
        setOpen((prevState) => !prevState);
    };

    console.log(profiles);

    return (
        <Grid
            container
            spacing={3}
            alignItems="center"
            justify="center"
            style={{ minHeight: '100vh', width: '100%' }}
        >
            <Card>
                <CardHeader title="Profiles" />
                <CardContent>
                    <List>
                        {profiles.map((profile) => {
                            return (
                                <ListItem style={{ width: '500px' }}>
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
                                    <ListItemSecondaryAction>
                                        {buttons.map((button) => {
                                            return (
                                                <IconButton
                                                    key={profile.id}
                                                    edge="end"
                                                    onClick={button.action}
                                                >
                                                    {button.icon}
                                                </IconButton>
                                            );
                                        })}
                                    </ListItemSecondaryAction>
                                    <Collapse
                                        in={open}
                                        timeout="auto"
                                        unmountOnExit
                                    >
                                        {profile.types.map((type) => {
                                            return (
                                                <Card variant="outlined">
                                                    <Typography
                                                        variant="h5"
                                                        component="h2"
                                                        gutterBottom
                                                    >
                                                        {type.name}
                                                    </Typography>
                                                    <Typography
                                                        variant="body2"
                                                        color="textSecondary"
                                                        component="p"
                                                    >
                                                        {type.description}
                                                    </Typography>
                                                    <Grid
                                                        container
                                                        spacing={3}
                                                        alignItems="flex-start"
                                                        justify="flex-start"
                                                    >
                                                        {type.preferences.map(
                                                            (preference) => {
                                                                return (
                                                                    <Grid
                                                                        item
                                                                        xs={3}
                                                                    >
                                                                        <Grid
                                                                            container
                                                                            spacing={
                                                                                1
                                                                            }
                                                                            alignItems="flex-end"
                                                                        >
                                                                            <Grid
                                                                                item
                                                                            >
                                                                                <Tooltip
                                                                                    title={
                                                                                        preference.description
                                                                                    }
                                                                                >
                                                                                    <InfoIcon />
                                                                                </Tooltip>
                                                                            </Grid>
                                                                            <Grid
                                                                                item
                                                                            >
                                                                                <TextField
                                                                                    label={
                                                                                        preference.name
                                                                                    }
                                                                                    value={
                                                                                        preference.value
                                                                                    }
                                                                                />
                                                                            </Grid>
                                                                        </Grid>
                                                                    </Grid>
                                                                );
                                                            }
                                                        )}
                                                    </Grid>
                                                </Card>
                                            );
                                        })}
                                    </Collapse>
                                </ListItem>
                            );
                        })}
                    </List>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default Settings;
