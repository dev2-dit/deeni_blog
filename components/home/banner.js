import styles from '../../styles/Home.module.css';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Image from 'next/image';
import Button from '@material-ui/core/Button';
import React from "react";
import HorizontalSplitIcon from '@material-ui/icons/HorizontalSplit';




export default function HomeBanner() {
    return (
        <div>
            <Grid container spacing={1} className={styles.banner_section} >
                <Grid item xs={12}  >
                    <Container >
                        <Grid container>
                            <Grid item xs={12} md={6}>
                                <Typography variant="h2" className={styles.heading}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                </Typography>
                                <Typography variant="h5" className={styles.sub_heading}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.
                                </Typography>
                                <Button  className={styles.button_contact} >
                                    Contact
                                </Button>
                                <Button className={styles.button_about}>
                                    About us
                                </Button>
                            </Grid>
                            <Grid item xs={12} md={6} >
                                <div className={styles.banner_image}>
                                    <Image
                                        src="/images/rightbanner.png"
                                        alt="Picture of the author"
                                        width={500}
                                        height={580}
                                    />
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </Grid>
            </Grid>
            <Container style={{display:'flex'}}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <div className={styles.bottom_banner}>
                            <HorizontalSplitIcon className={styles.bottom_icon}/>
                            <Typography variant="h5" >
                                For any announcement. consectetur adipiscing elit, sed do eiusmod tempor i
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}
