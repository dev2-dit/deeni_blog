import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import Box from "@material-ui/core/Typography";
import styles from "../styles/Appbar.module.css";
import Divider from "@material-ui/core/Divider";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import HomeIcon from "@material-ui/icons/Home";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import BookIcon from "@material-ui/icons/Book";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import PersonIcon from "@material-ui/icons/Person";
import MailIcon from "@material-ui/icons/Mail";
import {makeStyles} from "@material-ui/core/styles";



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
           <div style={{display:'flex'}}>
               <IconButton edge="start" onClick={()=>setOpenDrawer(!openDrawer)} >
                   <MenuIcon />
               </IconButton>
               <div style={{textAlign:'center'}}>
                   <Link href="/" >
                       <a><Image
                           src="/images/logo2.png"
                           alt="Picture of the author"
                           width={180}
                           height={60}

                       /></a>
                   </Link>
               </div>
           </div>
           <Drawer anchor='left' open={openDrawer} onClose={()=>setOpenDrawer(false)}>
               <div>
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
               <List className={classes.list}>
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
           </Drawer>

       </>
   )
}