import React from 'react';
import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import styles from '../../styles/Lecturepage.module.css';
import Grid from '@material-ui/core/Grid';
import Container from "@material-ui/core/Container";
import Link from 'next/link'
import Typography from "@material-ui/core/Typography";
import LectureCard from "../cards/lecture_card";
import Leftsidebar from "../lecture/leftsidebar";
import Alllecturelist from "../lecture/lectures";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));



export default function LectureList(props) {
    const classes = useStyles();
    const lectures =props.lectures;
    const lecturecategories =props.lecturecategories;

    const [state, setState] = useState({
        filter: ''
    })

    const changeCategory =(category)=>{
        setState({ filter: category })

    }


    const filterLecture =lecture =>{
        return lecture.filter((l)=>{
            return l.category && l.category.includes(state.filter)
        })
    }


    return (
        <Container>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={3}>
                     <Leftsidebar category ={lecturecategories || []}
                                  changecat ={changeCategory}
                                   activecategory={state.filter}
                     />

                    </Grid>
                    <Grid item xs={12} md={9}>
                            <Typography variant="h4" style={{padding:'25px 0px'}}>
                                {state.filter ? state.filter : "All Lectures" }
                            </Typography>
                        <Grid container spacing={3}>
                            <Alllecturelist lecturelist={filterLecture(lectures) }/>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </Container>
    );
}
