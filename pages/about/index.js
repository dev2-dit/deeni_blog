import Layout from '../../components/layout';
import Meta from '../../components/meta';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from "@material-ui/core/Typography";
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import styles from "../../styles/About.module.css";
import { makeStyles } from '@material-ui/core/styles';
import Image from 'next/image';
import React from "react";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        boxShadow:'none',
    },
    paper: {
        padding:'30px 40px',
        textAlign: 'left',
        color: theme.palette.text.secondary,

    },
}));

export default function AboutusPage() {
    const classes = useStyles();
    return (
        <Layout>
            <Meta
                title="About"
                description="Blog Tempalte 2"
            />
            <Container >
                <Grid container spacing={3} className={styles.aboutus}>
                    <Grid item xs={12}>
                        <Typography variant="h4" className="section_subehading" >
                            আমার সম্পর্কে
                        </Typography>
                        <Typography variant="h5" color="textSecondary">
                            ড. মোহাম্মদ মানজুরে ইলাহী। তিনি জাতীয় বিশ্ববিদ্যালয়ের সহযোগী অধ্যাপক। মদীনা ইসলামী বিশ্ববিদ্যালয়-এর শরী‘আহ ফ্যাকাল্টি থেকে গ্রাজোয়েশন লাভ করেন। তারপর একই বিশ্ববিদ্যালয় থেকে মাস্টার্স ও পিএইচ ডি ডিগ্রি লাভ করেন। তিনি বহু গ্রন্থ প্রণয়ন করেছেন। তন্মধ্যে উল্লেখযোগ্য হচ্ছে- আল-কিয়াস ফিল ইবাদাত।
                        </Typography>
                    </Grid>
                    <Grid item xs={12} >
                        <Card className={classes.root}>
                            <Image
                                src="/images/shayekh.jpg"
                                alt="blog_image"
                                width={1280}
                                height={640}
                                style={{borderRadius:8}}
                            />
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper className={classes.paper}>
                            <Typography variant="h5" className={styles.section_title}>
                                <span className={styles.blog_seperator}/>আমার গল্প
                            </Typography>
                            <Typography variant="h5" color="textSecondary" >
                                আপনি যদি আপনার প্রশ্ন বা সমস্যার উত্তর না পেয়ে থাকেন, তবে অনুগ্রহ করে নিচের ফর্ম ব্যবহার করে আমাদের সাথে যোগাযোগ করুন এবং যত তাড়াতাড়ি সম্ভব আমরা আপনার সাথে যোগাযোগ করবো।
                                <br/><br/>
                                আপনি যদি আপনার প্রশ্ন বা সমস্যার উত্তর না পেয়ে থাকেন, তবে অনুগ্রহ করে নিচের ফর্ম ব্যবহার করে আমাদের সাথে যোগাযোগ করুন এবং যত তাড়াতাড়ি সম্ভব আমরা আপনার সাথে যোগাযোগ করবো।

                                <br/><br/>
                                আপনি যদি আপনার প্রশ্ন বা সমস্যার উত্তর না পেয়ে থাকেন, তবে অনুগ্রহ করে নিচের ফর্ম ব্যবহার করে আমাদের সাথে যোগাযোগ করুন এবং যত তাড়াতাড়ি সম্ভব আমরা আপনার সাথে যোগাযোগ করবো।

                            </Typography>

                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Grid container spacing={3} >
                            <Grid item xs={12}>
                                <Paper className={classes.paper}>
                                    <Typography variant="h5" className={styles.section_title}>
                                        <span className={styles.blog_seperator}/>আমার গল্প
                                    </Typography>
                                    <Typography variant="h5" color="textSecondary" >
                                        আপনি যদি আপনার প্রশ্ন বা সমস্যার উত্তর না পেয়ে থাকেন, তবে অনুগ্রহ করে নিচের ফর্ম ব্যবহার করে আমাদের সাথে যোগাযোগ করুন এবং যত তাড়াতাড়ি সম্ভব আমরা আপনার সাথে যোগাযোগ করবো।
                                    </Typography>

                                </Paper>
                            </Grid>
                            <Grid item xs={12}>
                                <Paper className={classes.paper}>
                                    <Typography variant="h5" className={styles.section_title}>
                                        <span className={styles.blog_seperator}/>আমার গল্প
                                    </Typography>
                                    <Typography variant="h5" color="textSecondary" >
                                        আপনি যদি আপনার প্রশ্ন বা সমস্যার উত্তর না পেয়ে থাকেন, তবে অনুগ্রহ করে নিচের ফর্ম ব্যবহার করে আমাদের সাথে যোগাযোগ করুন এবং যত তাড়াতাড়ি সম্ভব আমরা আপনার সাথে যোগাযোগ করবো।
                                    </Typography>

                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Layout>



    )
}
