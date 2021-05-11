import Meta from "../../components/meta";
import Layout from "../../components/layout";
import Container from "@material-ui/core/Container";
import styles from "../../styles/Books.module.css";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import BookCard from "../../components/cards/book_card";
import Image from 'next/image';
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import React from "react";
import MenuBookIcon from '@material-ui/icons/MenuBook';
import CloudDownloadOutlinedIcon from '@material-ui/icons/CloudDownloadOutlined';


export default function BookDetails(){
    return(
        <div>
            <Layout>
                <Meta
                    title="Book Details"
                    description="Blog Tempalte 2"
                />
                <Container>
                    <div className={styles.book_section}>
                        <Grid container spacing={3} className={styles.book_details_section}>
                            <Grid item xs={12} md={5}>
                               <div style={{textAlign:'center'}}>
                                   <Image
                                       src="/images/book.jpg"
                                       alt="blog_image"
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
                                    <Button  className="button_contact">
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

            </Layout>
        </div>
    )
}