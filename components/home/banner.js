import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import styles from '../../styles/Home.module.css';
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "@material-ui/core/Button";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import CloudDownloadOutlinedIcon from "@material-ui/icons/CloudDownloadOutlined";

export default function Banner() {
    return (
        <Container>
            <div className={styles.banner_section}>
                <Grid container>
                    <Grid item xs={12} md={5} >
                        <Image
                            src="/demoimage/banner.png"
                            alt="blog_image"
                            width={480}
                            height={510}
                        />
                    </Grid>
                    <Grid item xs={12} md={7} >
                        <Typography component="h4" variant='h4' className={styles.banner_subheading}>
                           Official Website
                        </Typography>
                        <Typography component="h2" variant='h2' className={styles.banner_heading}>
                            Dr. Mohammad Manzure Elahi
                        </Typography>
                        <Typography component="p" variant='body1' color="textSecondary" className={styles.banner_description}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Dupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Typography>

                        <Button variant="outlined" className={styles.banner_button_about}>
                            About
                        </Button>
                        <Link href="contact"><a>
                        <Button variant="outlined" color="primary" className={styles.banner_button_contact}>
                             Contact
                        </Button>
                        </a></Link>

                    </Grid>
                </Grid>
            </div>
        </Container>
    )
}