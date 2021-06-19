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
import BookCard from "../shared/card/bookcard";



export default function Homebook() {
    return (
        <>

            <div className={styles.home_blogslatest}>
                <Container>
                    <div className={styles.white_box_content}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={8} className={styles.section_titles}>
                                <Typography variant="body1" className={styles.section_title}>
                                    <span className={styles.blog_seperator}></span>Book
                                </Typography>
                                <Typography variant="h3" className="section_subehading" >
                                    Published Book
                                </Typography>

                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Link href="/book"><a>
                                <div className="view-more text-right">
                                    <Button variant="outlined" className='btn'>View All Books</Button>
                                </div>
                                </a></Link>
                            </Grid>

                            <Grid item xs={12} md={4}>
                                <BookCard/>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <BookCard/>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <BookCard/>
                            </Grid>

                        </Grid>
                    </div>
                </Container>
            </div>
        </>
    );
}
