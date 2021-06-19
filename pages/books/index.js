import Layout from "../../components/base/layout";
import Meta from "../../components/base/meta";
import Share from "../../components/shared/igshare";
import React from "react";
import styles from "../../styles/Book.module.css";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
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
                        <Grid item xs={12}>
                            <Typography variant="body1" className={styles.section_title}>
                                <span className={styles.book_seperator}></span>Books
                            </Typography>
                            <Typography variant="h4" className="section_subehading" >
                                Published Books
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Bookcard/>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Bookcard/>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Bookcard/>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Bookcard/>
                        </Grid>
                    </Grid>
                </div>
            </Container>


            <Share/>
        </Layout>
    )
}