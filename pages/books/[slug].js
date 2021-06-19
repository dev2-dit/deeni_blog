import Layout from "../../components/base/layout";
import Meta from "../../components/base/meta";
import Share from "../../components/shared/igshare";
import React from "react";
import styles from "../../styles/Book.module.css";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Image from 'next/image'
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import MenuBookIcon from '@material-ui/icons/MenuBook';
import CloudDownloadOutlinedIcon from '@material-ui/icons/CloudDownloadOutlined';
import Bookcard from "../../components/shared/card/bookcard";


export default function book() {

    return(
        <Layout>
            <Meta
                title="Article Page"
                description="Blog Tempalte 2"
            />
            <Container>
                <div className={styles.all_books_show}>
                    <Grid container spacing={4} className={styles.all_books_section}>
                        <Grid item xs={12} md={5}>
                            <div style={{textAlign:'center'}}>
                                <Image
                                    src="/demoimage/book.jpg"
                                    alt="book_image"
                                    width={350}
                                    height={500}
                                />
                            </div>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <Typography variant="h4" className="section_subehading" >
                                উসূলুল ঈমান
                            </Typography>
                            <Typography variant="body1" color="textSecondary" className={styles.book_contributors_name}>
                                লেখক: আব্দুল মালেক আল-কাসেম
                            </Typography>
                            <Typography variant="body1" color="textSecondary"  className={styles.book_contributors_name}>
                                অনুবাদ: জাকের উল্লাহ আবুল খায়ের
                            </Typography>
                            <Typography variant="body1" color="textSecondary" className={styles.book_contributors_name}>
                                লেখক: আব্দুল মালেক আল-কাসেম
                            </Typography>


                            <Divider style={{margin:'30px 0px'}}/>
                            <Button variant="outlined"  className={styles.button_readbook}>
                                <MenuBookIcon style={{margin:'0px 5px'}}/> Read Now
                            </Button>
                            <Button className={styles.button_download}>
                                <CloudDownloadOutlinedIcon style={{margin:'0px 5px'}} /> Download
                            </Button>
                            <Divider style={{margin:'30px 0px'}}/>

                        </Grid>
                    </Grid>
                </div>
            </Container>


            <Share/>
        </Layout>
    )
}