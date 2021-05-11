import BlogCard from '../../components/cards/blog_card';
import Layout from '../../components/layout';
import Meta from '../../components/meta';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from "@material-ui/core/Typography";
import styles from "../../styles/Article.module.css";
import {getArticles} from "../../actions";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Image from "next/image";
import CardContent from "@material-ui/core/CardContent";
import React from "react";



export default function AllArticles({articles}) {
    const articledata = articles;

    return (

        <Layout>
            <Meta
                title="Article"
                description="Blog Tempalte 2"
            />
            <Container >
            <Grid container spacing={3} className={styles.all_blogs_section}>
                <Grid item xs={12}>
                    <Typography variant="body1" className={styles.section_title}>
                        <span className={styles.blog_seperator}></span>All Articles
                    </Typography>
                    <Typography variant="h4" className="section_subehading" >
                        Latest Articles
                    </Typography>
                </Grid>
                {
                    articledata && articledata.length && articledata.map((data,i)=>{
                        return(
                            <Grid container item xs={12} md={3} key={i} >
                                <BlogCard articledata={data}/>
                            </Grid>
                        )
                    })

                }


            </Grid>
            </Container>
        </Layout>



    )
}
export async function getStaticProps(context) {

    const articles = await getArticles();
    return {
        props: {
            articles
        },
    }
}