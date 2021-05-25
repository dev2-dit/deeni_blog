import styles from '../../styles/Home.module.css';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Image from "next/image";
import React from "react";


const useStyles = makeStyles({
    root: {
        borderRadius:0,
        border:0,
        backgroundColor:'red',
    },
    media: {
        height: 140,
    },
    content: {
        padding:0,
        paddingTop:0,
        border:0,
        "&:hover": {
            backgroundColor: 'rgb(7, 177, 77, 0.42)'
        }
    },
});

export default function Blogs2() {
    const classes = useStyles();

    return (
        <>
            <div className={styles.section_gap}></div>
            <Container>
                <div>
                    <Grid container>
                        <Grid item xs={12} className={styles.section_titles}>
                            <Typography variant="body1" className={styles.section_title}>
                                <span className={styles.blog_seperator}></span>Video
                            </Typography>
                            <Typography variant="h3" className="section_subehading" >
                                Most Popular
                            </Typography>
                        </Grid>


                        <Grid item xs={12} md={6} >
                            <Card className={styles.card}>
                                <div className={styles.card_content}>
                                    <Typography variant="body2" className={styles.postdate} >
                                        22 JULY 2020
                                    </Typography>
                                    <CardMedia>
                                        <Image
                                            src="/demoimage/1000x753.png"
                                            alt="blog_image"
                                            width={1000}
                                            height={753}
                                        />
                                    </CardMedia>

                                    <CardContent className={styles.card_content}>
                                        <Typography variant="body2" className={styles.blog_tag}>
                                            Lizards
                                        </Typography>
                                        <Typography component="h4" className={styles.blog_title_large}>
                                            How to Work From Home: 20 Tips From People Who Do It Successfully
                                        </Typography>
                                    </CardContent>
                                </div>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={6} >
                            <Card className={styles.card}>
                                <div className={styles.card_content}>
                                    <Typography variant="body2" className={styles.postdate} >
                                        22 JULY 2020
                                    </Typography>
                                    <CardMedia>
                                        <Image
                                            src="/demoimage/1000x753.png"
                                            alt="blog_image"
                                            width={1000}
                                            height={753}
                                        />
                                    </CardMedia>

                                    <CardContent className={styles.card_content}>
                                        <Typography variant="body2" className={styles.blog_tag}>
                                            Lizards
                                        </Typography>
                                        <Typography component="h4" className={styles.blog_title_large}>
                                            How to Work From Home: 20 Tips From People Who Do It Successfully
                                        </Typography>
                                    </CardContent>
                                </div>
                            </Card>
                        </Grid>

                        <Grid item xs={12} md={4} >
                            <Card className={styles.card}>
                                <div className={styles.card_content}>
                                    <Typography variant="body2" className={styles.postdate} >
                                        22 JULY 2020
                                    </Typography>
                                    <CardMedia>
                                        <Image
                                            src="/demoimage/1000x753.png"
                                            alt="blog_image"
                                            width={1000}
                                            height={753}
                                        />
                                    </CardMedia>
                                    <CardContent className={styles.card_content}>
                                        <Typography variant="body2" className={styles.blog_tag}>
                                            Lizards
                                        </Typography>
                                        <Typography component="h5" className={styles.blog_title}>
                                            Lizards are a widespread group of squamate reptiles,
                                        </Typography>
                                    </CardContent>
                                </div>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={4} >
                            <Card className={styles.card}>
                                <div className={styles.card_content}>
                                    <CardMedia>
                                        <Typography variant="body2" className={styles.postdate} >
                                            22 JULY 2020
                                        </Typography>
                                        <Image
                                            src="/demoimage/1000x753.png"
                                            alt="blog_image"
                                            width={480}
                                            height={360}
                                        />
                                    </CardMedia>
                                    <CardContent className={styles.card_content}>
                                        <Typography variant="body2" className={styles.blog_tag}>
                                            Lizards
                                        </Typography>
                                        <Typography component="h5" className={styles.blog_title}>
                                            Lizards are a widespread group of squamate reptiles,
                                        </Typography>
                                    </CardContent>
                                </div>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={4} >
                            <Card className={styles.card}>
                                <div className={styles.card_content}>
                                    <Typography variant="body2" className={styles.postdate} >
                                        22 JULY 2020
                                    </Typography>
                                    <CardMedia>
                                        <Image
                                            src="/demoimage/1000x753.png"
                                            alt="blog_image"
                                            width={480}
                                            height={360}
                                        />
                                    </CardMedia>
                                    <CardContent className={styles.card_content}>
                                        <Typography variant="body2" className={styles.blog_tag}>
                                            Lizards
                                        </Typography>
                                        <Typography component="h5" className={styles.blog_title}>
                                            Lizards are a widespread group of squamate reptiles,
                                        </Typography>
                                    </CardContent>
                                </div>
                            </Card>
                        </Grid>

                    </Grid>
                </div>
            </Container>
        </>
    );
}
