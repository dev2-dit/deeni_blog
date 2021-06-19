import styles from '../../styles/Home.module.css';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Image from "next/image";
import React from "react";
import OrganizationCard from '../shared/card/organizationcard'



export default function Organizations() {
    return (
        <>
            <div className={styles.section_gap}/>
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12} className={styles.section_titles}>
                        <Typography variant="body1" className={styles.section_title}>
                            <span className={styles.blog_seperator}></span>Oraganizations
                        </Typography>
                        <Typography variant="h3" className="section_subehading" >
                            Connected Non-profitable oraganizations
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <OrganizationCard/>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <OrganizationCard/>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <OrganizationCard/>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}
