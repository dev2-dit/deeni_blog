import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Container from '@material-ui/core/Container';
import {Grid} from "@material-ui/core";
import Link from "next/link";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import React, {useState} from "react";
import Drawer from '@material-ui/core/Drawer';
import CloseIcon from '@material-ui/icons/Close';
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import Image from 'next/image'


export default function TopAppBar() {


    const  [openDrawer,setOpenDrawer]=useState(false);

    return (
        <div>
            <AppBar position="fixed" className='main-menu'>
                <Container>
                    <Toolbar>
                        <Grid container spacing={3}>
                            <Grid item xs={4} style={{display:'flex'}}>
                                {/*<IconButton edge="start"  aria-label="menu" onClick={()=>setOpenDrawer(!openDrawer)}>*/}
                                {/*    <MenuIcon className='icons' />*/}
                                {/*</IconButton>*/}

                                <div className="off-canvas-toggle-cover d-none d-lg-inline-block mr-20" onClick={()=>setOpenDrawer(!openDrawer)}>
                                    {openDrawer ? <CloseIcon style={{color:'black',fontSize:'32',fontWeight:'200',cursor:'pointer'}} onClick={()=>setOpenDrawer(!openDrawer)}/> :
                                        <div className="off-canvas-toggle hidden d-inline-block" id="off-canvas-toggle">
                                            <span style={{marginTop:'20px'}}></span>
                                        </div>
                                    }
                                </div>
                               <div className='lg-menus' style={{display:'flex'}} >
                                   <Typography variant="body1" >
                                       <Link href="/lectures">
                                           <a className="menu-items">Lecture</a>
                                       </Link>
                                   </Typography>
                                   <Typography variant="body1" >
                                       <Link href="/books">
                                           <a className="menu-items">Book</a>
                                       </Link>
                                   </Typography>
                                   <Typography variant="body1" >
                                       <Link href="/articles">
                                           <a className="menu-items hiegh-lightedmenu">
                                               Blog
                                           </a>
                                       </Link>
                                   </Typography>
                               </div>
                            </Grid>
                            <Grid item xs={4} align='center'>
                                <Link href="/"><a>
                                <Image
                                    src="/demoimage/logo.png"
                                    alt="blog_image"
                                    width={110}
                                    height={60}
                                />
                                    </a>
                                </Link>
                            </Grid>
                            <Grid item xs={4}>
                                {/*<div style={{display:'flex',justifyContent:'flex-end'}}>*/}
                                {/*        <FacebookIcon className='icons menu-icons'/>*/}
                                {/*        <InstagramIcon className='icons menu-icons'/>*/}
                                {/*        <TwitterIcon className='icons menu-icons'/>*/}
                                {/*        <SearchIcon className='icons menu-icons' />*/}
                                {/*</div>*/}
                            </Grid>
                        </Grid>
                   </Toolbar>
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
                        <Typography variant='h6' className='text-white'>Follow</Typography>
                        <ul>
                            <li><a href="#" target="_blank">Facebook</a></li>
                            <li><a href="#" target="_blank">Instagram</a></li>
                            <li><a href="#" target="_blank">Behance</a></li>
                        </ul>
                    </div>

                    <div className="sidemenu-share">
                        <ul>
                            <li><a href="#" className="text-muted">123 Main Street</a></li>
                            <li><a href="#" className="text-muted">New York, NY 10001</a></li>
                        </ul>
                    </div>

                </div>
            </Drawer>
        </div>
    );
}
