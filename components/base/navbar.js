import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import React, {useState} from "react";
import Link from "next/link";
import Typography from "@material-ui/core/Typography";
import Container from '@material-ui/core/Container';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import HomeIcon from "@material-ui/icons/Home";
import {makeStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import {Grid} from "@material-ui/core";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';



const useStyles = makeStyles({
    list: {
        width: 250,
        color :'#fff',

    },
    fullList: {
        width: 'auto',
    },
});
export default function Navbar() {

    const classes = useStyles();
    const  [openDrawer,setOpenDrawer]=useState(false);
    console.log(openDrawer,"Dsdsd");

    return(

        <>
            <AppBar position="fixed" className='mobile-menu'>
                <Container>

                <Grid container spacing={3}>
                    <Grid item xs={4} style={{display:'flex'}}>
                        <IconButton edge="start" onClick={()=>setOpenDrawer(!openDrawer)} >
                            {openDrawer ? <ArrowUpwardIcon/> : <MenuIcon />  }
                        </IconButton>

                        <Typography variant='body1' className="mobile-menuicon-text">Menu</Typography>

                    </Grid>
                    <Grid item xs={4} style={{display:'flex'}}>
                            <Typography variant='h4' align='center'>
                                <Link href="#"><a className="text-logo"> Athena </a></Link>
                            </Typography>

                    </Grid>
                    <Grid item xs={4} style={{display:'flex'}}>

                    </Grid>
                </Grid>

                </Container>
        </AppBar>
            <div className='mobilemenuitems'>
            <Drawer anchor='top' open={openDrawer} onClose={()=>setOpenDrawer(false)} className={classes.root}>
                    <List>
                        <ListItem button>
                            <Link href="/lecture">
                                <a className="menu-items">Lecture</a>
                            </Link>
                        </ListItem>
                        <ListItem button>
                            <Link href="/lecture">
                                <a className="menu-items">Book</a>
                            </Link>
                        </ListItem>
                        <ListItem button>
                            <Link href="/lecture">
                                <a className="menu-items">Book</a>
                            </Link>
                        </ListItem>
                    </List>
            </Drawer>
            </div>

        </>
    )
}