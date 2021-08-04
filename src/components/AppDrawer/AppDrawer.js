import {
    AppBar,
    CssBaseline,
    Drawer,
    IconButton,
    List,
    ListItemText,
    Toolbar,
} from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { HomeOutlined, SettingsOutlined } from '@material-ui/icons';
import FileCopyOutlined from '@material-ui/icons/FileCopyOutlined';
import InfoIcon from '@material-ui/icons/Info';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import React from 'react';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { BrowserRouter, Route } from 'react-router-dom';
import { Snackbar } from '@material-ui/core';
import Generator from '../Generator/Generator';
import ProfilesProvider from '../Contexts/ProfilesContext';
import Settings from '../Settings/Settings';
import Welcome from '../Welcome/Welcome';
import About from '../About/About';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: { display: 'flex' },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

const AppDrawer = () => {
    const classes = useStyles();
    const theme = useTheme();

    const [open, setOpen] = React.useState(false);

    const drawerValues = [
        { title: 'Welcome', icon: <HomeOutlined />, path: '/' },
        { title: 'Generator', icon: <FileCopyOutlined />, path: '/generator' },
        { title: 'Settings', icon: <SettingsOutlined />, path: '/settings' },
        { title: 'About', icon: <InfoIcon />, path: '/about' },
    ];

    const handleDrawer = () => {
        setOpen(!open);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >
                <div className={classes.toolbar}>
                    <ListItem button onClick={handleDrawer}>
                        <ListItemIcon>
                            <MenuIcon />
                        </ListItemIcon>
                        <ListItemText>Menu</ListItemText>
                    </ListItem>
                </div>
                <List>
                    {drawerValues.map((item) => (
                        <Link to={item.path} style={{ textDecoration: 'none', color: 'black' }}>
                            <ListItem
                                button
                                key={item.title}
                                onClick={item.onClick}
                            >
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText>{item.title}</ListItemText>
                            </ListItem>
                        </Link>
                    ))}
                </List>
            </Drawer>
            <main className={classes.content}>
                <ProfilesProvider>
                    <Route exact path="/">
                        <Welcome />
                    </Route>
                    <Route exact path="/generator">
                        <Generator />
                    </Route>
                    <Route exact path="/settings">
                        <Settings />
                    </Route>
                    <Route exact path="/about">
                        <About />
                    </Route>
                </ProfilesProvider>
            </main>
        </div>
    );
};

export default AppDrawer;
