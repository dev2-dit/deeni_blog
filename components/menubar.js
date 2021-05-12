import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Image from "next/image";
import Link from "next/link";
import Navbar from './navbar'
import {makeStyles, useTheme} from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import React from "react";
import styles from "../styles/Appbar.module.css";
import IconButton from "@material-ui/core/IconButton";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import SearchIcon from "@material-ui/icons/Search";
const useStyles = makeStyles({
    appbar_second:{
        paddingLeft:0,
        paddingRight:0,
    }
});
export  default function Menubar(){
    const classes = useStyles();
    const theme = useTheme();
    const isMatches = useMediaQuery(theme.breakpoints.down('md'));

    return(
        <>
            <AppBar position="static" className={classes.appbar_second} >
                <Container>
                {isMatches ? <Navbar/> :
                    <Toolbar>
                        <Link href="/">z
                            <a><Image
                                src="/images/logo2.png"
                                alt="Picture of the author"
                                width={180}
                                height={60}

                            /></a>
                        </Link>
                        <Typography variant="h6"  className={styles.menuitem}>
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                        </Typography>
                        <Typography variant="h6"  className={styles.menuitem}>
                            <Link href="/lecture">
                                <a>Lecture</a>
                            </Link>
                        </Typography>
                        <Typography variant="h6"  className={styles.menuitem}>
                            <Link href="/lecture">
                                <a>Article</a>
                            </Link>
                        </Typography>
                        <Typography variant="h6"  className={styles.menuitem}>
                            <Link href="/lecture">
                                <a>Book</a>
                            </Link>
                        </Typography>
                        <Typography variant="h6"  className={styles.menuitem}>
                            <Link href="/lecture">
                                <a>Organization</a>
                            </Link>
                        </Typography>
                        <Typography variant="h6"  className={styles.menuitem}>
                            <Link href="/lecture">
                                <a>About</a>
                            </Link>
                        </Typography>
                        <Typography variant="h6"  className={styles.menuitem} style={{flexGrow:1}}>
                            <Link href="/lecture">
                                <a>Contact</a>
                            </Link>
                        </Typography>

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
                }
                </Container>

            </AppBar>

        </>
    )
}