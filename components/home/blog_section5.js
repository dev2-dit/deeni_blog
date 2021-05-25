import styles from '../../styles/Home.module.css';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Image from 'next/image';
import LetestBLog from './latest_blog'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import React from "react";
import Link from "next/link";


export default function Blog4() {

    return (
        <>
            <Container>

                <div className={styles.home_blogs}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={8}>
                                <Typography variant="body1" className={styles.section_title}>
                                    <span className={styles.blog_seperator}/>Recently
                                </Typography>
                                <Typography variant="h3" className="section_subehading" >
                                    Latest Stories
                                </Typography>


                                <Card className={styles.root}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} md={3}>
                                            <Typography variant="body2" className={styles.postdate} >
                                                22 JULY 2020
                                            </Typography>
                                            <CardMedia>
                                                <Image
                                                    src="/demoimage/1000x753.png"
                                                    alt="blog_image"
                                                    width={350}
                                                    height={320}
                                                />
                                            </CardMedia>
                                        </Grid>
                                        <Grid item xs={12} md={9}>
                                            <div className={styles.details}>
                                                <CardContent className={styles.content}>
                                                    <Link href="#"><a>
                                                        <Typography component="h5" variant="h5">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i
                                                        </Typography>
                                                    </a></Link>
                                                    <Typography variant="body2" >
                                                        Lorem
                                                    </Typography>
                                                    <Typography variant="subtitle1" color="textSecondary">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i  Lorem ipsum dolor sit amet, consectetur
                                                    </Typography>

                                                </CardContent>
                                            </div>

                                        </Grid>
                                    </Grid>
                                </Card>

                                <Card className={styles.root}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} md={3}>
                                            <Typography variant="body2" className={styles.postdate} >
                                                22 JULY 2020
                                            </Typography>
                                            <CardMedia>
                                                <Image
                                                    src="/demoimage/1000x753.png"
                                                    alt="blog_image"
                                                    width={350}
                                                    height={320}
                                                />
                                            </CardMedia>
                                        </Grid>
                                        <Grid item xs={12} md={9}>
                                            <div className={styles.details}>
                                                <CardContent className={styles.content}>
                                                    <Link href="#"><a>
                                                        <Typography component="h5" variant="h5">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i
                                                        </Typography>
                                                    </a></Link>
                                                    <Typography variant="body2" >
                                                        Lorem
                                                    </Typography>
                                                    <Typography variant="subtitle1" color="textSecondary">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i  Lorem ipsum dolor sit amet, consectetur
                                                    </Typography>

                                                </CardContent>
                                            </div>

                                        </Grid>
                                    </Grid>
                                </Card>
                            </Grid>


                            <Grid item xs={12} md={4}>
                                <div className="widget-header-2">
                                    <h2 className="widget-title">Editor's picked</h2>
                                </div>
                                <LetestBLog/>
                            </Grid>
                        </Grid>

                </div>
        </Container>



        </>
    );
}
