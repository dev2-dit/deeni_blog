import React from "react";
import {Container} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import styles from "../../styles/Home.module.css";
import InstagramIcon from '@material-ui/icons/Instagram';
import Image from "next/image";
import CardMedia from "@material-ui/core/CardMedia";


export default function Share(){
    return(
        <>
            <div className={styles.sharesection}>
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <div style={{display:'flex',justifyContent:'center'}}>
                        <InstagramIcon/>
                        <Typography variant="body2" align='center' className={styles.share_platform}>
                            Follow
                        </Typography>

                    </div>
                    <Typography variant="h5" align='center' className={styles.section_title}>
                        Follow Me On Instagram
                    </Typography>
                </Grid>

                <Grid item xs={2} className={styles.sharedimages}>
                    <Image
                        src="/demoimage/1000x753.png"
                        alt="blog_image"
                        width={220}
                        height={180}
                    />
                </Grid>
                <Grid item xs={2} className={styles.sharedimages}>
                    <Image
                        src="/demoimage/1000x753.png"
                        alt="blog_image"
                        width={220}
                        height={180}
                    />
                </Grid>
                <Grid item xs={2} className={styles.sharedimages}>
                    <Image
                        src="/demoimage/1000x753.png"
                        alt="blog_image"
                        width={220}
                        height={180}
                    />
                </Grid>
                <Grid item xs={2} className={styles.sharedimages}>
                    <Image
                        src="/demoimage/1000x753.png"
                        alt="blog_image"
                        width={220}
                        height={180}
                    />
                </Grid>
                <Grid item xs={2} className={styles.sharedimages}>
                    <Image
                        src="/demoimage/1000x753.png"
                        alt="blog_image"
                        width={220}
                        height={180}
                    />
                </Grid>
                <Grid item xs={2} className={styles.sharedimages}>
                    <Image
                        src="/demoimage/1000x753.png"
                        alt="blog_image"
                        width={220}
                        height={180}
                        padding={0}
                    />
                </Grid>
            </Grid>

            </div>


            <div className='bottom-space'></div>
        </>
    )
}