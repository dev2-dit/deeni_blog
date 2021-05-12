import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import DragHandleIcon from '@material-ui/icons/DragHandle';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import SearchIcon from '@material-ui/icons/Search';
import Image from 'next/image'
import styles from '../styles/Appbar.module.css';
import Container from '@material-ui/core/Container';
import Link from 'next/link'
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import clsx from "clsx";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import MailIcon from "@material-ui/icons/Mail";
import HomeIcon from '@material-ui/icons/Home';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import BookIcon from '@material-ui/icons/Book';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import PersonIcon from '@material-ui/icons/Person';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles({
    list: {
        width: 250,
        color :'#fff',

    },
    fullList: {
        width: 'auto',
    },
});

export default function TopAppBar() {

    const classes = useStyles();
    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <Box className={styles.logo} >
                <Link href="/">
                    <a><Image
                        src="/images/logo2.png"
                        alt="Picture of the author"
                        width={180}
                        height={60}

                    /></a>
                </Link>
            </Box>
            <Divider />
            <List>
                <ListItem button>
                    <ListItemIcon><HomeIcon style={{color:'#fff'}}/></ListItemIcon>
                    <Link href={'/'}><a>
                    <ListItemText primary="Home" />
                    </a>
                    </Link>
                </ListItem>

                <ListItem button>
                    <ListItemIcon><VideoLibraryIcon style={{color:'#fff'}} /></ListItemIcon>
                    <Link href={'/lecture'}><a>
                    <ListItemText primary="Lecture " />
                    </a>
                    </Link>
                </ListItem>
                <ListItem button>
                    <ListItemIcon><BookIcon style={{color:'#fff'}}/></ListItemIcon>
                    <Link href={'/article'}><a>
                    <ListItemText primary="Blog" />
                    </a>
                    </Link>
                </ListItem>
                <ListItem button>
                    <ListItemIcon><MenuBookIcon style={{color:'#fff'}} /></ListItemIcon>
                    <Link href={'/book'}><a>
                    <ListItemText primary="Book" />
                    </a>
                    </Link>
                </ListItem>
                <ListItem button>

                    <ListItemIcon><LocationCityIcon style={{color:'#fff'}} /></ListItemIcon>
                    <Link href={'/organization'}><a>
                    <ListItemText primary="Organization " />
                    </a>
                    </Link>
                </ListItem>
                <ListItem button>
                    <ListItemIcon><PersonIcon style={{color:'#fff'}} /></ListItemIcon>
                    <Link href={'/about'}><a>
                    <ListItemText primary="About" />
                    </a>
                    </Link>
                </ListItem>
                <ListItem button>
                    <ListItemIcon><MailIcon style={{color:'#fff'}} /></ListItemIcon>
                    <Link href={'/contact'}><a>
                    <ListItemText primary="Contact" />
                    </a>
                    </Link>
                </ListItem>
            </List>
        </div>
    );
    return (
            <AppBar position="static">
                <Container>
                <Toolbar>
                    <IconButton edge="start"  color="inherit" aria-label="menu" >

                            <React.Fragment>
                                <MenuIcon onClick={toggleDrawer('left', true)}/>
                                <SwipeableDrawer
                                    anchor={'left'}
                                    open={state['left']}
                                    onClose={toggleDrawer('left', false)}
                                    onOpen={toggleDrawer('left', true)}
                                >
                                    {list('left')}
                                </SwipeableDrawer>
                            </React.Fragment>
                    </IconButton>

                    <Typography variant="h6" className={styles.menuitem}>
                        <Link href="/lecture">
                            <a>Lecture</a>
                        </Link>
                    </Typography>
                    <Typography variant="h6"  className={styles.menuitem}>
                        <Link href="/article">
                            <a>Blog</a>
                        </Link>

                    </Typography>


                    <Box className={styles.logo} style={{flexGrow:1}} >

                        <Link href="/">
                            <a><Image
                                src="/images/logo2.png"
                                alt="Picture of the author"
                                width={150}
                                height={60}

                            /></a>
                        </Link>
                    </Box>

                    <IconButton  color="inherit" className={styles.menu_icon} >
                        <FacebookIcon />
                    </IconButton>
                    <IconButton  color="inherit"  className={styles.menu_icon}>
                        <InstagramIcon />
                    </IconButton>
                    <IconButton  color="inherit">
                        <SearchIcon  />
                    </IconButton>

                </Toolbar>
                </Container>
            </AppBar>

    );
}
