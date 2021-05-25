import Container from '@material-ui/core/Container';
import {Grid} from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';
import React from "react";
import Button from '@material-ui/core/Button';

export default function Footer(){
    return(
        <>


            <footer className="fixed-footer bg-dark text-white">

                <Container>
                <Grid container spacing={3}>
                        <Grid item xs={12} md={2}>
                            <div className="foolterlogo">
                                <Typography variant='h4' align='center' className="font-secondary">
                                    <Link href="#"><a className="text-white"> Athena </a></Link>
                                </Typography>
                                <Typography varient='body2' align='center' className="tagline text-white">Creative Magazine</Typography>
                            </div>
                            <Typography variant='body2' align='center' className="site-des">123 Main Street <br/>New York, NY 10001</Typography>
                            <div className="subscribe text-center mt-30">
                                <Button variant="outlined" className='btn'>Subscribe</Button>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={2}>
                        </Grid>

                        <Grid item xs={12} md={8}>
                                <Grid container spacing={3}>
                                    <Grid item xs={6} md={4}>
                                        <Typography variant='body1' className="text-muted">About</Typography>
                                        <ul className="text-white">
                                            <li className="cat-item cat-item-2">
                                                <Link href="#">
                                                    <a className="text-white" >
                                                        <Typography variant="body2">Terms & Conditions</Typography>
                                                    </a>
                                                </Link>
                                            </li>
                                            <li className="cat-item cat-item-2">
                                                <Link href="#">
                                                    <a className="text-white" >
                                                        <Typography variant="body2">Terms & Conditions</Typography>
                                                    </a>
                                                </Link>
                                            </li>
                                            <li className="cat-item cat-item-2">
                                                <Link href="#">
                                                    <a className="text-white" >
                                                        <Typography variant="body2">Terms</Typography>
                                                    </a>
                                                </Link>
                                            </li>
                                            <li className="cat-item cat-item-2">
                                                <Link href="#">
                                                    <a className="text-white" >
                                                        <Typography variant="body2">Terms & Conditions</Typography>
                                                    </a>
                                                </Link>
                                            </li>

                                        </ul>
                                    </Grid>

                                    <Grid item xs={6} md={4}>
                                        <Typography variant='body1' className="widget-title-muted text-muted">About</Typography>
                                        <ul className="mb-30 mr-30 text-white">
                                            <li className="cat-item cat-item-2">
                                                <Link href="#">
                                                    <a className="text-white" >
                                                        <Typography variant="body2">Terms & Conditions</Typography>
                                                    </a>
                                                </Link>
                                            </li>
                                            <li className="cat-item cat-item-2">
                                                <Link href="#">
                                                    <a className="text-white" >
                                                        <Typography variant="body2">Terms & Conditions</Typography>
                                                    </a>
                                                </Link>
                                            </li>
                                            <li className="cat-item cat-item-2">
                                                <Link href="#">
                                                    <a className="text-white" >
                                                        <Typography variant="body2">Terms</Typography>
                                                    </a>
                                                </Link>
                                            </li>
                                            <li className="cat-item cat-item-2">
                                                <Link href="#">
                                                    <a className="text-white" >
                                                        <Typography variant="body2">Terms & Conditions</Typography>
                                                    </a>
                                                </Link>
                                            </li>

                                        </ul>
                                    </Grid>
                                    <Grid item xs={6} md={4}>
                                        <Typography variant='body1' className="widget-title-muted mb-15 text-muted">About</Typography>
                                        <ul className="mb-30 mr-30 text-white">
                                            <li className="cat-item cat-item-2">
                                                <Link href="#">
                                                    <a className="text-white" >
                                                        <Typography variant="body2">Terms & Conditions</Typography>
                                                    </a>
                                                </Link>
                                            </li>
                                            <li className="cat-item cat-item-2">
                                                <Link href="#">
                                                    <a className="text-white" >
                                                        <Typography variant="body2">Terms & Conditions</Typography>
                                                    </a>
                                                </Link>
                                            </li>
                                            <li className="cat-item cat-item-2">
                                                <Link href="#">
                                                    <a className="text-white" >
                                                        <Typography variant="body2">Terms & Conditions</Typography>
                                                    </a>
                                                </Link>
                                            </li>
                                            <li className="cat-item cat-item-2">
                                                <Link href="#">
                                                    <a className="text-white" >
                                                        <Typography variant="body2">Terms</Typography>
                                                    </a>
                                                </Link>
                                            </li>

                                        </ul>
                                    </Grid>

                                </Grid>
                        </Grid>
                    </Grid>
                    <div className="footer-copy-right text-center ">
                        <Typography align='center' variant='body2' className=""><span className="text-muted">©  2020, Athena Magazine | All rights reserved | Designed by </span><a
                            href="" target="_blank" className="text-primary">Deeni Infotech</a>
                        </Typography>
                    </div>
                </Container>
            </footer>


        </>
    )
}