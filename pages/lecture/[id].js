import Meta from "../../components/meta";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import styles from "../../styles/Lecturepage.module.css";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Layout from "../../components/layout";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import Divider from "@material-ui/core/Divider";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        boxShadow:'none',
    },

}));


export default function viewLecture(){
    const classes = useStyles();

    return(
        <Layout>
            <Meta
                title="About"
                description="Blog Tempalte 2"
            />
            <Container >
                <Grid container spacing={3} className={styles.lectures}>
                    <Grid item xs={12} sm={12}>
                        <Paper className={styles.paper}>
                        <Grid container spacing={3} >
                            <Grid item xs={12}>
                                   <div className={styles.videoframe}>
                                       <iframe width="100%" height="100%" src="https://www.youtube.com/embed/4WakSYhYnWc" frameBorder="0" allowFullScreen></iframe>
                                   </div>
                            </Grid>
                            <Grid item xs={12} md={8} >
                                <Typography variant="h4" className="section_subehading" className={styles.youtubetitle} >
                                    সিয়াম পরিত্যাগকারির শাস্তি
                                </Typography>
                                <Typography variant="body2" color="textSecondary" className={styles.youtubetitle} >
                                    549 views <span>22 JULY 2020</span>
                                </Typography>


                                <Typography variant="body1" className={styles.section_title}>
                                    <span className={styles.blog_seperator}/>Video Description
                                </Typography>

                                <Typography variant="body1" className={styles.videodescription}>রমাদানে উমরাহ পালনের সওয়াব <br/>

                                    ড. মোহাম্মদ মানজুরে ইলাহী<br/>
                                    সহযোগী অধ্যাপক<br/>
                                    ইসলামিক স্টাডিজ<br/>
                                    জাতীয় বিশ্ববিদ্যালয়<br/>
                                </Typography>

                            </Grid>
                            <Grid item xs={12} md={4}>
                                <div  className={styles.youtubetitle}>
                                    <IconButton  color="inherit" style={{float:'right'}}>
                                        <FacebookIcon />
                                    </IconButton>
                                    <IconButton  color="inherit" style={{float:'right'}}>
                                        <InstagramIcon />
                                    </IconButton>
                                </div>
                            </Grid>
                        </Grid>



                        </Paper>


                    </Grid>


                </Grid>
            </Container>
        </Layout>
    )
}


