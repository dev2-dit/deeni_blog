import {makeStyles, useTheme} from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import React from "react";
import Navbar from './navbar';
import TopAppBar from './appbar'
import Container from '@material-ui/core/Container';
const useStyles = makeStyles({
    appbar_second:{
        paddingLeft:0,
        paddingRight:0,
    }
});

export  default function Menubar(){
    const classes = useStyles();
    const theme = useTheme();
    const isMatches = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <>
                <Container>
                    {isMatches ? <Navbar/> : <TopAppBar/> }
                </Container>
        </>

    )

    }