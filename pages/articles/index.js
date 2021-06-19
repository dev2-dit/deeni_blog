
import Layout from '../../components/base/layout';
import Meta from '../../components/base/meta';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from "@material-ui/core/Typography";
import styles from "../../styles/Article.module.css";
import IconButton from "@material-ui/core/IconButton";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import Avatar from '@material-ui/core/Avatar';
import Image from "next/image";
import Card from '@material-ui/core/Card';
import React from "react";
import Blogcard from "../../components/shared/card/blogcard";
import Share from "../../components/shared/igshare";

export default function ArticleDetails() {
    return (
        <Layout>
            <Meta
                title="Article Page"
                description="Blog Tempalte 2"
            />
            <Container>
                <Grid container spacing={0} className={styles.all_blogs_section}>
                    <Grid item xs={12}>
                        <Typography variant="body1" className={styles.section_title}>
                            <span className={styles.blog_seperator}></span>All Articles
                        </Typography>
                        <Typography variant="h4" className="section_subehading" >
                            Latest Articles
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Blogcard/>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Blogcard/>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Blogcard/>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Blogcard/>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Blogcard/>
                    </Grid>
                </Grid>

                <Share/>

            </Container>
        </Layout>



    )
}
