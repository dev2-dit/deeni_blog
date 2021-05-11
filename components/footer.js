import styles from '../styles/Home.module.css';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from '@material-ui/core/Container';
import React from "react";
import Image from "next/image";



export default function Footer(){

    return(
        <>
            <div className={styles.footer}>
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={4} className={styles.footer_1}>
                        <Image
                            src="/images/logo2.png"
                            alt="blog_image"
                            width={100}
                            height={40}
                        />
                        <Typography className={styles.footer_item}>23 Main Street <br/>
                            New York, NY 10001
                        </Typography>
                        {/*<Button variant="outlined" className={styles.button_footer} >*/}
                        {/*    Contact*/}
                        {/*</Button>*/}
                    </Grid>
                    <Grid item xs={6} md={2} className={styles.footer_2}>
                        <Typography variant="body1" className={styles.footer_heading}>
                            About
                        </Typography>
                        <Typography variant="body2" className={styles.footer_item}>
                            Terms
                        </Typography>
                        <Typography variant="body2" className={styles.footer_item}>
                            Conditions
                        </Typography>
                        <Typography variant="body2" className={styles.footer_item}>
                            Terms & Conditions
                        </Typography>
                    </Grid>
                    <Grid item xs={6} md={2} className={styles.footer_2}>
                        <Typography variant="body1" className={styles.footer_heading}>
                            About
                        </Typography>
                        <Typography variant="body2" className={styles.footer_item}>
                            Terms
                        </Typography>
                        <Typography variant="body2" className={styles.footer_item}>
                            Conditions
                        </Typography>
                        <Typography variant="body2" className={styles.footer_item}>
                            Terms & Conditions
                        </Typography>
                    </Grid>
                    <Grid item xs={6} md={2} className={styles.footer_2}>
                        <Typography variant="body1" className={styles.footer_heading}>
                            Pages
                        </Typography>
                        <Typography variant="body2" className={styles.footer_item}>
                            Terms
                        </Typography>
                        <Typography variant="body2" className={styles.footer_item}>
                            Conditions
                        </Typography>
                        <Typography variant="body2" className={styles.footer_item}>
                            Terms & Conditions
                        </Typography>
                    </Grid>
                    <Grid item xs={6} md={2} className={styles.footer_2}>
                        <Typography variant="body1" className={styles.footer_heading}>
                            News
                        </Typography>
                        <Typography variant="body2" className={styles.footer_item}>
                            Terms
                        </Typography>
                        <Typography variant="body2" className={styles.footer_item}>
                            Conditions
                        </Typography>
                        <Typography variant="body2" className={styles.footer_item}>
                            Terms & Conditions
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
            </div>

        </>
    )
}