import styles from '../../styles/Home.module.css';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Image from "next/image";
import Link from "next/link";
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

export default function Blogs() {
    const classes = useStyles();

    return (
        <>
            <Container>
                <div className={styles.home_blogs}>
                    <Grid container>
                        <Grid item xs={12} md={4} >
                            <Card className={styles.card}>
                                <div className={styles.card_content}>
                                    <CardMedia>
                                        <Image
                                            src="/demoimage/1000x753.png"
                                            alt="blog_image"
                                            width={1000}
                                            height={753}
                                        />
                                    </CardMedia>
                                    <CardContent className={styles.card_content}>
                                        <Link href="/lecture"><a>
                                            <Typography variant="body2" className={styles.blog_tag}>
                                                Lizards
                                            </Typography>
                                            </a>
                                        </Link>
                                        <Link href="/lecture"><a>
                                        <Typography component="h5" className={styles.blog_title}>
                                            Lizards are a widespread group of squamate reptiles,
                                        </Typography>
                                        </a>
                                        </Link>
                                    </CardContent>
                                </div>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={4} >
                            <Card className={styles.card}>
                                <div className={styles.card_content}>
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
                        <Grid item xs={12} md={4} >
                            <Card className={styles.card}>
                                <div className={styles.card_content}>
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
