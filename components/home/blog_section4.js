import styles from '../../styles/Home.module.css';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Image from 'next/image';
import Link from 'next/link'
import LetestBLog from './latest_blog'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import React from "react";
import Button from "@material-ui/core/Button";



export default function Blog4() {
    return (
        <>

                <div className={styles.home_blogslatest}>
                    <Container>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={7}>
                            <Typography variant="body1" className={styles.section_title}>
                                <span className={styles.blog_seperator}/>Travel
                            </Typography>
                            <Typography variant="h3" className="section_subehading" >
                                Explore interesting journeys
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
                        <Grid item xs={12} md={5}>
                            <div className="view-more text-right mt-30">
                                <Button variant="outlined" className='btn'>View More</Button>
                            </div>
                            <LetestBLog/>
                        </Grid>
                    </Grid>
                    </Container>
                </div>
        </>
    );
}
