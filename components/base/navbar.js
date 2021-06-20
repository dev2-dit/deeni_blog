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
import Image from "next/image";
import CloseIcon from "@material-ui/icons/Close";



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


    return(

        <>
            <AppBar position="fixed" className='mobile-menu'>
                <Container>

                <Grid container spacing={3}>
                    <Grid item xs={4} style={{display:'flex'}}>
                        <IconButton edge="start" onClick={()=>setOpenDrawer(!openDrawer)} >
                            {openDrawer ? <ArrowUpwardIcon/> :
                                <div className="off-canvas-toggle hidden d-inline-block" id="off-canvas-toggle" style={{marginTop:'12px'}}>
                                    <span></span>
                                </div>
                            }
                        </IconButton>

                        <Typography variant='body1' className="mobile-menuicon-text">Menu</Typography>

                    </Grid>
                    <Grid item xs={4} style={{display:'flex'}}>
                        <Image
                            src="/demoimage/logo.png"
                            alt="blog_image"
                            width={110}
                            height={60}
                        />

                    </Grid>
                    <Grid item xs={4} style={{display:'flex'}}>

                    </Grid>
                </Grid>

                </Container>
        </AppBar>
            <Drawer anchor='left' open={openDrawer} onClose={()=>setOpenDrawer(false)} >
                <div className='leftsidebar'>
                    <CloseIcon style={{color:'#fff',fontSize:32,cursor:'pointer'}} onClick={()=>setOpenDrawer(!openDrawer)}/>
                    <div className="sidemenu-item">
                        <ul>

                            <li>
                                <Link href="/lectures">
                                    <a >Lecture</a>
                                </Link>
                            </li>
                            <li>

                                <Link href="/books">
                                    <a>Book</a>
                                </Link>

                            </li>
                            <li>
                                <Link href="/articles">
                                    <a>
                                        Blog
                                    </a>
                                </Link>
                            </li>

                            <li><Link href="/contact"><a>Contact</a></Link></li>

                            <li><Link href="/"><a target="_blank">Healthy<sup>247</sup></a></Link></li>
                        </ul>
                    </div>

                    <div className="sidemenu-share">
                        <Typography variant='h5' className='text-white'>Follow</Typography>
                        <ul>
                            <li><a href="#" target="_blank">Facebook</a></li>
                            <li><a href="#" target="_blank">Instagram</a></li>
                            <li><a href="#" target="_blank">Behance</a></li>
                            <li><a href="#" target="_blank">Pinterest</a></li>
                        </ul>
                    </div>

                    <div className="sidemenu-share">
                        <ul>
                            <li><a href="#" className="text-muted">ATHENA MAGAZINE</a></li>
                            <li><a href="#" className="text-muted">123 Main Street</a></li>
                            <li><a href="#" className="text-muted">New York, NY 10001</a></li>
                        </ul>
                    </div>

                </div>
            </Drawer>

        </>
    )
}